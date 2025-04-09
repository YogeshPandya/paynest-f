import React from "react";
import {
  Avatar,
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/system";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const Header = ({ balance = 0 }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        maxHeight: "100vh",
        paddingTop: "8px",
        overflowX: "hidden",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #156fb2, #156fb2)",
      }}
    >
      <Card
        elevation={3}
        sx={{
          p: 4,
          backgroundColor: "#156fb2",
          width: "100%",
          maxWidth: "none",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          borderRadius: "0",
          overflowY: "auto",
          maxHeight: "100vh",
        }}
      >
        <CardContent sx={{ padding: "0 !important" }}>
          <Box display="flex" alignItems="center" justifyContent="center" mb={1}>
            <Avatar
              src="/PN_logo.png"
              alt="Company Logo"
              sx={{ width: 70, height: 70 }}
            />
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: isMobile ? "2rem" : "1.8rem",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bold",
                  letterSpacing: 2,
                  color: "#fff",
                  mb: -1,
                }}
              >
                PAYNEST
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  color: "#fff", mr: 1,
                  letterSpacing: 1,
                }}
              >
                PROFIT COMPANY
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: isMobile ? ".6rem" : ".8rem",
                fontFamily: "Poppins, sans-serif",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt:3,
              }}
            >
              Account Balance
            </Typography>
            <Typography
              sx={{
                fontSize: isMobile ? "1rem" : "1.2rem",
                fontFamily: "sans-serif",
                color: "#fff",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CurrencyRupeeIcon sx={{ fontSize: "1rem", marginRight: "3px" }} />
              {balance.toFixed(2)}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Header;
