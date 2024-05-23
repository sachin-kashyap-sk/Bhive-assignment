import React from "react";
import { Box, Container } from "@mui/material";
import classes from "../../styleContainer/middle.module.css";
import MiddleMain from "./MiddleMain";
import { selectedValue } from "../redux/middleSection/MiddleSlice";
import { useSelector } from "react-redux";
const MiddleSection = () => {
  const chooseUsData = useSelector(selectedValue);

  return (
    <Container maxWidth="false">
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
    </Container>
  );
};

export default MiddleSection;
