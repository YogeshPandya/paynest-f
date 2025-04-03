import React, {useState} from "react";
import { Modal, Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Import Close Icon

const InvestmentPopup = ({ open, onClose, selectedInvestment }) => {

    const [confirmOpen, setConfirmOpen] = useState(false);
    // Show confirmation popup
  const handleCloseClick = () => {
    setConfirmOpen(true);
  };

  // Close everything
  const handleConfirmClose = () => {
    setConfirmOpen(false);
    onClose(); // Close main modal after confirmation
  };


  return (
    <>
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
        //   position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          maxWidth: "800px",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "25px",
          textAlign: "center",
          position: "relative", // Needed for absolute positioning of close button
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "#333",
          }}
        >
          <CloseIcon />
        </IconButton>

        {selectedInvestment && (
          <>
            <Typography sx={{
                    color: "black",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    mb:"3%"
                  }}>
              {selectedInvestment.title}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
              <Typography sx={{ fontSize: "15px" }}>Invest Amount:</Typography>
              <Typography sx={{ fontSize: "15px", fontWeight:"bold" }}>{selectedInvestment.investAmount}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
              <Typography sx={{ fontSize: "15px" }}>Return Period:</Typography>
              <Typography sx={{ fontSize: "15px", fontWeight:"bold" }}>{selectedInvestment.returnPeriod}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
              <Typography sx={{ fontSize: "15px" }}>Periodic Return:</Typography>
              <Typography sx={{ fontSize: "15px", fontWeight:"bold" }}fontWeight="bold">{selectedInvestment.periodicReturn}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography sx={{ fontSize: "15px" }}>Total Earnings:</Typography>
              <Typography sx={{ fontSize: "15px", fontWeight:"bold" }}>{selectedInvestment.totalEarnings}</Typography>
            </Box>

            <Button
                fullWidth
                variant="outlined"
                sx={{backgroundColor: "#3babd9", color: "#fefeff", borderRadius: "20px", fontWeight: "bold", fontSize: "12Px",}}
                onClick={handleCloseClick}>
                {selectedInvestment.investAmount}.00 - Invest Now
                </Button>
          </>
        )}
      </Box>
    </Modal>

    {/* Confirmation Modal */}
    <Modal open={confirmOpen} onClose={() => {}}>
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 275,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 3,
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <Typography mb={2}>Are you sure to invest this product?</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={() => setConfirmOpen(false)} sx={{ color: "black" }}>
          Cancel
        </Button>
        <Button onClick={handleConfirmClose} sx={{ color: "blue" }}>
          Confirm
        </Button>
      </Box>
    </Box>
  </Modal>
  </>
  );
};

export default InvestmentPopup;
