import React, { useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import Header from "../Navabar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleLeftDrawerToggle = () => {
    setIsCollapsed((prev) => !prev);
    setOpenDrawer((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
      <Sidebar
        isCollapsed={isCollapsed}
        handleDrawerToggle={handleLeftDrawerToggle}
        openDrawer={openDrawer}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: {
            xs: 2,
            sm: 2,
          },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
