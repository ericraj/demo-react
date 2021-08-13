import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import { FOOTER_HEIGHT } from "../../constants";

const useStyles = makeStyles(theme => ({
  root: {
    height: FOOTER_HEIGHT,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: theme.palette.grey[100],
    fontSize: "0.9em"
  }
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container maxWidth="lg">&copy;{new Date().getFullYear()}. All rights reserved.</Container>
    </footer>
  );
}

export default Footer;
