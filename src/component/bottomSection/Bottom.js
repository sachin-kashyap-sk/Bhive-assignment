import React from "react";
import { Box } from "@mui/material";
import classes from "../../styleContainer/bottom.module.css";
import mobile1 from "../../assets/mobile1.png";
import mobile2 from "../../assets/mobile2.png";
import gPlay from "../../assets/gPlay.png";
import appStore from "../../assets/appStore.png";
const Bottom = () => {
  return (
    <Box>
      <Box className={classes.bottomFirst}>
        <p className={classes.text}>Download our app now</p>
      </Box>
      <Box className={classes.mainContainer}>
        <img width="auto" height="auto" src={mobile1} alt="mobile1" />
        <img width="auto" height="auto" src={mobile2} alt="mobile2" />

        <Box className={classes.textContainer}>
          <Box className={classes.textContainerInner}>
            <p className={classes.bottomText}>
              Boost your productivity with the BHIVE Workspace app. Elevate your
              workspace, collaborate efficiently, and unlock exclusive perks.
            </p>
          </Box>
          <Box className={classes.lastContainer}>
            <img width="146px" height="45px" src={gPlay} alt="gPlay" />
            <img width="146px" height="45px" src={appStore} alt="appStore" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Bottom;
