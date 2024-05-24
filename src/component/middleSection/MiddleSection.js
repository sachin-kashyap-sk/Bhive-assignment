import React from "react";
import { Box } from "@mui/material";
import classes from "../../styleContainer/middle.module.css";
import MiddleMain from "./MiddleMain";
import { selectedValue } from "../redux/middleSection/MiddleSlice";
import { useSelector } from "react-redux";
const MiddleSection = () => {
  const chooseUsData = useSelector(selectedValue);

  return (
    <Box sx={{ paddingRight: "2%", paddingLeft: "2%" }}>
      <Box>
        <p className={classes.chooseText}>Why Choose us ?</p>
      </Box>
      <Box className={classes.chooseContainer}>
        {chooseUsData.map((item) => (
          <Box key={item.id} className={classes.firstContainer}>
            <Box>
              <img width="30px" height="auto" src={item.pic} alt="ChoosePic" />
            </Box>

            <Box className={classes.textSpace}>
              <p className={classes.chooseTitleText}>{item.title}</p>
            </Box>
          </Box>
        ))}
      </Box>
      <MiddleMain />
    </Box>
  );
};

export default MiddleSection;
