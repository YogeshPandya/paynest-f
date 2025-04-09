import { ListItem, ListItemText, ListItemIcon, Box } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const LogoutButton = ({ onLogout }) => {
  return (
    <ListItem
      button
      onClick={onLogout}
      sx={{
        backgroundColor: "white",
        borderRadius: "12px",
        mt: 0.5,
        boxShadow: "0px 2px 4px rgba(0,0,0,0.05)",
        justifyContent: "center",
        "&:hover": {
          backgroundColor: "#f9f9f9",
        },
        "&:active": {
          backgroundColor: "#f0f0f0",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <LogoutIcon color="error" />
        <ListItemText
          primary="Logout"
          typographyprops={{
            fontSize: 14,
            fontWeight: 500,
            textAlign: "center",
            color: "#ed4337", 
          }}
        />
      </Box>
    </ListItem>
  );
};

export default LogoutButton;
