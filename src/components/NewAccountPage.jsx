import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { keyframes } from "@emotion/react";

// Keyframes to animate stroke color
const rotateColors = keyframes`
  0%   { stroke: #f44336; }   /* red */
  25%  { stroke: #fefeff; }   /* blue */
  50%  { stroke: #4caf50; }   /* green */
  75%  { stroke: #ff9800; }   /* orange */
  100% { stroke: #f44336; }   /* red again */
`;

const ColorChangingLoader = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // backgroundColor: "#e3f2fd",
      }}
    >
      <CircularProgress
        size={80}
        thickness={4.5}
        sx={{
          color: "transparent", // hide default color
          "& .MuiCircularProgress-circle": {
            animation: `${rotateColors} 2s linear infinite`, // color animation
          },
        }}
      />
      <Typography variant="h6" sx={{ mt: 2, color: "#fefeff" }}>
        Loading...
      </Typography>
    </Box>
  );
};

export default ColorChangingLoader;
