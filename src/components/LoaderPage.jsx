import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Typography, CircularProgress } from "@mui/material";
import { keyframes } from "@emotion/react";

// Color animation keyframes
const rotateColors = keyframes`
  0%   { stroke: #f44336; }
  25%  { stroke: #fefeff; }
  50%  { stroke: #4caf50; }
  75%  { stroke: #ff9800; }
  100% { stroke: #f44336; }
`;

const LoaderPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Parse ?redirect=/targetPath
  const searchParams = new URLSearchParams(location.search);
  const redirectPath = searchParams.get("redirect") || "/";

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(redirectPath);
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate, redirectPath]);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <CircularProgress
        size={50}
        thickness={4.5}
        sx={{
          color: "transparent",
          "& .MuiCircularProgress-circle": {
            animation: `${rotateColors} 2s linear infinite`,
          },
        }}
      />
      <Typography variant="h6" sx={{ mt: 2, color: "#fefeff" }}>
        Loading...
      </Typography>
    </Box>
  );
};

export default LoaderPage;
