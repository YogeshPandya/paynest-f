
import React, { useState } from "react";
import {
  Avatar, Box, Typography, Card,
  CardContent, Button, BottomNavigation, BottomNavigationAction
} from "@mui/material";
import { styled } from "@mui/system";
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

const CustomTabs = styled(Box)({
  display: "flex",
  width: "100%",
  backgroundColor: "#156fb2",
  borderRadius: "10px 10px 0 0",
  padding: "0px", // Removed padding to fix spacing issue
  justifyContent: "space-between",
  flexWrap: "nowrap"
});

const CustomTab = styled(Button)(({ selected, color }) => ({
  flex: 1,
  textTransform: "none",
  fontSize: "14px",
  fontWeight: "bold",
  borderRadius: "15px 15px 0 0",
  backgroundColor: selected ? color : "#F0F0F0",
  color: selected ? "#fff" : color,
  margin: "0 2px", // Reduced margin
  minWidth: "auto",
}));

const FutureFundApp = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabColor, setTabColor] = useState("#3babd9");
  const [value, setValue] = useState('recents');

  const handleTabChange = (index, color) => {
    setTabIndex(index);
    setTabColor(color);
  };

  const handleBottomNavigationChange = (event, newValue) => {
    setValue(newValue);
  };

  const InvestmentCard = ({ data }) => (
    <Card
      sx={{
        background: "linear-gradient(to right, #f0f8f8, #eef7f7)",
        borderRadius: "10px",
        padding: "15px",
        boxShadow: "none",
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", textTransform: "capitalize" }}>
          {data.title}
        </Typography>
        <Box display="flex" justifyContent="space-between" mt={1}>
          <Typography>Invest Amount</Typography>
          <Typography>
            <AccountBalanceWalletIcon sx={{ fontSize: 16 }} /> {data.investAmount}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>Total Earnings</Typography>
          <Typography>
            <AccountBalanceWalletIcon sx={{ fontSize: 16 }} /> {data.totalEarnings}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>Return period</Typography>
          <Typography sx={{ fontWeight: "bold" }}>{data.returnPeriod}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>Periodic return</Typography>
          <Typography>
            <AccountBalanceWalletIcon sx={{ fontSize: 16 }} /> {data.periodicReturn}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>Earning Chances</Typography>
          <Typography>{data.earningChances}</Typography>
        </Box>
        <Button
          fullWidth
          variant="contained"
          sx={{
            marginTop: "15px",
            backgroundColor: data.buttonColor,
            color: data.textColor,
            fontWeight: "bold",
            "&:hover": { backgroundColor: data.buttonColor },
          }}
        >
          {data.buttonText} {data.buttonText === "Invest Now" && <ChevronRightIcon />}
        </Button>
      </CardContent>
    </Card>
  );

  const investmentData = [
    {
      title: "Daily income A",
      investAmount: "600",
      totalEarnings: "6,012",
      returnPeriod: "30 Day",
      periodicReturn: "200",
      earningChances: "0 / 30",
      buttonText: "Invest Now",
      buttonColor: "#07B3A3",
      textColor: "#fff",
    },
    {
      title: "Monthly income A",
      investAmount: "500",
      totalEarnings: "7,500",
      returnPeriod: "1 Month",
      periodicReturn: "7,500",
      earningChances: "0 / 1",
      buttonText: "Not activated yet",
      buttonColor: "#fff",
      textColor: "#FFC107",
    },
  ];
  

  return (
    <Box sx={{
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to bottom, #E3F2FD, #ffffff)",
      paddingBottom: "60px"
    }}>
      <Card elevation={3} sx={{
        p: { xs: 2, sm: 4 },
        backgroundColor: "#156fb2",
        width: "90%",
        maxWidth: "400px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}>
        <CardContent sx={{ padding: "0 !important" }}> {/* Removed padding to fix spacing */}
          <Box display="flex" alignItems="center" justifyContent="center" mb={1}>
            <Avatar
              src="/PN_logo.png"
              alt="Company Logo"
              sx={{ width: 56, height: 56, mr: 2 }}
            />
            <Box>
              <Typography variant="h5" sx={{
                fontSize: { xs: "1.3rem", sm: "1.8rem" },
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 'bold',
                color: '#fff'
              }}>
                PAYNEST
              </Typography>
              <Typography variant="body2" sx={{
                fontFamily: 'Poppins, sans-serif',
                color: '#fff',
                letterSpacing: 1
              }}>
                PROFIT COMPANY
              </Typography>
            </Box>
          </Box>

          <CustomTabs>
            <CustomTab
              onClick={() => handleTabChange(0, "#3babd9")}
              selected={tabIndex === 0}
              color="#3babd9"
            >
              Daily Earnings
            </CustomTab>
            <CustomTab
              onClick={() => handleTabChange(1, "#3babd9")}
              selected={tabIndex === 1}
              color="#3babd9"
            >
              Monthly Earnings
            </CustomTab>
          </CustomTabs>

          <Box sx={{
            backgroundColor: tabColor,
            borderRadius: "0 0 10px 10px",
            mt: 0, // Removed margin-top to fix spacing
            padding: { xs: 2, sm: 3 }
          }}>
            {tabIndex === 0 ? (
              <>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  💰 Daily Earnings Introductory
                </Typography>
                <Typography>
                  Investing in the first cycle product qualifies you for further benefits.
                </Typography>
              </>
            ) : (
              <>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  📅 Monthly Earnings Plan
                </Typography>
                <Typography>
                  Earn returns monthly with our premium investment plan.
                </Typography>
              </>
            )}
          </Box>
          {tabIndex === 0 && (
        <Grid container spacing={1} sx={{ padding: "20px", width: "100%" }}>
          {investmentData.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <InvestmentCard data={item} />
            </Grid>
          ))}
        </Grid>
      )}
        </CardContent>
      </Card>

      {/* Bottom Navigation */}
      <BottomNavigation
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          backgroundColor: "white",
          zIndex: 1000
        }}
        value={value}
        onChange={handleBottomNavigationChange}
      >
        <BottomNavigationAction label="Invest" value="invest" icon={<MovingOutlinedIcon />} />
        <BottomNavigationAction label="PrizeTask" value="prizetask" icon={<EmojiEventsOutlinedIcon />} />
        <BottomNavigationAction label="Account" value="account" icon={<AccountCircleOutlinedIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default FutureFundApp;
