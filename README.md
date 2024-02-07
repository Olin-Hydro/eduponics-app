# Web Application for Hydroponic System

The objective of this application is to provide different types of users -- admins and community members -- a way of interacting with our physical hydroponic system. It can serve as an accessible window for admins to remotely control the system and automate it as they see fit. For the community members, you can see the historical sensor data and the patterns from the system. With those functionalities in mind, we created a web application using AWS Amplify.

Amplify is a convenient platform for developing fullstack application that span across various AWS services. For instance, it will automatically link your application to AppSync GraphQL API and also create DynamoDB database tables for each models you define in the schema. It also provides free web hosting, which we have used as well.

## Functionalities

The main functionalities are as follows:

#### MQTT Client

**Send commands for scheduling when the actuators turn on**
Select your desired actuator (ex. water pump), select start time, on interval, and off interval. The actuator will then turn on at the start time for your on interval, turn off for your off interval, and repeat until a new schedule gets issued.

#### Sensor Data Charts

**Retrieve historical sensor data and plot them against time**
The chart component will load the latest 100 sensor logs from the database and create a line chart for each sensor data type. Also, the chart will automatically update itself and load new data points as they get saved realtime.

#### Authentication

**Admin and observer user groups**
Through AWS Cognito service, we created user groups of varying levels of access. Normally, when a user creates an account through the app, the user will not have rights to publish any commands to the hydroponic system. This is to prevent any physical abuse/misuse of our hydroponic system because the commands users issue will be reflected in a very physical sense. Thus, only users who are added to the admin user group will be authorized to send commands.

## Structure of the App

The app is built using JavaScript and React.js, and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) through Amplify's CLI command `amplify init`.

```
.
├── amplify
│   └── backend
│       ├── api
│       ├── auth
│       └── types
├── public
└── src
    ├── components
    │   └── Dashboard
    ├── graphql
    └── ui-components
```

_The above shows relevant directories in the repo._

In the root directory, you'll find `./amplify` which contains various configurations pertaining to the GraphQL API, authorizations, and general configurations. Then, in the `./public` directory, you can find `index.html`, which is what ultimately gets display on the webpage, along with some metadata files. Finally, in the `./src` directory, you'll find `components` folder which has all the custom React components we developed for the application. In the `graphql` and `ui-components` folder, you'll find portable query, mutation, and subscription calls, as well as some UI components that use them that were auto-generated some our GraphQL schema.

## Services Used

The main AWS services used are:

- IoT Core => MQTT server, message routing
- Cognito => Authentication, access levels
- Appsync => GraphQL API
- DynamoDB => Database for sensor logs
- Amplify => Fullstack development, hosting
