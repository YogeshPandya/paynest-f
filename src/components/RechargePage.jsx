import React, { useState } from "react";
import { Box, Typography, Button, Paper, Grid, TextField, List, ListItem, ListItemText, Divider } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import InfoIcon from "@mui/icons-material/InfoOutlined";

const RechargePage = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedChannel, setSelectedChannel] = useState(null);

  const amountOptions = [100, 500, 3000, 10000, 50000, 100000];
  const paymentChannels = [
    { id: "channel1", name: "Payment Channel 1", minAmount: 100, maxAmount: 100000 },
    { id: "channel2", name: "Payment Channel 2", minAmount: 100, maxAmount: 100000 },
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(selectedAmount === amount ? null : amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setCustomAmount(value > 0 ? value : "");
    setSelectedAmount(value > 0 ? value : null);
  };

  const handleChannelSelect = (channelId) => {
    setSelectedChannel(selectedChannel === channelId ? null : channelId);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#156fb2", // ✅ Updated primary color
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "90%",
          maxWidth: 450,
          borderRadius: 4,
          overflow: "hidden",
          backgroundColor: "#f0f7f6",
          padding: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            padding: 2,
            color: "#ffffff",
            backgroundColor: "#156fb2", // ✅ Updated header background color
            borderRadius: "8px 8px 0 0",
          }}
        >
          Recharge
        </Typography>

        <Box sx={{ padding: 2 }}>
          <Typography fontWeight={600}>Recharge amount</Typography>
          <TextField
            fullWidth
            placeholder="Recharge amount"
            variant="outlined"
            type="number"
            value={customAmount}
            onChange={handleCustomAmountChange}
            sx={{
              mt: 1,
              mb: 2,
              backgroundColor: "#ffffff",
              borderRadius: 2,
            }}
          />
          <Grid container spacing={1}>
            {amountOptions.map((amount) => (
              <Grid item xs={4} key={amount}>
                <Button
                  fullWidth
                  variant={selectedAmount === amount ? "contained" : "outlined"}
                  onClick={() => handleAmountSelect(amount)}
                  sx={{
                    borderRadius: "50px",
                    fontWeight: 600,
                    backgroundColor: selectedAmount === amount ? "#3babd9" : "#f0f7f6",
                    color: selectedAmount === amount ? "#fff" : "#000",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#3babd9",
                      color: "#fff",
                    },
                  }}
                >
                  {amount}
                </Button>
              </Grid>
            ))}
          </Grid>

          <Typography fontWeight={600} sx={{ mt: 3 }}>
            Recharge Channel
          </Typography>
          <List sx={{ backgroundColor: "#ffffff", borderRadius: 3, p: 1 }}>
            {paymentChannels.map((channel) => (
              <ListItem
                button
                key={channel.id}
                onClick={() => handleChannelSelect(channel.id)}
                sx={{
                  my: 1,
                  borderRadius: 3,
                  backgroundColor: selectedChannel === channel.id ? "#a5f2e7" : "#ffffff",
                  border: `2px solid ${selectedChannel === channel.id ? "#156fb2" : "#bbbbbb"}`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#a5f2e7",
                  },
                }}
              >
                <ListItemText
                  primary={<Typography fontWeight={700}>{channel.name}</Typography>}
                  secondary={
                    <Typography variant="body2" sx={{ color: "#666" }}>
                      Amount Range: ₹{channel.minAmount} - ₹{channel.maxAmount}
                    </Typography>
                  }
                />
                <PaymentIcon sx={{ color: "#156fb2" }} />
              </ListItem>
            ))}
          </List>

          <Button
            fullWidth
            variant="contained"
            disabled={!selectedAmount || !selectedChannel}
            sx={{
              mt: 3,
              py: 1.5,
              fontWeight: 700,
              fontSize: "16px",
              background: "#156fb2",
              color: "white",
              borderRadius: 50,
              transition: "all 0.3s ease",
              "&:hover": {
                background: "#125a8c",
              },
            }}
          >
            Confirm
          </Button>
        </Box>

        <Divider />
        <Box sx={{ padding: 3, backgroundColor: "white", borderRadius: "0 0 12px 12px" }}>
          <Typography fontWeight={600} display="flex" alignItems="center">
            <InfoIcon color="primary" sx={{ mr: 1 }} /> Rule description
          </Typography>
          <Box sx={{ mt: 1, color: "#666", fontSize: "14px" }}>
            <Typography variant="body2">
              <b>1.</b> Please do not change the recharge amount. Transfer the exact amount that you selected.
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              <b>2.</b> Always initiate each recharge through this page. Do not save account transfers.
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              <b>3.</b> Single recharge amount should be between ₹100 - ₹100,000.
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              <b>4.</b> If the recharge is delayed, report the issue in the Help Center.
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              <b>5.</b> Due to high traffic, recharge may fail. Please try again.
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              <b>6.</b> After a successful transfer, enter the correct UTR (12 digits).
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default RechargePage;
