import React, { useState } from "react";
import { Paper, Breadcrumbs, Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import LanguageIconOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {" "}
      <nav className="main-navbar">
        <a href="/Home" className="nav-brand">
          <h1 className="navbar-brand">
            Brand<span className="Logo">Logo</span>
          </h1>
        </a>{" "}
        <Paper
          className="paper-menu"
          style={{ borderRadius: "20px", padding: "0 10px" }}
          elevation={3}
        >
          <Breadcrumbs
            className="breadcrumb-menu"
            separator="|"
            aria-label="breadcrumb"
          >
            <ul className="list-main">
              <li className="list-item">
                <Link className="links" to="/">
                  Home
                </Link>
              </li>
              <li className="list-item">
                <Link className="links" to="/About">
                  About
                </Link>
              </li>
              <li className="list-item">
                <Link className="links" to="/Contact">
                  Contact
                </Link>
              </li>
              <li className="list-item">
                <Link className="links" to="/CrudTest">
                  Crud
                </Link>
              </li>
            </ul>{" "}
          </Breadcrumbs>
        </Paper>
        <ul className="list-sub">
          <li className="list-sub-item">
            <a href="#">Earthvacation</a>
          </li>
          <li className="list-sub-item">
            <Button>
              <LanguageIconOutlinedIcon />
            </Button>
          </li>
          <li className="list-sub-item">
            <Paper>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MenuIcon />
                <LoginOutlinedIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link to="/">Home</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/LoginForm">Login</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/SignupForm">Sign up</Link>
                </MenuItem>
              </Menu>
            </Paper>
          </li>
        </ul>
      </nav>{" "}
      <hr
        className="nav-hr"
        style={{
          marginTop: "10px",
          color: "#EFF5F7",
          backgroundColor: "#EFF5F7",
          height: 1,
        }}
      />
    </>
  );
};

export default Navbar;
