provider "aws" {
  region  = "us-east-2"
  profile = "eduponics-dev"
}

provider "local" {
  # Used for saving certificates and keys locally
}

# Generate a new IoT Thing
resource "aws_iot_thing" "esp32_edu" {
  name = "ESP32-edu"
}

# Generate a certificate for the thing
resource "aws_iot_certificate" "esp32_edu_cert" {
  active = true # Automatically activate the certificate
}

# Save the certificate and private key to local files
resource "local_file" "certificate_pem" {
  content  = aws_iot_certificate.esp32_edu_cert.certificate_pem
  filename = "${path.module}/ESP32-edu_certificate.pem.crt"
}

resource "local_file" "private_key" {
  content  = aws_iot_certificate.esp32_edu_cert.private_key
  filename = "${path.module}/ESP32-edu_private.pem.key"
}

# Attach the certificate to the IoT Thing
resource "aws_iot_thing_principal_attachment" "attachment" {
  principal = aws_iot_certificate.esp32_edu_cert.arn
  thing     = aws_iot_thing.esp32_edu.name
}

# Create policy for the IoT Thing
resource "aws_iot_policy" "pubsub_esp32" {
  name = "PubSubESP32"

  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Effect" : "Allow",
        "Action" : "iot:Connect",
        "Resource" : "arn:aws:iot:us-east-2:128824347591:client/${aws_iot_thing.esp32_edu.name}"
      },
      {
        "Effect" : "Allow",
        "Action" : "iot:Subscribe",
        "Resource" : "arn:aws:iot:us-east-2:128824347591:topicfilter/cmd"
      },
      {
        "Effect" : "Allow",
        "Action" : "iot:Receive",
        "Resource" : "arn:aws:iot:us-east-2:128824347591:topic/*"
      },
      {
        "Effect" : "Allow",
        "Action" : "iot:Publish",
        "Resource" : "arn:aws:iot:us-east-2:128824347591:topic/logs*"
      },
      {
        "Effect" : "Allow",
        "Action" : "*",
        "Resource" : "*"
      }
    ]
  })
}

resource "aws_iot_policy_attachment" "policy_attachment" {
  policy = aws_iot_policy.pubsub_esp32.name
  target = aws_iot_certificate.esp32_edu_cert.arn
}

resource "aws_iot_policy_attachment" "auth_group_attachment" {
  policy = aws_iot_policy.pubsub_esp32.name
  target = aws_cognito_identity_pool.eduponics_identity_pool.id
}

data "aws_iam_policy" "AWSIoTConfigAccess" {
  arn = "arn:aws:iam::aws:policy/AWSIoTConfigAccess"
}

data "aws_iam_policy" "AWSIoTDataAccess" {
  arn = "arn:aws:iam::aws:policy/AWSIoTDataAccess"
}

resource "aws_iam_role_policy_attachment" "attach_iot_config_policy" {
  role       = aws_iam_role.amplify_auth.name
  policy_arn = data.aws_iam_policy.AWSIoTConfigAccess.arn
}

resource "aws_iam_role_policy_attachment" "attach_iot_data_policy" {
  role       = aws_iam_role.amplify_auth.name
  policy_arn = data.aws_iam_policy.AWSIoTDataAccess.arn
}

data "aws_dynamodb_table" "sensor_log_table" {
  name = "SensorLog-bc6jy67zh5fphhof7bzhriea54-dev"
}

resource "aws_iam_policy" "dynamodb_policy_iot" {
  name        = "IoTDynamoDBPolicy"
  path        = "/"
  description = "Write access to DynamoDB for IoT rule"
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect   = "Allow",
        Action   = "dynamodb:PutItem",
        Resource = data.aws_dynamodb_table.sensor_log_table.arn
      }
    ]
  })
}

resource "aws_iam_role" "dynamodb_iot_role" {
  name = "iot-core-sensorlogs-db"
  assume_role_policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Effect" : "Allow",
        "Principal" : {
          "Service" : "iot.amazonaws.com"
        },
        "Action" : "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "attach_dynampodb_policy" {
  role       = aws_iam_role.dynamodb_iot_role.name
  policy_arn = aws_iam_policy.dynamodb_policy_iot.arn
}

resource "aws_iot_topic_rule" "dynamodb_logging" {
  description = "Store sensor log to dynamodb"
  enabled     = true
  name        = "dynamodb_sensor_log"
  sql         = "select \n{\"id\": newuuid(), \n\"target\": topic(2),\n\"value\": value,\n\"timestamp\": timestamp(),\n\"__typename\": \"SensorLog\"\n} \nfrom 'sensor/+'"
  sql_version = "2016-03-23"
  tags        = {}
  tags_all    = {}
  dynamodbv2 {
    role_arn = aws_iam_role.dynamodb_iot_role.arn
    put_item {
      table_name = data.aws_dynamodb_table.sensor_log_table.name
    }
  }
}
