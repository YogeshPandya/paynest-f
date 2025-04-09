import React, { useRef } from "react";
import {
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const ResetPaymentPasswordPage = () => {
  const navigate = useNavigate();

  // Create refs for the 6 inputs
  const inputRefs = useRef([...Array(6)].map(() => React.createRef()));

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (value.length === 1 && index < 5) {
      inputRefs.current[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].current.focus();
    }
  };

  return (
    <Box sx={{ width: "100vw", minHeight: "100vh", bgcolor: "#f1f5f9" }}>
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
          Reset Payment Password
        </Typography>
      </Box>

      {/* Card with inputs */}
      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: "20px",
          p: 3,
          mt: 2,
          mx: 2,
        }}
      >
        <Typography sx={{ mb: 2, fontWeight: 500 }}>
          Reset Payment Password
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 1.5,
            mb: 2,
            flexWrap: "nowrap",
          }}
        >
          {[...Array(6)].map((_, index) => (
            <TextField
              key={index}
              inputRef={inputRefs.current[index]}
              variant="outlined"
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              sx={{
                width: "100%",
                maxWidth: "200px",
                backgroundColor: "#f4f7fb",
                borderRadius: "10px",
              }}
              inputProps={{
                style: {
                  textAlign: "center",
                  fontSize: "20px",
                  padding: "10px 0",
                },
                maxLength: 1,
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Confirm Button */}
      <Box sx={{ px: 2, mt: 3 }}>
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
  );
};

export default ResetPaymentPasswordPage;
