import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField, Button, Box, Typography, IconButton, InputAdornment, Card,
  CardContent, Avatar, Grid, FormControl, OutlinedInput, InputLabel
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  PhoneIphone as PhoneIphoneIcon,
  Key as KeyIcon,
  Person as PersonIcon,
  People as PeopleIcon
} from "@mui/icons-material";
import OtpPopup from "./OtpPopup";

const SignupForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [errors, setErrors] = useState({});

  // OTP dialog states
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaUrl, setCaptchaUrl] = useState(""); // Placeholder
  const [captchaText, setCaptchaText] = useState("");
  const [smsCode, setSmsCode] = useState("");
  const [timer, setTimer] = useState(0);

  // Simulate captcha generation
    useEffect(() => {
      const randomText = Math.floor(1000 + Math.random() * 9000).toString(); // e.g., 1234
      const imageUrl = `https://dummyimage.com/80x30/000/fff.png&text=${randomText}`;
      setCaptchaText(randomText);
      setCaptchaUrl(imageUrl);
    }, []);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleCaptchaChange = (e) => {
    const value = e.target.value;
    setCaptchaValue(value);
  };
  const isCaptchaCorrect = captchaValue === captchaText;

  const handleGetSmsCode = () => {
    if (timer === 0) {
      const generatedCode = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit code
      setTimer(180); // Start timer
  
      // Simulate delay for receiving SMS (2 seconds)
      setTimeout(() => {
        setSmsCode(generatedCode); // Set OTP after delay
        console.log("SMS sent:", generatedCode); // Log for debugging
      }, 2000);
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!phone) {
      newErrors.phone = "Phone number is mandatory";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!password) {
      newErrors.password = "Set your login password";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!name) {
      newErrors.name = "Name is mandatory";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name = "Name should contain only letters ex.(A-Z, a-z)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setShowOtpPopup(true); // Show OTP dialog
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" width="100vw" sx={{ background: "linear-gradient(to bottom, #E3F2FD, #ffffff)" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={8} md={5} lg={4}>
          <Card elevation={3} sx={{ p: 4, borderRadius: 4, textAlign: "center", backgroundColor: "rgba(255, 255, 255, 0.95)" }}>
            <CardContent>
              <Box display="flex" justifyContent="center" mb={1}>
                <Avatar src="/PN_logo.png" alt="Company Logo" sx={{ width: 80, height: 80, mt: -2 }} />
              </Box>
              <Typography variant="h4" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', color: '#3babd9', letterSpacing: 1.5, mt: -3 }}>PAYNEST</Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Poppins, sans-serif', color: 'textSecondary', letterSpacing: 1, mt: -1, mb: 3 }}>PROFIT COMPANY</Typography>

              <FormControl sx={{ width: '100%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-phone">Phone Number</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  error={!!errors.phone}
                  startAdornment={
                    <InputAdornment position="start">
                      <PhoneIphoneIcon color="primary" sx={{ mr: 1 }} />
                      <Typography sx={{ fontWeight: 'bold' }}>+91</Typography>
                    </InputAdornment>
                  }
                  label="Phone Number"
                  placeholder="Enter Your Mobile Number"
                />
              </FormControl>
              {errors.phone && <Typography variant="caption" color="error" sx={{ ml: 2, textAlign: "left", display: "block" }}>{errors.phone}</Typography>}

              <TextField
                label="Your Name"
                placeholder="Enter Your Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!errors.name}
                helperText={errors.name}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="Login Password"
                placeholder="Set Login Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon color="primary" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="Invitation Code"
                placeholder="Enter Invitation Code"
                variant="outlined"
                fullWidth
                margin="normal"
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PeopleIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />

              <Box display="flex" justifyContent="space-between" mt={3} gap={2}>
                <Button
                  variant="outlined"
                  onClick={() => navigate("/")}
                  sx={{
                    flex: 1,
                    borderRadius: "25px",
                    padding: "12px 0",
                    borderColor: "#B0BEC5",
                    color: "black",
                    backgroundColor: "white",
                    "&:hover": { backgroundColor: "#f0f0f0" }
                  }}
                >
                  Log in
                </Button>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{
                    flex: 1,
                    borderRadius: "25px",
                    padding: "12px 0",
                    backgroundColor: "#3babd9",
                    color: "white",
                    "&:hover": { backgroundColor: "#156fb2" }
                  }}
                >
                  Sign Up
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* OTP and CAPTCHA Dialog */}
      <OtpPopup
        open={showOtpPopup}
        onClose={() => setShowOtpPopup(false)}
        captchaValue={captchaValue}
        onCaptchaChange={handleCaptchaChange}
        isCaptchaCorrect={isCaptchaCorrect}
        captchaUrl={captchaUrl}
        smsCode={smsCode}
        setSmsCode={setSmsCode}
        timer={timer}
        handleGetSmsCode={handleGetSmsCode}
      />
    </Box>
  );
};

export default SignupForm;
