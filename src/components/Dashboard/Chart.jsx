import React, { useEffect, useState } from "react";
import { listSensorLogsByTimestamp } from "../../graphql/queries";
import { GraphQLAPI } from "@aws-amplify/api-graphql";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const fetchSensorLogs = async (target) => {
  try {
    const result = await GraphQLAPI.graphql({
      query: listSensorLogsByTimestamp,
      variables: {
        sortDirection: "DESC",
        limit: 100,
        target: target,
      },
    });
    return result.data.listSensorLogsByTimestamp.items
      .map((log) => ({
        timestamp: new Date(log.timestamp).toLocaleTimeString(),
        value: parseFloat(log.value).toFixed(2),
        target: log.target,
      }))
      .reverse();
  } catch (error) {
    console.error(`Error fetching ${target} data:`, error);
    return [];
  }
};

const SensorLineChart = ({ data, target, color }) => {
  return (
    <ResponsiveContainer width="100%" aspect={1}>
      <LineChart
        width={500}
        height={300}
        data={data}
        syncId="anyId"
        margin={{
          top: 5,
          right: 20,
          left: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={"timestamp"} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          connectNulls
          type="monotone"
          dataKey="value"
          stroke={color}
          activeDot={{ r: 8 }}
          name={target}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

const TemperatureChart = ({ subMsgs }) => {
  const [tempLogs, setTempLogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSensorLogs("temperature");
      setTempLogs(data);
    };
    fetchData();
  }, [subMsgs]);

  return (
    <SensorLineChart data={tempLogs} target="Temperature" color="#8884d8" />
  );
};

const HumidityChart = ({ subMsgs }) => {
  const [humLogs, setHumLogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSensorLogs("humidity");
      setHumLogs(data);
    };
    fetchData();
  }, [subMsgs]);

  return <SensorLineChart data={humLogs} target="Humidity" color="#0373fc" />;
};

const LuminanceChart = ({ subMsgs }) => {
  const [lumLogs, setLumLogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSensorLogs("luminance");
      setLumLogs(data);
    };
    fetchData();
  }, [subMsgs]);

  return (
    <SensorLineChart data={lumLogs} target="Illuminance" color="#fc6603" />
  );
};
export { TemperatureChart, HumidityChart, LuminanceChart };
