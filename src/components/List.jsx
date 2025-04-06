import React from "react";
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
import { useNavigate, useParams } from "react-router-dom";

const List = ({ records = [] }) => {
  const navigate = useNavigate();
  const { type } = useParams();

  const formattedTitle = type
    ? type.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
    : "List";

  return (
    <Box sx={{ width: "100vw", minHeight: "100vh", backgroundColor: "#f1f5f9", textAlign: "center" }}>
      {/* Header with Blue Background */}
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

      {/* Content */}
      <Box sx={{ width: "100%", maxWidth: 600, margin: "auto", mt: 4, p: 2 }}>
        {records.length === 0 ? (
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <img
              src="https://www.achieversacademyalwar.in/public/assets/images/no-record-found.png"
              alt="No Records"
              style={{ width: "120px", opacity: 0.6 }}
            />
            <Typography variant="body2" sx={{ color: "gray", mt: 2 }}>
              No more.
            </Typography>
          </Box>
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
