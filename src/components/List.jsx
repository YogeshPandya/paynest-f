import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  List as MuiList,
  ListItem,
  ListItemText,
  Paper,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const dummyData = {
  billing: [
    { title: "Bill #001", description: "Paid on 2024-12-01" },
    { title: "Bill #002", description: "Paid on 2024-12-05" },
  ],
  withdrawal: [
    { title: "Withdrawal #123", description: "₹500 withdrawn" },
    { title: "Withdrawal #124", description: "₹700 withdrawn" },
  ],
  recharge: [
    { title: "Recharge ₹100", description: "Done on 2025-01-01" },
    { title: "Recharge ₹200", description: "Done on 2025-01-10" },
  ],
  commission: [
    { title: "Commission ₹50", description: "Earned on 2025-03-01" },
  ],
};

const List = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  console.log("Type from URL:", type);

  useEffect(() => {
    // Simulate fetching different data based on type
    const fetchedData = dummyData[type] || [];
    setRecords(fetchedData);
  }, [type]);

  const formattedTitle = type
    ? type.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
    : "List";

  return (
    <Box sx={{ width: "100vw", minHeight: "100vh", backgroundColor: "#f1f5f9" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#156fb2",
          px: 2,
          py: 0.5,
        }}
      >
        <IconButton onClick={() => navigate("/account")} sx={{ color: "white" }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center", color: "white" }}>
          {formattedTitle}
        </Typography>
      </Box>

      <Box sx={{ width: "100%", maxWidth: 600, margin: "auto", mt: 4, p: 2 }}>
        {records.length === 0 ? (
          <Typography variant="body2" sx={{ color: "gray", mt: 4, textAlign: "center" }}>
            No records found.
          </Typography>
        ) : (
          <Paper elevation={0}>
            <MuiList>
              {records.map((item, index) => (
                <ListItem key={index} divider>
                  <ListItemText primary={item.title} secondary={item.description} />
                </ListItem>
              ))}
            </MuiList>
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default List;
