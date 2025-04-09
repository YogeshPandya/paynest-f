import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  InputAdornment,
  Card,
  CardContent,
  Avatar,
  Grid,
  FormControl,
  OutlinedInput,
  InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AlertNotify from "./AlertNotify";

const LoginForm = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const validateForm = useCallback(() => {
    let newErrors = {};
    if (!phone) newErrors.phone = "Phone number is mandatory";
    if (!password) newErrors.password = "Password is mandatory";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [phone, password]);

  const handleLogin = useCallback(() => {
    if (validateForm()) {
      console.log("Logging in with:", { phone, password });
      setShowAlert(true);
      navigate("/invest");
    }
  }, [validateForm, phone, password, navigate]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      width="100vw"
      sx={{ background: "linear-gradient(to bottom, #E3F2FD, #ffffff)" }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={8} md={5} lg={4}>
          <Card
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 4,
              textAlign: "center",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
            }}
          >
            <CardContent>
              <Box display="flex" justifyContent="center" mb={1}>
                <Avatar
                  src="/PN_logo.png"
                  alt="Company Logo"
                  sx={{ width: 80, height: 80, mt: -2 }}
                />
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "#3babd9",
                  letterSpacing: 1.5,
                  mt: -3,
                }}
              >
                PAYNEST
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "textSecondary", letterSpacing: 1, mt: -1, mb: 3 }}
              >
                PROFIT COMPANY
              </Typography>

              {/* Phone Number Field */}
              <FormControl sx={{ width: "100%", mb: 1 }} variant="outlined">
                <InputLabel htmlFor="phone-input">Phone Number</InputLabel>
                <OutlinedInput
                  id="phone-input"
                  type="tel"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                  error={!!errors.phone}
                  startAdornment={
                    <InputAdornment position="start">
                      <PhoneIphoneIcon color="primary" sx={{ mr: 1 }} />
                      <Typography sx={{ fontWeight: "bold" }}>+91</Typography>
                    </InputAdornment>
                  }
                  label="Phone Number"
                  placeholder="Enter Your Mobile Number"
                />
              </FormControl>
              {errors.phone && (
                <Typography
                  variant="caption"
                  color="error"
                  sx={{ ml: 1, mt: -1, textAlign: "left", display: "block" }}
                >
                  {errors.phone}
                </Typography>
              )}

              {/* Password Field */}
              <TextField
                label="Password"
                variant="outlined"
                sx={{ width: "100%", mt: 2 }}
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {/* Forget Password Link */}
              <Typography
                variant="body2"
                color="primary"
                sx={{
                  textAlign: "left",
                  mt: 1,
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
                onClick={() =>
                  navigate("/forget-password", { state: { from: "login" } })
                }
              >
                Forgot Password?
              </Typography>

              {/* Login and Signup Buttons */}
              <Box display="flex" justifyContent="space-between" mt={3} gap={2}>
                <Button
                  variant="contained"
                  onClick={() => navigate("/signup")}
                  sx={{
                    flex: 1,
                    borderRadius: "25px",
                    padding: "12px 0",
                    textTransform: "none",
                    backgroundColor: "#3babd9",
                    color: "white",
                    "&:hover": { backgroundColor: "#156fb2" },
                  }}
                >
                  Sign Up
                </Button>

                <Button
                  variant="outlined"
                  onClick={handleLogin}
                  sx={{
                    flex: 1,
                    borderRadius: "25px",
                    padding: "12px 0",
                    textTransform: "none",
                    borderColor: "#B0BEC5",
                    color: "black",
                    backgroundColor: "white",
                    "&:hover": { backgroundColor: "#f0f0f0" },
                  }}
                >
                  Log in
                </Button>

                {/* Custom Alert */}
                <AlertNotify
                  open={showAlert}
                  onClose={() => setShowAlert(false)}
                  message="Login successful!"
                  severity="success"
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
