// src/components/Footer.jsx

import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import MovingOutlinedIcon from "@mui/icons-material/MovingOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Footer = ({ value, onChange }) => {
  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "white",
        zIndex: 1000,
      }}
      value={value}
      onChange={onChange}
    >
      <BottomNavigationAction label="Invest" value="invest" icon={<MovingOutlinedIcon />} />
      <BottomNavigationAction label="PrizeTask" value="prizetask" icon={<EmojiEventsOutlinedIcon />} />
      <BottomNavigationAction label="Account" value="account" icon={<AccountCircleOutlinedIcon />} />
    </BottomNavigation>
  );
};

export default Footer;
