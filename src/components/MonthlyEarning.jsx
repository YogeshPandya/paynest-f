import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InvestmentPopup from "./PopupModel"; // Import your popup component

const MonthlyEarning = ({ title, investAmount, earnings, returnPeriod, periodicReturn, totalEarnings }) => {
  const [open, setOpen] = useState(false);
  const [selectedInvestment, setSelectedInvestment] = useState(null);

  // Handle popup open
  const handleOpen = () => {
    setSelectedInvestment({ title, investAmount, earnings, returnPeriod, periodicReturn, totalEarnings });
    setOpen(true);
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #E3F2FD, #ffffff)",
        borderRadius: "12px",
        padding: "16px",
        marginBottom: "16px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        width: "90%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "15px" }}>{title}</Typography>
      {[["Invest Amount", investAmount], ["Total Earnings", earnings], ["Return Period", returnPeriod], ["Periodic Return", periodicReturn]].map(([label, value], index) => (
        <Box display="flex" justifyContent="space-between" alignItems="center" key={index}>
          <Typography sx={{ fontSize: "11px" }}>{label}</Typography>
          {label === "Return Period" ? <AccessTimeIcon fontSize="small" /> : null}
          <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>{value}</Typography>
        </Box>
      ))}

      {/* Button to open popup */}
      <Button 
        fullWidth 
        variant="outlined" 
        sx={{ backgroundColor: "#3babd9", color: "#fff", borderRadius: "25px", fontWeight: "bold", fontSize: "10px", mt:2 }} 
        onClick={handleOpen}
      >
        Invest Now
      </Button>

      {/* Investment Popup */}
      <InvestmentPopup 
        open={open} 
        onClose={() => setOpen(false)} 
        selectedInvestment={selectedInvestment} 
      />
    </Box>
  );
};

export default MonthlyEarning;
