import { makeStyles } from "@material-ui/core";
import React from "react";
import { footHeight } from "../../constants/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: footHeight,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.grey[100],
    fontSize: "0.9em"
  }
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>&copy;{new Date().getFullYear()}. All rights reserved.</footer>
  );
}

export default Footer;
