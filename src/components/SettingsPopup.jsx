import React from "react";
import {
  Dialog,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate

const SettingsPopup = ({ open, onClose }) => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  const settingsOptions = [
    "User Information",
    "Login Password",
    "Transaction Password",
  ];

  const handleOptionClick = (option) => {
    onClose();

    if (option === "User Information") {
      navigate("/user-settings"); // ✅ Navigate only for this option
    }

    if (option === "Transaction Password") {
        navigate("/reset-payment-password"); // 👈 navigate to the new page
      }

      if (option === "Login Password") {
        navigate("/forget-password", { state: { from: "account" } });
      }
      

    // Add more routes here if needed in the future
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      sx={{ zIndex: 9999 }}
      PaperProps={{
        sx: {
          borderRadius: "12px",
        },
      }}
    >
      <DialogContent sx={{ p: 0, bgcolor: "#fff" }}>
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8, color: "gray" }}
        >
          <CloseIcon />
        </IconButton>

        <List sx={{ mt: 4 }}>
          {settingsOptions.map((option, index) => (
            <React.Fragment key={option}>
              <ListItem button onClick={() => handleOptionClick(option)}>
                <ListItemText
                  primary={<Typography>{option}</Typography>}
                />
              </ListItem>
              {index !== settingsOptions.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>

      
      </DialogContent>
    </Dialog>
  );
};

export default SettingsPopup;
