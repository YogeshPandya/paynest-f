import React, { useEffect, useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import MovingOutlinedIcon from "@mui/icons-material/MovingOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathToValue = (pathname) => {
    if (pathname.startsWith("/prize-task")) return "prize-task";
    if (pathname.startsWith("/account")) return "account";
    return "invest"; // default
  };

  const [value, setValue] = useState(pathToValue(location.pathname));

  useEffect(() => {
    // Keep value in sync when path changes (e.g. via external navigation)
    setValue(pathToValue(location.pathname));
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/${newValue}`);
  };

  // Now safely return null AFTER hooks are set up
  const hideFooterPaths = ["/", "/login", "/signup", "/forget-password", "/loader","/billing", "/recharge-record", "/bank-card", "/withdraw-record", "/commission", "/feedback",
                           "/about-us", "/self-service", "/user-settings", "/reset-payment-password", "/recharge"];
  if (hideFooterPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "white",
        zIndex: 1000,
        borderRadius: "25px 25px 0 0", // ✅ Only top side rounded
        boxShadow: "0px -3px 10px rgba(0, 0, 0, 0.1)", // ✅ Shadow for smooth effect
      }}
      elevation={3} // Elevation for better UI
    >
      <BottomNavigation
        value={value}
        onChange={handleChange}
        sx={{
          backgroundColor: "transparent", // Keeps background clean
        }}
      >
        <BottomNavigationAction
          label="Invest"
          value="invest"
          icon={<MovingOutlinedIcon />}
          disableRipple
          sx={{
            "&.Mui-selected": { color: "#156fb2" },
            outline: "none",
            "&:focus": { outline: "none" },
          }}
        />
        <BottomNavigationAction
          label="PrizeTask"
          value="prize-task"
          icon={<EmojiEventsOutlinedIcon />}
          disableRipple
          sx={{
            "&.Mui-selected": { color: "#156fb2" },
            outline: "none",
            "&:focus": { outline: "none" },
          }}
        />
        <BottomNavigationAction
          label="Account"
          value="account"
          icon={<AccountCircleOutlinedIcon />}
          disableRipple
          sx={{
            "&.Mui-selected": { color: "#156fb2" },
            outline: "none",
            "&:focus": { outline: "none" },
          }}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
