// components/CustomAlert.jsx
import React from "react";
import { Snackbar, Alert } from "@mui/material";

const CustomAlert = ({ open, onClose, message, severity = "success", duration = 4000 }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      sx={{ width: "100%" }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        sx={{
          width: "100%",
          fontWeight: "bold",
          fontSize: "1rem",
          backgroundColor: severity === "success" ? "#43a047" : undefined,
          color: "white",
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomAlert;
