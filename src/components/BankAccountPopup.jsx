import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloseIcon from "@mui/icons-material/Close";

const BankAccountPopup = ({ open, onClose }) => {
  const navigate = useNavigate();

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontWeight="bold">No bank account linked!</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent>
        <Typography gutterBottom>
          Please select the type of bank account you want to link!
        </Typography>

        <Button
  fullWidth
  variant="contained"
  startIcon={<AddCircleOutlineIcon />}
  onClick={() => {
    onClose(); // ✅ Close popup
    navigate("/bank-card"); // ✅ Navigate to BankCardForm
  }}
  sx={{
    mt: 2,
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
  Link Bank Account
</Button>


<Box mt={3}>
  <Typography variant="subtitle1" fontWeight="bold" gutterBottom display="flex" alignItems="center">
    Rule description
  </Typography>
  <Box sx={{ color: "#555", fontSize: "14px" }}>
    {[
      "Your earnings withdrawals will be transferred to the linked bank account. Ensure your details are correct.",
      "To modify your withdrawal bank account, you must provide an SMS verification code.",
      "If you can't receive the SMS verification code, contact our support team.",
    ].map((rule, index) => (
      <Box key={index} sx={{ display: "flex", alignItems: "flex-start", mt: index === 0 ? 0 : 1 }}>
        <Typography variant="body2" sx={{ minWidth: "20px", fontWeight: 600 }}>
          {index + 1}.
        </Typography>
        <Typography variant="body2" sx={{ ml: 1 }}>
          {rule}
        </Typography>
      </Box>
    ))}
  </Box>
</Box>

      </DialogContent>
    </Dialog>
  );
};

export default BankAccountPopup;
