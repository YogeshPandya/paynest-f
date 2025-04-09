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

const rechargeRecords = [
  {
    arrivalMoney: 190.95,
    createTime: '12:20 PM, 31 Mar 25',
    status: 'Payment Success',
    finishTime: '10:24 AM, 02 Apr 25'
  },
  {
    arrivalMoney: 295.45,
    createTime: '11:59 AM, 30 Mar 25',
    status: 'Payment Pending',
    finishTime: '20:28 PM, 30 Mar 25'
  },
  {
    arrivalMoney: 190.0,
    createTime: '11:37 AM, 28 Mar 25',
    status: 'Payment Failed',
    finishTime: '12:47 PM, 28 Mar 25'
  },
  {
    arrivalMoney: 190.0,
    createTime: '10:41 AM, 27 Mar 25',
    status: 'Payment Success',
    finishTime: '11:55 AM, 27 Mar 25'
  }
];

const InfoLine = ({ label, value, isStatus }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Payment Success':
        return 'green';
      case 'Payment Failed':
        return 'red';
      case 'Payment Pending':
        return 'orange';
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

const RechargeCard = ({ record }) => (
  <Card sx={{ marginBottom: 0.5, borderRadius: 3, boxShadow: 2 }}>
    <CardContent>
      <MoneyLine label="Arrival Money" amount={record.arrivalMoney} />
      <InfoLine label="Create Time" value={record.createTime} />
      <InfoLine label="Status" value={record.status} isStatus />
      <InfoLine label="Finish Time" value={record.finishTime} />
    </CardContent>
  </Card>
);

const RechargeRecords = () => {
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
      {/* Fixed Blue Header */}
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
            marginRight: '40px' // balance back icon
          }}
        >
          Recharge Records
        </Typography>
      </Box>

      {/* Scrollable Content */}
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
        {rechargeRecords.map((record, index) => (
          <RechargeCard key={index} record={record} />
        ))}
      </Box>
    </Box>
  );
};

export default RechargeRecords;
