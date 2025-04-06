import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import MovingOutlinedIcon from "@mui/icons-material/MovingOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router-dom";

const Footer = ({ value, onChange }) => {
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    onChange(newValue);
    navigate(`/${newValue}`); // Navigate to respective page
  };

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
