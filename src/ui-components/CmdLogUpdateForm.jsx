/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getCmdLog } from "../graphql/queries";
import { updateCmdLog } from "../graphql/mutations";
export default function CmdLogUpdateForm(props) {
  const {
    id: idProp,
    cmdLog: cmdLogModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    target: "",
    start_time: "",
    on_interval: "",
    off_interval: "",
    timestamp: "",
  };
  const [target, setTarget] = React.useState(initialValues.target);
  const [start_time, setStart_time] = React.useState(initialValues.start_time);
  const [on_interval, setOn_interval] = React.useState(
    initialValues.on_interval
  );
  const [off_interval, setOff_interval] = React.useState(
    initialValues.off_interval
  );
  const [timestamp, setTimestamp] = React.useState(initialValues.timestamp);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = cmdLogRecord
      ? { ...initialValues, ...cmdLogRecord }
      : initialValues;
    setTarget(cleanValues.target);
    setStart_time(cleanValues.start_time);
    setOn_interval(cleanValues.on_interval);
    setOff_interval(cleanValues.off_interval);
    setTimestamp(cleanValues.timestamp);
    setErrors({});
  };
  const [cmdLogRecord, setCmdLogRecord] = React.useState(cmdLogModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getCmdLog.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCmdLog
        : cmdLogModelProp;
      setCmdLogRecord(record);
    };
    queryData();
  }, [idProp, cmdLogModelProp]);
  React.useEffect(resetStateValues, [cmdLogRecord]);
  const validations = {
    target: [{ type: "Required" }],
    start_time: [{ type: "Required" }],
    on_interval: [{ type: "Required" }],
    off_interval: [{ type: "Required" }],
    timestamp: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertTimeStampToDate = (ts) => {
    if (Math.abs(Date.now() - ts) < Math.abs(Date.now() - ts * 1000)) {
      return new Date(ts);
    }
    return new Date(ts * 1000);
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          target,
          start_time,
          on_interval,
          off_interval,
          timestamp,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateCmdLog.replaceAll("__typename", ""),
            variables: {
              input: {
                id: cmdLogRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CmdLogUpdateForm")}
      {...rest}
    >
      <TextField
        label="Target"
        isRequired={true}
        isReadOnly={false}
        value={target}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              target: value,
              start_time,
              on_interval,
              off_interval,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.target ?? value;
          }
          if (errors.target?.hasError) {
            runValidationTasks("target", value);
          }
          setTarget(value);
        }}
        onBlur={() => runValidationTasks("target", target)}
        errorMessage={errors.target?.errorMessage}
        hasError={errors.target?.hasError}
        {...getOverrideProps(overrides, "target")}
      ></TextField>
      <TextField
        label="Start time"
        isRequired={true}
        isReadOnly={false}
        value={start_time}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              target,
              start_time: value,
              on_interval,
              off_interval,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.start_time ?? value;
          }
          if (errors.start_time?.hasError) {
            runValidationTasks("start_time", value);
          }
          setStart_time(value);
        }}
        onBlur={() => runValidationTasks("start_time", start_time)}
        errorMessage={errors.start_time?.errorMessage}
        hasError={errors.start_time?.hasError}
        {...getOverrideProps(overrides, "start_time")}
      ></TextField>
      <TextField
        label="On interval"
        isRequired={true}
        isReadOnly={false}
        value={on_interval}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              target,
              start_time,
              on_interval: value,
              off_interval,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.on_interval ?? value;
          }
          if (errors.on_interval?.hasError) {
            runValidationTasks("on_interval", value);
          }
          setOn_interval(value);
        }}
        onBlur={() => runValidationTasks("on_interval", on_interval)}
        errorMessage={errors.on_interval?.errorMessage}
        hasError={errors.on_interval?.hasError}
        {...getOverrideProps(overrides, "on_interval")}
      ></TextField>
      <TextField
        label="Off interval"
        isRequired={true}
        isReadOnly={false}
        value={off_interval}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              target,
              start_time,
              on_interval,
              off_interval: value,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.off_interval ?? value;
          }
          if (errors.off_interval?.hasError) {
            runValidationTasks("off_interval", value);
          }
          setOff_interval(value);
        }}
        onBlur={() => runValidationTasks("off_interval", off_interval)}
        errorMessage={errors.off_interval?.errorMessage}
        hasError={errors.off_interval?.hasError}
        {...getOverrideProps(overrides, "off_interval")}
      ></TextField>
      <TextField
        label="Timestamp"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={timestamp && convertToLocal(convertTimeStampToDate(timestamp))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              target,
              start_time,
              on_interval,
              off_interval,
              timestamp: value,
            };
            const result = onChange(modelFields);
            value = result?.timestamp ?? value;
          }
          if (errors.timestamp?.hasError) {
            runValidationTasks("timestamp", value);
          }
          setTimestamp(value);
        }}
        onBlur={() => runValidationTasks("timestamp", timestamp)}
        errorMessage={errors.timestamp?.errorMessage}
        hasError={errors.timestamp?.hasError}
        {...getOverrideProps(overrides, "timestamp")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || cmdLogModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || cmdLogModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
