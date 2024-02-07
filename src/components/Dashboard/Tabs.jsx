import "@aws-amplify/ui-react/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { styled } from "@mui/material/styles";

import { Tabs, Tab } from "@mui/material";
import Box from "@mui/material/Box";

const DashboardTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

const DashboardTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: "#fff",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

export default function CustomizedTabs({ activeTab, setActiveTab }) {
  const handleChange = (_, newActiveTab) => {
    setActiveTab(newActiveTab);
  };

  return (
    <Box sx={{ bgcolor: "#B1C381" }}>
      <DashboardTabs value={activeTab} onChange={handleChange} centered>
        <DashboardTab label="Communications" />
        <DashboardTab label="Sensor Data" />
      </DashboardTabs>
    </Box>
  );
}
