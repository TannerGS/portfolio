import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Github from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
    paddingBottom: '0.2rem',
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.41rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction onClick={() => window.open('https://github.com/TannerGs')} icon={<Github />} className={classes.root} />
      <BottomNavigationAction onClick={() => window.open('https://www.linkedin.com/in/tanner-simpkins-5361871bb/')} icon={<LinkedIn />} className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;
