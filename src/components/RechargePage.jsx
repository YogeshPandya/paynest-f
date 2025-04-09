import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const RechargePage = () => {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedChannel, setSelectedChannel] = useState(null);
  const inputRef = useRef(null);

  const amountOptions = [100, 500, 1000, 3000, 10000, 50000];
  const paymentChannels = [
    {
      id: "channel1",
      name: "Payment Channel 1",
      minAmount: 100,
      maxAmount: 50000,
    },
    {
      id: "channel2",
      name: "Payment Channel 2",
      minAmount: 100,
      maxAmount: 100000,
    },
  ];

  const handleAmountSelect = (amount) => {
    if (selectedAmount === amount) {
      setSelectedAmount(null);
      setCustomAmount("");
    } else {
      setSelectedAmount(amount);
      setCustomAmount(amount);
    }
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    const parsedValue = parseInt(value, 10);
    setCustomAmount(value);

    if (!isNaN(parsedValue) && parsedValue > 0) {
      setSelectedAmount(null);
    } else {
      setSelectedAmount(null);
    }
  };

  const handleChannelSelect = (channelId) => {
    setSelectedChannel(selectedChannel === channelId ? null : channelId);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#156fb2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 450,
          height: "95%",
          display: "flex",
          flexDirection: "column",
          borderRadius: 4,
          backgroundColor: "#f0f7f6",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#156fb2",
            px: 2,
            py: 0.5,
          }}
        >
          <IconButton
            onClick={() => navigate("/account")}
            sx={{ color: "#fff" }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              color: "#ffffff",
              flexGrow: 1,
              textAlign: "center",
              fontSize: "15px",
            }}
          >
            Recharge
          </Typography>
        </Box>

        {/* Scrollable Content */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            paddingBottom: 2,
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {/* Main Body */}
          <Box sx={{ padding: 2 }}>
            <Typography fontWeight={600} fontSize="15px">
              Recharge amount
            </Typography>
            <TextField
              inputRef={inputRef}
              fullWidth
              placeholder="Recharge amount"
              variant="outlined"
              value={customAmount}
              onChange={handleCustomAmountChange}
              sx={{ mt: 1, mb: 2, backgroundColor: "#ffffff", borderRadius: 2 }}
              inputProps={{
                inputMode: "decimal", // Show number pad with '.' if needed
                pattern: "[0-9]*", // Accept only numbers
              }}
            />

            <Grid container spacing={1}>
              {amountOptions.map((amount) => (
                <Grid item xs={4} key={amount}>
                  <Button
                    fullWidth
                    variant={
                      selectedAmount === amount ? "contained" : "outlined"
                    }
                    onClick={() => handleAmountSelect(amount)}
                    sx={{
                      borderRadius: "50px",
                      fontWeight: 600,
                      fontSize: "13px",
                      backgroundColor:
                        selectedAmount === amount ? "#3babd9" : "#f0f7f6",
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

            {/* Recharge Channel Section */}
            <Box
              sx={{ backgroundColor: "#ffffff", borderRadius: 3, p: 2, mt: 3 }}
            >
              <Typography fontWeight={600} fontSize="15px" sx={{ mb: 1 }}>
                Recharge Channel
              </Typography>

              <List disablePadding>
                {paymentChannels.map((channel) => (
                  <ListItem
                    button
                    key={channel.id}
                    onClick={() => handleChannelSelect(channel.id)}
                    sx={{
                      mb: 2,
                      borderRadius: 3,
                      backgroundColor:
                        selectedChannel === channel.id ? "#a5f2e7" : "#ffffff",
                      border: `2px solid ${
                        selectedChannel === channel.id ? "#156fb2" : "#bbbbbb"
                      }`,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#a5f2e7",
                      },
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography fontWeight={700} fontSize="15px">
                          {channel.name}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body2" sx={{ color: "#666" }}>
                          Amount Range: ₹{channel.minAmount} - ₹
                          {channel.maxAmount}
                        </Typography>
                      }
                    />
                    <PaymentIcon sx={{ color: "#156fb2" }} />
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Confirm Button */}
            <Button
              fullWidth
              variant="contained"
              disabled={!customAmount || !selectedChannel}
              sx={{
                mt: 1,
                py: 1,
                fontWeight: 600,
                fontSize: "14px",
                background: "#156fb2",
                color: "white",
                borderRadius: "30px",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "#125a8c",
                },
              }}
            >
              Confirm
            </Button>
          </Box>

          {/* Rule Description */}
          <Divider />
          <Box
            sx={{
              padding: 3,
              backgroundColor: "white",
              borderRadius: "0 0 12px 12px",
            }}
          >
            <Typography
              fontWeight={600}
              display="flex"
              alignItems="center"
              mb={1}
            >
              <InfoIcon color="primary" sx={{ mr: 1 }} /> Rule description
            </Typography>
            <Box sx={{ color: "#666", fontSize: "14px" }}>
              {[
                "Please do not change the recharge amount. Transfer the exact amount that you selected.",
                "Always initiate each recharge through this page. Do not save account transfers.",
                "Single recharge amount should be between ₹100 - ₹10,000.",
                "If the recharge is delayed, report the issue in the Help Center.",
                "Due to high traffic, recharge may fail. Please try again.",
                "After a successful transfer, enter the correct UTR (12 digits).",
              ].map((rule, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    mt: index === 0 ? 0 : 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ minWidth: "20px", fontWeight: 600 }}
                  >
                    {index + 1}.
                  </Typography>
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    {rule}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default RechargePage;
