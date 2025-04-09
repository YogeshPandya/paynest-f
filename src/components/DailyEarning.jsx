import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import InvestmentPopup from "./PopupModel";

const keyMapping = {
  "Invest Amount": "investAmount",
  "Total Earnings": "totalEarnings",
  "Return Period": "returnPeriod",
  "Periodic Return": "periodicReturn",
  "Earning Chances": "earningChances",
};

const DailyEarning = ({ data, onInvest }) => (
  <Card
    sx={{
      background: "linear-gradient(to right, #f0f8f8, #eef7f7)",
      borderRadius: "10px",
      padding: "0.5px",
      boxShadow: "none",
      // width: "180px", // Adjust as needed
      minWidth: "152px", // Ensures consistent width
    }}
  >
    <CardContent>
      {/* Title */}
      <Typography variant="h6" sx={{ mb:1, fontWeight: "bold", fontSize: "13px", textAlign: "center" }}>
        {data.title}
      </Typography>

      {/* Dynamic Data Display */}
      {Object.keys(keyMapping).map((label, index) => (
        <Box display="flex" justifyContent="space-between" key={index} sx={{ marginBottom: "5px" }}>
          <Typography sx={{ fontSize: "11px", color: "#333" }}>
            {label}
          </Typography>
          <Typography sx={{ fontSize: "11px", color: "#666", fontWeight: "bold" }}>
            {data[keyMapping[label]] || "N/A"}
          </Typography>
        </Box>
      ))}

      {/* Investment Button */}
      <Button
        fullWidth
        variant="contained"
        sx={{
          marginTop: "10px",
          backgroundColor: data.buttonColor || "#3babd9",
          color: data.textColor || "#fff",
          borderRadius: "25px",
          fontWeight: "bold",
          fontSize: "10.5px",
          "&:hover": {
            backgroundColor: data.buttonColor ? data.buttonColor : "#3498db",
          },
        }}
        onClick={() => onInvest(data)}
        disabled={data.disabled}
      >
        {data.buttonText}
      </Button>
    </CardContent>
  </Card>
);

export default DailyEarning;
