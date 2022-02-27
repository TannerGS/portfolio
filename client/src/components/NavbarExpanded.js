import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import { makeStyles } from "@material-ui/core/styles";

import Footer from "../components/Footer";
import { withThemeCreator } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "block",
  },
  nav: {
    background: "#222",
    margin: 0,
    padding: 12,
    paddingLeft: 20,
    height: 80,
  },
  title: {
    color: "tan",
    display: "inline-flex",
    "&:hover": {
      color: 'tomato'
    }
  },
  links: {
    color: "black",
    display: "inline-flex",
    marginLeft: "1rem",
    marginRight: "1rem",
    marginTop: 0,
    itemsAlign: "center",
    padding: 6,
    paddingBottom: 2,
    borderRadius: 10,
    background: "tan",
    "&:hover": {
      backgroundColor: 'tomato'
    }
  },
  linksGroup: {
    marginLeft: "23%",
  },
  text: {
    textDecoration: "none",
  },
  textLink: {
    color: "white",
    display: "inline",
    marginLeft: "2rem",
    marginRight: "2rem",
  },
  textPlain: {
    color: "tan",
    display: "inline-flex",
    marginLeft: "3rem",
    marginRight: "3rem",
    borderBottom: "tomato 2px solid",
    paddingTop: -2,
    "&:hover": {
      color: "tomato",
    }
  },
  icon: {
    marginRight: 5,
  },
  contact: {
    paddingTop: 3,
  },
  footer: {
    display: "inline-flex",
    marginLeft: "20%",
  },
  footerSmall: {
    display: "inline-flex",
    marginLeft: "13%",
  },
}));

const NavbarExpanded = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
    <Box component="nav" className={classes.mainContainer} style={{ display: 'inline' }} >
    <nav position="static" className={classes.nav}>
      <Link to="/" className={classes.text} >
        <h2 className={classes.title} >Tanner Simpkins</h2>
      </Link>
      <span className={classes.linksGroup}>
        <Link to="/resume" className={classes.text} >
          <h4 className={classes.textLink, classes.textPlain} >About</h4>
        </Link>
        <Link to="/portfolio" className={classes.text} >
          <h4 className={classes.textLink, classes.textPlain} >Portfolio</h4>
        </Link>
        <Link to="/contact" className={classes.text} >
          <h4 className={classes.textLink} className={classes.textPlain} >Contact Me</h4>
        </Link>
      </span>
      <span className={classes.footer}>
        <Footer />
      </span>
    </nav>
    </Box>
  </React.Fragment>
  )
}

export default NavbarExpanded;