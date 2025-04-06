import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonIcon from "@mui/icons-material/Person";
import NumbersIcon from "@mui/icons-material/Numbers";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BankCardForm = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#156fb2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "600px",
          height: "100vh",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          overflowX: "hidden",
          boxSizing: "border-box",
          scrollbarWidth: "none", // Firefox
          "&::-webkit-scrollbar": { display: "none" }, // Chrome
        }}
      >
        {/* Header - full white card width */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#156fb2",
            px: 2,
            py: 0.5,
          }}
        >
          <IconButton onClick={() => navigate("/account")} sx={{ color: "#fff" }}>
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
                Add bank card
          </Typography>
        </Box>

        {/* Form Fields */}
        <Box sx={{ padding: 2 }}>
          <Box mt={2}>
            <Typography fontWeight="bold">Bank</Typography>
            <TextField
              fullWidth
              variant="outlined"
              disabled
              value="Bank"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountBalanceIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ backgroundColor: "#f8f8f8", borderRadius: 2, mt: 0.5 }}
            />
          </Box>

          <Box mt={2}>
            <Typography fontWeight="bold">Bank IFSC</Typography>
            <TextField
              fullWidth
              placeholder="Bank IFSC"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <NumbersIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ backgroundColor: "#f8f8f8", borderRadius: 2, mt: 0.5 }}
            />
          </Box>

          <Box mt={2}>
            <Typography fontWeight="bold">Cardholder Name</Typography>
            <TextField
              fullWidth
              placeholder="Cardholder Name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ backgroundColor: "#f8f8f8", borderRadius: 2, mt: 0.5 }}
            />
          </Box>

          <Box mt={2}>
            <Typography fontWeight="bold">Bank Account Number</Typography>
            <TextField
              fullWidth
              placeholder="Bank Account Number"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CreditCardIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ backgroundColor: "#f8f8f8", borderRadius: 2, mt: 0.5 }}
            />
          </Box>

          {/* Confirm Button */}
          <Box mt={3} mb={1}>
          <Button
            fullWidth
            variant="contained" 
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
        </Box>
      </Box>
    </Box>
  );
};

export default BankCardForm;
