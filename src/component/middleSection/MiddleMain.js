import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import direction from "../../assets/direction.png";
import arrow from "../../assets/arrow.png";
import arrow2 from "../../assets/arrow2.png";
import classes from "../../styleContainer/middle.module.css";
import { selectedMain } from "../redux/middleSection/MiddleSlice";
import { useSelector } from "react-redux";
const MiddleMain = () => {
  const data = useSelector(selectedMain);

  return (
    <Box sx={{ width: "100%" }}>
      <Box className={classes.spaceHeadingContainer}>
        <p className={classes.spaceHeading}>Our Space Overview</p>
      </Box>

      <Box className={classes.middleMainContainer}>
        {data.map((item) => (
          <Card sx={{ maxWidth: 360, marginBottom: "3%" }} key={item.id}>
            <CardHeader
              action={
                <Box className={classes.cardHeader}>
                  <img
                    width="18px"
                    height="18px"
                    src={direction}
                    alt="direction"
                  />
                  <p className={classes.cardTitle}>6 Kms</p>
                </Box>
              }
              title={item.title}
            />
            <CardContent
              sx={{
                height: "35vh",
                paddingTop: "0%",
              }}
            >
              <Box>
                <img
                  src={item.spaceImage}
                  height="auto"
                  width="330vw"
                  style={{ borderRadius: "6px", position: "absolute" }}
                  alt="space1"
                />

                <Box sx={{ paddingTop: "5%", paddingLeft: "5%" }}>
                  <Box className={classes.chipContainer}>
                    <img src={item.chipImage} alt="chipIcon" />
                    <p className={classes.workText}>{item.chipText}</p>
                  </Box>
                </Box>
              </Box>
            </CardContent>
            <CardContent>
              <Box className={classes.discountContainer}>
                <Box className={classes.discountFirst}>
                  <p className={classes.discountText}>20% discount</p>
                </Box>
              </Box>
              <Box className={classes.cardContentMain}>
                <Box className={classes.cardContentSec}>
                  <Box>
                    <p className={classes.dayPassText}>{item.firstBtnText}</p>
                    <Box>
                      <p className={classes.rupeesText}>
                        &#8377; {item.firstBtnPrice}
                        <span className={classes.dayText}>/Day</span>
                      </p>
                    </Box>
                  </Box>

                  <Box sx={{ paddingLeft: "30%" }}>
                    <img width="8px" height="8px" src={arrow} alt="arrow" />
                    <img width="8px" height="8px" src={arrow} alt="arrow" />
                    <img width="8px" height="8px" src={arrow2} alt="arrow2" />
                  </Box>
                </Box>

                <Box
                  sx={{ backgroundColor: "#FFCF4B" }}
                  className={classes.cardContentSec}
                >
                  <Box>
                    <p className={classes.dayPassText}>{item.secBtnText}</p>
                    <Box>
                      <p className={classes.rupeesText}>
                        &#8377; {item.secBtnPrice}
                        <span className={classes.dayText}>/10 Days</span>
                      </p>
                    </Box>
                  </Box>

                  <Box sx={{ paddingLeft: "8%" }}>
                    <img width="8px" height="8px" src={arrow} alt="arrow" />
                    <img width="8px" height="8px" src={arrow} alt="arrow" />
                    <img width="8px" height="8px" src={arrow2} alt="arrow2" />
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default MiddleMain;
