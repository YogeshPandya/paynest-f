import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { PhoneIphone, VpnKey, Visibility, VisibilityOff, ArrowBack } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const ForgetPassword = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const validateForm = () => {
    const newErrors = {};
    if (!phone) newErrors.phone = "Phone number is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Resetting password for:", phone);
      // API Call for password reset logic
    }
  };

  const handleBack = () => {
    if (location.state?.from === "account") {
      navigate("/account");
    } else {
      navigate("/"); // default to login
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      width="100vw"
      sx={{ background: "linear-gradient(to bottom, #E3F2FD, #ffffff)" }}
    >
      <Card sx={{ width: "450px", borderRadius: "10px", overflow: "hidden" }}>
        {/* Header Bar */}
        <Box sx={{ backgroundColor: "#3babd9", padding: "12px", display: "flex", alignItems: "center" }}>
          <IconButton onClick={handleBack} sx={{ color: "white" }}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" color="white" sx={{ flexGrow: 1, textAlign: "center" }}>
            Reset Login Password
          </Typography>
        </Box>

        {/* Content */}
        <CardContent>
          {/* Phone Number Field */}
          <FormControl fullWidth variant="outlined" sx={{ mb: 2, mt:1 }}>
            <InputLabel error={!!errors.phone}>Mobile Number</InputLabel>
            <OutlinedInput
              type="tel"
              value={phone}
              placeholder="Enter Your Mobile Number"
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
              error={!!errors.phone}
              startAdornment={
                <InputAdornment position="start">
                  <PhoneIphone color="primary" />
                  <Typography sx={{ fontWeight: "bold", ml: 1 }}>+91</Typography>
                </InputAdornment>
              }
              label="Mobile Number"
              sx={{
                "& fieldset": { borderColor: errors.phone ? "red !important" : "rgba(0, 0, 0, 0.23)" },
              }}
            />
            {errors.phone && (
              <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1 }}>
                {errors.phone}
              </Typography>
            )}
          </FormControl>

          {/* Password Field */}
          <FormControl fullWidth variant="outlined" sx={{ mb: 2, mt:1 }} error={!!errors.password}>
            <InputLabel>Set Password</InputLabel>
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Login Password"
              onChange={(e) => setPassword(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <VpnKey color="primary" />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Set Password"
            />
            {errors.password && (
              <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1 }}>
                {errors.password}
              </Typography>
            )}
          </FormControl>

          {/* Confirm Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#3babd9",
              color: "white",
              borderRadius: "25px",
              padding: "12px 0",
              textTransform: "none",
              "&:hover": { backgroundColor: "#156fb2" },
            }}
            onClick={handleSubmit}
          >
            Confirm
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ForgetPassword;
