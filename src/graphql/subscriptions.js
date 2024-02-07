/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCmdLog = /* GraphQL */ `
  subscription OnCreateCmdLog($filter: ModelSubscriptionCmdLogFilterInput) {
    onCreateCmdLog(filter: $filter) {
      id
      target
      start_time
      on_interval
      off_interval
      timestamp
      __typename
    }
  }
`;
export const onUpdateCmdLog = /* GraphQL */ `
  subscription OnUpdateCmdLog($filter: ModelSubscriptionCmdLogFilterInput) {
    onUpdateCmdLog(filter: $filter) {
      id
      target
      start_time
      on_interval
      off_interval
      timestamp
      __typename
    }
  }
`;
export const onDeleteCmdLog = /* GraphQL */ `
  subscription OnDeleteCmdLog($filter: ModelSubscriptionCmdLogFilterInput) {
    onDeleteCmdLog(filter: $filter) {
      id
      target
      start_time
      on_interval
      off_interval
      timestamp
      __typename
    }
  }
`;
export const onCreateActionLog = /* GraphQL */ `
  subscription OnCreateActionLog(
    $filter: ModelSubscriptionActionLogFilterInput
  ) {
    onCreateActionLog(filter: $filter) {
      id
      target
      action
      timestamp
      __typename
    }
  }
`;
export const onUpdateActionLog = /* GraphQL */ `
  subscription OnUpdateActionLog(
    $filter: ModelSubscriptionActionLogFilterInput
  ) {
    onUpdateActionLog(filter: $filter) {
      id
      target
      action
      timestamp
      __typename
    }
  }
`;
export const onDeleteActionLog = /* GraphQL */ `
  subscription OnDeleteActionLog(
    $filter: ModelSubscriptionActionLogFilterInput
  ) {
    onDeleteActionLog(filter: $filter) {
      id
      target
      action
      timestamp
      __typename
    }
  }
`;
export const onCreateSensorLog = /* GraphQL */ `
  subscription OnCreateSensorLog(
    $filter: ModelSubscriptionSensorLogFilterInput
  ) {
    onCreateSensorLog(filter: $filter) {
      id
      target
      value
      timestamp
      __typename
    }
  }
`;
export const onUpdateSensorLog = /* GraphQL */ `
  subscription OnUpdateSensorLog(
    $filter: ModelSubscriptionSensorLogFilterInput
  ) {
    onUpdateSensorLog(filter: $filter) {
      id
      target
      value
      timestamp
      __typename
    }
  }
`;
export const onDeleteSensorLog = /* GraphQL */ `
  subscription OnDeleteSensorLog(
    $filter: ModelSubscriptionSensorLogFilterInput
  ) {
    onDeleteSensorLog(filter: $filter) {
      id
      target
      value
      timestamp
      __typename
    }
  }
`;
