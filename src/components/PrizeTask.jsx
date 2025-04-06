import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import giveawayImage from "../assets/victory.png";
import ConfettiEffect from "./ConfettiEffect";

const PrizeTask = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Automatically stop confetti after 5 seconds
    const timer = setTimeout(() => setShowConfetti(false), 9000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Confetti Effect */}
      <ConfettiEffect trigger={showConfetti} />

      <Box
        sx={{
          backgroundColor: "#B3E5FC",
          minHeight: "100vh",
          maxWidth: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          justifyContent: "flex-start",
          overflowX: "hidden",
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="center" mb={1}>
          <img src={giveawayImage} alt="Prize Logo" style={{ width: 150, height: 150 }} />
        </Box>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Millionaires Club
        </Typography>
        <Typography variant="body2">
          <b>1.</b> Inviting friends to join us and successfully investing will give you a chance to win a lucky draw.
        </Typography>
        <Typography variant="body2" mt={1}>
          <b>2.</b> You will receive rewards for subordinate investment amounts:
        </Typography>
        <Typography variant="body2">Commission rate (Level 1): 20%</Typography>
        <Typography variant="body2">Commission rate (Level 2): 2%</Typography>
        <Typography variant="body2">Commission rate (Level 3): 1%</Typography>
        <Typography variant="body2" mt={1}>
          Assuming you invite 100 users to join and invest 10,000 rupees on the platform, your income would be: 1,000,000 * 20% = 200,000 rupees.
        </Typography>
        <Typography variant="body2" mt={1}>
          Each excellent promoter can earn at least 1,000,000 rupees per month.
        </Typography>
        <Typography variant="body2" mt={1}>
          Contact customer service to join the promoter alliance and get the latest ways to make money.
        </Typography>
      </Box>
    </>
  );
};

export default PrizeTask;
