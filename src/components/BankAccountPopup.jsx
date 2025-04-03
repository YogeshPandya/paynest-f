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
          variant="contained"
          color="primary"
          startIcon={<AddCircleOutlineIcon />}
          fullWidth
          sx={{ mt: 2, py: 1.5 }}
          onClick={() => {
            onClose(); // ✅ Close popup
            navigate("/bank-card"); // ✅ Navigate to BankCardForm
          }}
        >
          Link Bank Account
        </Button>

        <Box mt={3}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Rule description
          </Typography>
          <Typography variant="body2" gutterBottom>
            1. Your earnings withdrawals will be transferred to the linked bank account. Ensure your details are correct.
          </Typography>
          <Typography variant="body2" gutterBottom>
            2. To modify your withdrawal bank account, you must provide an SMS verification code.
          </Typography>
          <Typography variant="body2">
            3. If you can't receive the SMS verification code, contact our support team.
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default BankAccountPopup;
