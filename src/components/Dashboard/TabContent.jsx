import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/joy/Typography";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

import { TemperatureChart, HumidityChart, LuminanceChart } from "./Chart";
import { TopicSubscriber } from "./Subscriber";
import Publisher from "./Publisher";
import { Box } from "@mui/system";
var PUB_TOPIC = "cmd/";
var SUB_TOPIC = "sensor/+";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SensorTab = ({ subMsgs }) => {
  return (
    <Grid container spacing={1} marginTop={5}>
      <Grid item xs={4}>
        <Item>
          <Typography gutterBottom>Temperature (°C)</Typography>
          <TemperatureChart subMsgs={subMsgs} />
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Typography gutterBottom>Humidity (%)</Typography>
          <HumidityChart subMsgs={subMsgs} />
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Typography gutterBottom>Ambient Light (lux)</Typography>
          <LuminanceChart subMsgs={subMsgs} />
        </Item>
      </Grid>
    </Grid>
  );
};

const MQTTTab = ({ subMsgs, setSubMsgs, isAdmin }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box display="flex" flexDirection={"row"} margin={5}>
          <Item>
            <Publisher topic={PUB_TOPIC} isAdmin={isAdmin} />
          </Item>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box display="flex" flexDirection={"row"} margin={5}>
          <Item>
            <TopicSubscriber
              topic={SUB_TOPIC}
              subMsgs={subMsgs}
              setSubMsgs={setSubMsgs}
            />
          </Item>
        </Box>
      </Grid>
    </Grid>
  );
};

export { SensorTab, MQTTTab };
