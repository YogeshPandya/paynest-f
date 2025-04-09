import React from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIos from "@mui/icons-material/ArrowBack"; 
import { useNavigate } from "react-router-dom"; 
import notFoundImage from "../assets/PageNotFound.png"; 

const PageNotFound = () => {
  const navigate = useNavigate();

  const goToAccount = () => {
    navigate("/account"); 
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f8f9fa",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Top-Left Button */}
      <IconButton
        onClick={goToAccount}
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          backgroundColor: "white",
          boxShadow: 1,
          zIndex: 10,
        }}
      >
        <ArrowBackIos />
      </IconButton>

      {/* Page Not Found Image */}
      <Box
        component="img"
        src={notFoundImage}
        alt="Page Not Found"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "38% center",
          display: "block",
        }}
      />
    </Box>
  );
};

export default PageNotFound;
