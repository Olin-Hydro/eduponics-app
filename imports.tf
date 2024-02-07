import {
  to = aws_cognito_identity_pool.eduponics_identity_pool
  id = "us-east-2:9b693cb5-5739-475e-81f2-b74cdeaebb09"
}

import {
  to = aws_amplify_app.app
  id = "d4h4r8gki4ps7"
}

import {
  to = aws_iam_role.amplify_auth
  id = "amplify-eduponicsapp-dev-181923-authRole"
}

resource "aws_cognito_identity_pool" "eduponics_identity_pool" {
  allow_classic_flow               = false
  allow_unauthenticated_identities = false
  developer_provider_name          = null
  identity_pool_name               = "eduponicsapp5754a9b4_identitypool_5754a9b4__dev"
  openid_connect_provider_arns     = []
  saml_provider_arns               = []
  supported_login_providers        = {}
  tags                             = {}
  tags_all                         = {}
  cognito_identity_providers {
    client_id               = "2d062uq93vjve816sur5t0f5em"
    provider_name           = "cognito-idp.us-east-2.amazonaws.com/us-east-2_Xtem9c1JZ"
    server_side_token_check = false
  }
  cognito_identity_providers {
    client_id               = "68jgf8ko9l45t2c6l4feaoaku0"
    provider_name           = "cognito-idp.us-east-2.amazonaws.com/us-east-2_Xtem9c1JZ"
    server_side_token_check = false
  }
}

resource "aws_amplify_app" "app" {
  access_token                  = null # sensitive
  auto_branch_creation_patterns = []
  basic_auth_credentials        = null # sensitive
  build_spec                    = "version: 1\nbackend:\n  phases:\n    build:\n      commands:\n        - '# Execute Amplify CLI with the helper script'\n        - amplifyPush --simple\nfrontend:\n  phases:\n    preBuild:\n      commands:\n        - npm ci\n    build:\n      commands:\n        - npm run build\n  artifacts:\n    baseDirectory: build\n    files:\n      - '**/*'\n  cache:\n    paths:\n      - node_modules/**/*\n"
  custom_headers                = null
  description                   = null
  enable_auto_branch_creation   = false
  enable_basic_auth             = false
  enable_branch_auto_build      = false
  enable_branch_auto_deletion   = false
  environment_variables = {
    _LIVE_UPDATES = "[{\"name\":\"Amplify CLI\",\"pkg\":\"@aws-amplify/cli\",\"type\":\"npm\",\"version\":\"latest\"}]"
  }
  iam_service_role_arn = "arn:aws:iam::128824347591:role/amplifyconsole-backend-role"
  name                 = "eduponicsapp"
  oauth_token          = null # sensitive
  platform             = "WEB"
  repository           = "https://github.com/olin-hydro/eduponics-app"
  tags                 = {}
  tags_all             = {}
}

resource "aws_iam_role" "amplify_auth" {
  assume_role_policy    = "{\"Statement\":[{\"Action\":\"sts:AssumeRoleWithWebIdentity\",\"Condition\":{\"ForAnyValue:StringLike\":{\"cognito-identity.amazonaws.com:amr\":\"authenticated\"},\"StringEquals\":{\"cognito-identity.amazonaws.com:aud\":\"us-east-2:9b693cb5-5739-475e-81f2-b74cdeaebb09\"}},\"Effect\":\"Allow\",\"Principal\":{\"Federated\":\"cognito-identity.amazonaws.com\"}}],\"Version\":\"2012-10-17\"}"
  description           = null
  force_detach_policies = false
  managed_policy_arns = [
    "arn:aws:iam::aws:policy/AWSIoTConfigAccess",
    "arn:aws:iam::aws:policy/AWSIoTDataAccess",
  ]
  max_session_duration = 3600
  name                 = "amplify-eduponicsapp-dev-181923-authRole"
  name_prefix          = null
  path                 = "/"
  permissions_boundary = null
  tags = {
    "user:Application" = "eduponicsapp"
    "user:Stack"       = "dev"
  }
  tags_all = {
    "user:Application" = "eduponicsapp"
    "user:Stack"       = "dev"
  }
}
