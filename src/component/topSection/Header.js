import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../assets/logo.png";
import headerImage from "../../assets/headerImage1.png";
import headerImage2 from "../../assets/headerImage2.png";
import headerImage3 from "../../assets/headerImage3.png";
import call from "../../assets/call.png";
import classes from "../../styleContainer/header.module.css";
const Header = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <AppBar
        className={classes.appBarNav}
        sx={{
          backgroundColor: "#ffffff",
          boxShadow: "none",
        }}
      >
        <Toolbar className={classes.toolbar}>
          <img width="125px" height="40px" src={logo} alt="logo" />
          <Box className={classes.callContainer}>
            <img width="24px" height="24px" src={call} alt="call" />
          </Box>
        </Toolbar>
      </AppBar>

      <Box className={classes.mainContainer}>
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          <Box>
            <img
              style={{
                position: "absolute",
                width: "70%",
                height: "35rem",
              }}
              src={headerImage}
              alt="firstHeaderImage"
            />
          </Box>
          <Box className={classes.textContainer}>
            <p className={classes.text}>
              Host your meeting with world-class amenities. Starting at
              <span style={{ color: "#FFBB00" }}>₹199/-!</span>
            </p>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ position: "absolute" }}>
            <img
              style={{ paddingTop: "25%" }}
              src={headerImage2}
              alt="headerImage2"
            />
          </Box>
          <Box sx={{ position: "relative" }}>
            <img src={headerImage3} alt="headerImage3" />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <p className={classes.text}>
          Host your meeting with world-class amenities. Starting at
          <span style={{ color: "#FFBB00" }}>₹199/-!</span>
        </p>
      </Box>
    </Box>
  );
};

export default Header;
