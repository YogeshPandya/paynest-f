import React from "react";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";

const CustomTabs = styled(Box)({
  display: "flex",
  width: "100vw",
  backgroundColor: "#156fb2",
  borderRadius: "15px 15px 0 0",
  padding: "0px",
  justifyContent: "space-between",
  flexWrap: "nowrap", 
});

const CustomTab = styled(Button)(({ selected, color }) => ({
  flex: 1,
  textTransform: "none",
  fontSize: "14px",
  fontWeight: "bold",
  borderRadius: "15px 15px 0 0",
  backgroundColor: selected ? color : "#F0F0F0",
  color: selected ? "#fff" : color,
  margin: "0",
  minWidth: "auto",
}));

const DailyAndMonthlyTabs = ({ tabIndex, onChange }) => (
  <CustomTabs>
    <CustomTab onClick={() => onChange(0)} selected={tabIndex === 0} color="#3babd9">
      Daily Earnings
    </CustomTab>
    <CustomTab onClick={() => onChange(1)} selected={tabIndex === 1} color="#3babd9">
      Monthly Earnings
    </CustomTab>
  </CustomTabs>
);

export default DailyAndMonthlyTabs;
