/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCmdLog = /* GraphQL */ `
  mutation CreateCmdLog(
    $input: CreateCmdLogInput!
    $condition: ModelCmdLogConditionInput
  ) {
    createCmdLog(input: $input, condition: $condition) {
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
export const updateCmdLog = /* GraphQL */ `
  mutation UpdateCmdLog(
    $input: UpdateCmdLogInput!
    $condition: ModelCmdLogConditionInput
  ) {
    updateCmdLog(input: $input, condition: $condition) {
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
export const deleteCmdLog = /* GraphQL */ `
  mutation DeleteCmdLog(
    $input: DeleteCmdLogInput!
    $condition: ModelCmdLogConditionInput
  ) {
    deleteCmdLog(input: $input, condition: $condition) {
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
export const createActionLog = /* GraphQL */ `
  mutation CreateActionLog(
    $input: CreateActionLogInput!
    $condition: ModelActionLogConditionInput
  ) {
    createActionLog(input: $input, condition: $condition) {
      id
      target
      action
      timestamp
      __typename
    }
  }
`;
export const updateActionLog = /* GraphQL */ `
  mutation UpdateActionLog(
    $input: UpdateActionLogInput!
    $condition: ModelActionLogConditionInput
  ) {
    updateActionLog(input: $input, condition: $condition) {
      id
      target
      action
      timestamp
      __typename
    }
  }
`;
export const deleteActionLog = /* GraphQL */ `
  mutation DeleteActionLog(
    $input: DeleteActionLogInput!
    $condition: ModelActionLogConditionInput
  ) {
    deleteActionLog(input: $input, condition: $condition) {
      id
      target
      action
      timestamp
      __typename
    }
  }
`;
export const createSensorLog = /* GraphQL */ `
  mutation CreateSensorLog(
    $input: CreateSensorLogInput!
    $condition: ModelSensorLogConditionInput
  ) {
    createSensorLog(input: $input, condition: $condition) {
      id
      target
      value
      timestamp
      __typename
    }
  }
`;
export const updateSensorLog = /* GraphQL */ `
  mutation UpdateSensorLog(
    $input: UpdateSensorLogInput!
    $condition: ModelSensorLogConditionInput
  ) {
    updateSensorLog(input: $input, condition: $condition) {
      id
      target
      value
      timestamp
      __typename
    }
  }
`;
export const deleteSensorLog = /* GraphQL */ `
  mutation DeleteSensorLog(
    $input: DeleteSensorLogInput!
    $condition: ModelSensorLogConditionInput
  ) {
    deleteSensorLog(input: $input, condition: $condition) {
      id
      target
      value
      timestamp
      __typename
    }
  }
`;
