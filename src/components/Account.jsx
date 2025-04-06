import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  Avatar,
  Grid,
  Button,
  IconButton,
  Container,
  List,
  ListItem,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import RedeemIcon from "@mui/icons-material/Redeem";
import FeedbackIcon from "@mui/icons-material/Feedback";
import BuildIcon from "@mui/icons-material/Build";
import InfoIcon from "@mui/icons-material/Info";
import PaymentIcon from "@mui/icons-material/Payment";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useNavigate } from "react-router-dom";
import BankAccountPopup from "./BankAccountPopup";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Loader from "../components/LoaderPage"; 
import avatarImage from "../assets/av1.png"; 


const Account = () => {
  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fundEntryItems = [
    { name: "Billing List", icon: <ReceiptIcon color="primary" />, path: "billing" },
    { name: "Withdrawal Records", icon: <AccountBalanceWalletIcon color="primary" />, path: "withdrawal" },
    { name: "Recharge Records", icon: <PaymentIcon color="primary" />, path: "recharge" },
    { name: "Commission Records", icon: <MonetizationOnIcon color="primary" />, path: "commission" },
    { name: "Reward Records", icon: <RedeemIcon color="primary" /> },
    { name: "My Feedback", icon: <FeedbackIcon color="primary" /> },
    { name: "Self-Service", icon: <BuildIcon color="primary" /> },
    { name: "About Us", icon: <InfoIcon color="primary" /> },
  ];

  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: "Sanjay",
        phone: "9977692577",
        userId: "40109939",
        balance: 1500.75,
        points: 120,
        avatar: avatarImage
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100%", // Full viewport height
        backgroundColor: "#156fb2",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3, // Reduced padding
        overflow: "hidden",
        boxSizing: "border-box",
        position: "relative", // Ensures absolute positioning works correctly
        paddingBottom: "60px",
      }}
    >
      {/* Top Right Icons */}
      <Box
        sx={{
          position: "absolute",
          top: 10, // Reduced space from top
          right: 10, // Reduced right margin
          display: "flex",
          gap: 1,
        }}
      >
        <IconButton sx={{ backgroundColor: "#3babd9" }}>
          <NotificationsIcon />
        </IconButton>
        <IconButton sx={{ backgroundColor: "#3babd9" }}>
          <SettingsIcon />
        </IconButton>
      </Box>

      {/* User Info Card */}
      <Box
        sx={{
          background: "#3babd9",
          p: 2,
          borderRadius: "10px",
          mt: 6, 
          width: "100%", 
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Typography variant="h6" color="white" fontWeight="bold">
              {user.name}
            </Typography>
            <Typography color="white">{user.phone}</Typography>
            <Typography color="white" fontWeight="bold">
              User ID: {user.userId}
            </Typography>
          </Box>
          <Avatar
            src={user.avatar}
            alt="Profile"
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.5)",
              border: "2px solid white",
            }}
          />
        </Box>
      </Box>

      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "linear-gradient(to right, #FFD700, #FFF5C3)",
          p: 2,
          borderRadius: "10px",
          mt: 1,
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ bgcolor: "#FFC107", mr: 1 }}>
            <RedeemIcon sx={{ color: "white" }} />
          </Avatar>
          <Typography fontWeight="bold">
            Account Balance: ₹{user.balance.toFixed(2)}
          </Typography>
        </Box>
        <Button
          variant="outlined"
          sx={{
            color: "#555",
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: "25px",
            padding: "18px",
          }}
          onClick={() => navigate("/recharge")}
        >
          Recharge
        </Button>
      </Card>

      <Grid container spacing={0.5} sx={{ mt: 0.5 }}>
        {[
          {
            icon: <AccountBalanceWalletIcon />,
            label: "Withdraw",
            amount: "₹0.00",
          },
          { icon: <ReceiptIcon />, label: "Orders", amount: "₹0.00" },
          {
            icon: <AccountBalanceIcon />,
            label: "Bank Account",
            amount: "No Bank Linked",
            onClick: () => setOpenPopup(true),
          },
        ].map((item, index) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <Card
              sx={{
                p: 1,
                textAlign: "center",
                cursor: item.onClick ? "pointer" : "default",
                minHeight: 80, // ✅ Ensure fixed height
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // ✅ Center content properly
                alignItems: "center",
              }}
              onClick={item.onClick}
            >
              <Box sx={{ fontSize: 25 }}>{item.icon}</Box>{" "}
              {/* ✅ Fixed icon size */}
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", fontSize: "90%", whiteSpace: "nowrap", }}
              >
                {item.label}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.amount}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box>
        {/* <Typography variant="h6" fontWeight="bold" sx={{ px: 2, py: 1, color:"white" }}><ContentPasteIcon /> Fund Entry</Typography> */}

        <Card
          sx={{
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: 1,
            width: "100vw",
            mt: 1,
          }}
        >
          <List>
            {fundEntryItems.map((item, index) => (
              <ListItem
                key={item.name}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 3,
                  py: 1,
                  borderBottom:
                    index !== fundEntryItems.length - 1
                      ? "1px solid #eee"
                      : "none",
                      cursor: item.path ? "pointer" : "default",
                }}
                onClick={() => {
                  if (item.path) navigate(`/list/${item.path}`);
                }}
              >
                
              {/* <Box sx={{ mr: 2 }}>{item.icon}</Box> */}
                <Typography variant="body1">{item.name}</Typography>
                <ChevronRightIcon sx={{ color: "gray" }} />
              </ListItem>
            ))}
          </List>
        </Card>
      </Box>
      <BankAccountPopup open={openPopup} onClose={() => setOpenPopup(false)} />
    </Box>
  );
};

export default Account;
