import React from "react";
import { Paper, Breadcrumbs, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar2 = () => {
  return (
    <nav classname="main-navbar">
      <Box className="brand"> BrandLogo</Box>
      <Paper className="paper-menus" xs={{maxWidth:"100%"}}>
        <Breadcrumbs className="" separator="|" aria-label="breadcrumb">
          <Link className="link-tems" underline="hover" color="inherit" href="#" to="/">
            Home
          </Link>
          <Link
            className="link-tems"
            underline="hover"
            color="inherit"
            href="#"
            to="/About"
          >
            About
          </Link>
          <Link
            className="link-tems"
            underline="hover"
            color="inherit"
            href="#"
            to="/Contact"
          >
            Contact Us
          </Link>
        </Breadcrumbs>
      </Paper>
      <Typography className="">Earthlocation</Typography>
      <Paper></Paper>
    </nav>
  );
};

export default Navbar2;
