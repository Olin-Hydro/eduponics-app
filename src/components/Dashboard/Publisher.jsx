import { PubSub } from "aws-amplify";
import { useState } from "react";

import { Button, Message, Heading, SelectField } from "@aws-amplify/ui-react";
import Grid from "@mui/material/Grid";
import dayjs from "dayjs";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function Publisher({ topic, isAdmin }) {
  const [sentMsgs, setSentMsgs] = useState([]);
  const [target, setTarget] = useState("water_pump");
  const [startTime, setStartTime] = useState(
    dayjs("01-10-00 am", "hh-mm-ss a")
  );
  const [onInterval, setOnInterval] = useState(dayjs("0-0-0", "H-m-s"));
  const [offInterval, setOffInterval] = useState(dayjs("0-0-0", "H-m-s"));

  const handleSendMsg = async () => {
    const msg = makeMsg();
    const newSentMsgs = [...sentMsgs, msg];
    await PubSub.publish(topic, { msg });
    setSentMsgs(newSentMsgs); // Update the state with the new message
  };

  const makeMsg = () => {
    let msg = {
      target: target,
      startTime: startTime.format("HH:mm:ss"),
      onInterval: onInterval.format("HH:mm:ss"),
      offInterval: offInterval.format("HH:mm:ss"),
    };
    return JSON.stringify(msg, null, 2);
  };

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Heading level="2" fontWeight="regular" fontSize="2rem">
          Publisher
        </Heading>
        <p>
          The box below can be used to publish messages back to your devices by
          publishing to the topic "<b>{topic}</b>"
        </p>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <SelectField
            label="Select target actuator:"
            value={target}
            onChange={(newValue) => setTarget(newValue.target.value)}
          >
            <option value="water_pump">Water Pump</option>
            <option value="nutrient_pump">Nutrient Pump</option>
            <option value="led">Lights</option>
          </SelectField>
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent={"center"}
            marginY={1}
          >
            <TimeField
              label="Set start time of actuation"
              value={startTime}
              onChange={(newValue) => setStartTime(newValue)}
              format="hh:mm:ss a"
              clearable={true}
            />
          </Grid>
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent={"center"}
            marginY={1}
          >
            <TimeField
              label="Set on-interval"
              value={onInterval}
              onChange={(newValue) => setOnInterval(newValue)}
              format="H:m:s"
              clearable={true}
            />
          </Grid>
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent={"center"}
            marginY={1}
          >
            <TimeField
              label="Set off-interval"
              value={offInterval}
              onChange={(newValue) => setOffInterval(newValue)}
              format="H:m:s"
              clearable={true}
            />
          </Grid>
        </LocalizationProvider>
        <Grid item xs={12} marginY={1}>
          <Button
            className="btn btn-primary"
            onClick={() => handleSendMsg()}
            isDisabled={!isAdmin}
          >
            Publish Message
          </Button>
        </Grid>
        <Message variation="filled" colorTheme="info">
          Only admins can publish messages. You can still view messages if you
          are not an admin.
        </Message>
      </Grid>
      <Grid item xs={12}>
        <h3>Sent Messages:</h3>
        <p>Your sent messages will appear here</p>
        <Message id="sentMsg" variation="filled" heading="Sent Message">
          {sentMsgs.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </Message>
      </Grid>
    </Grid>
  );
}

export default Publisher;
