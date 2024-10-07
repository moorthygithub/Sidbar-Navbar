import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import Dashboard from "../../Icons/Dashboard";
import Berry from "../../Icons/Berry";
const Sidebar = ({ isCollapsed, handleDrawerToggle, openDrawer }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Drawer
      variant={
        isSmallScreen
          ? "temporary"
          : isLargeScreen
          ? "persistent"
          : "persistent"
      }
      open={isSmallScreen ? openDrawer : true}
      onClose={isSmallScreen ? handleDrawerToggle : undefined}
      sx={{
        width: isSmallScreen ? 260 : isCollapsed ? 0 : 260,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: isSmallScreen ? 260 : isCollapsed ? 0 : 260,
          boxSizing: "border-box",
          overflowX: "hidden",
          marginTop: isSmallScreen ? 0 : "88px",
          border: "none",
          boxShadow: "none",
          display: isLargeScreen && isCollapsed ? "none" : "block",
        },
        display: { xs: "block", sm: "block" },
      }}
    >
      <List
        sx={{
          padding: "16px",
        }}
      >
        <Box
          sx={{
            display: isLargeScreen || !isSmallScreen ? "none" : "flex",
            padding: "16px",
            mb: 2,
          }}
        >
          <Berry />
        </Box>

        <Typography sx={{ variant: "caption", fontSize: 17 , mb:2}}>
          Dashboard
        </Typography>
        <ListItem
          button
          onClick={() => handleListItemClick(0)}
          component={Link}
          to="/dashboard"
          sx={{
            backgroundColor:
              selectedIndex === 0 ? "rgb(237, 231, 246)" : "white",
            borderRadius: "10px",
            mb: 1,
            backgroundColor: "#ede7f6",
            color: "#5e35b1",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <ListItemIcon sx={{ minWidth: 0, justifyContent: "center" }}>
            <Dashboard />
          </ListItemIcon>
          <ListItemText
            primary="Dashboard"
            sx={{
              display: isSmallScreen ? "block" : isCollapsed ? "none" : "block",
              ml: isSmallScreen ? 2 : 2,
              textAlign: isSmallScreen ? "left" : "left",
              color: "#5e35b1",
            }}
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
