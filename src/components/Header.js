import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
import "../styles.css";


const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="sticky" color="default" elevation={0} className="header-bar">
      <Toolbar className="Toolbar">
        <a href="https://accounts.nosres.com/" className="logo-link">
          <img
            src="https://accounts.nosres.com/images/accounts/logo.svg"
            alt="logo"
            className="logo-image"
          />
          <Typography variant="h7" className="logo-text">
            Account
          </Typography>
        </a>
        <Button
          className="sign-in-button"
          href="https://accounts.nosres.com/login"
        >
          Sign In
        </Button>
      </Toolbar>
    </AppBar>
    
  );
};

export default Header;
