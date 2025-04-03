import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  InputAdornment,
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonIcon from "@mui/icons-material/Person";
import NumbersIcon from "@mui/icons-material/Numbers";

const BankCardForm = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh", // ✅ Allows scrolling if content overflows
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#156fb2",
        padding: 2, // ✅ Adds spacing for better scrolling
        overflowY: "auto", // ✅ Enables vertical scrolling
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 3,
          width: "90%",
          maxWidth: "600px",
          borderRadius: 3,
          backgroundColor: "white",
        }}
      >
        <Typography
          variant="h6"
          textAlign="center"
          sx={{
            backgroundColor: "#156fb2",
            color: "white",
            padding: 1,
            borderRadius: 2,
          }}
        >
          Add bank card
        </Typography>

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
            sx={{ backgroundColor: "#f8f8f8", borderRadius: 2 }}
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
            sx={{ backgroundColor: "#f8f8f8", borderRadius: 2 }}
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
            sx={{ backgroundColor: "#f8f8f8", borderRadius: 2 }}
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
            sx={{ backgroundColor: "#f8f8f8", borderRadius: 2 }}
          />
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#156fb2",
            color: "white",
            mt: 3,
            py: 1.5,
            fontWeight: 700,
            borderRadius: 50,
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#125a8c",
            },
          }}
        >
          Confirm
        </Button>
      </Paper>
    </Box>
  );
};

export default BankCardForm;
