// CommisionRecords.jsx
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const commissionRecords = [
  {
    amount: 150.0,
    source: "Referral: User123",
    type: "Referral Bonus",
    dateEarned: "01 Apr 25, 09:15 AM",
    status: "Credited",
    creditedTime: "01 Apr 25, 09:20 AM"
  },
  {
    amount: 100.0,
    source: "Task Completion",
    type: "Task Bonus",
    dateEarned: "29 Mar 25, 03:40 PM",
    status: "Pending",
    creditedTime: "-"
  },
  {
    amount: 200.0,
    source: "Referral: User567",
    type: "Referral Bonus",
    dateEarned: "28 Mar 25, 11:00 AM",
    status: "Failed",
    creditedTime: "-"
  }
];

const InfoLine = ({ label, value, isStatus }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Credited':
        return 'green';
      case 'Pending':
        return 'orange';
      case 'Failed':
        return 'red';
      default:
        return 'inherit';
    }
  };

  return (
    <Box display="flex" justifyContent="space-between" mb={0.5}>
      <Typography fontSize="14px">{label}</Typography>
      <Typography
        fontSize="14px"
        sx={{
          color: isStatus ? getStatusColor(value) : 'inherit',
          fontWeight: isStatus ? 'bold' : 'normal'
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

const MoneyLine = ({ label, amount }) => (
  <Box display="flex" justifyContent="space-between" mb={1}>
    <Typography fontSize="14px">{label}</Typography>
    <Typography fontSize="14px">₹ {amount}</Typography>
  </Box>
);

const CommissionCard = ({ record }) => (
  <Card sx={{ marginBottom: 0.5, borderRadius: 3, boxShadow: 2 }}>
    <CardContent>
      <MoneyLine label="Commission Amount" amount={record.amount} />
      <InfoLine label="Source" value={record.source} />
      <InfoLine label="Type" value={record.type} />
      <InfoLine label="Date Earned" value={record.dateEarned} />
      <InfoLine label="Status" value={record.status} isStatus />
      <InfoLine label="Credited Time" value={record.creditedTime} />
    </CardContent>
  </Card>
);

const CommisionRecords = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#fff',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#156fb2',
          px: 2,
          py: 0.5,
          height: '48px'
        }}
      >
        <IconButton onClick={() => navigate('/account')} sx={{ color: '#fff', p: 0.5 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            color: '#ffffff',
            flexGrow: 1,
            textAlign: 'center',
            fontSize: '15px',
            marginRight: '40px'
          }}
        >
          Commission Records
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          px: 2,
          pt: 0.5,
          pb: 3,
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {commissionRecords.map((record, index) => (
          <CommissionCard key={index} record={record} />
        ))}
      </Box>
    </Box>
  );
};

export default CommisionRecords;
