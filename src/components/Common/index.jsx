import { makeStyles } from "@material-ui/core/styles";

import { Backdrop, CircularProgress } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    // Force to visible (hack React.StrictMode warning)
    opacity: "1 !important",
    visibility: "visible !important"
  }
}));

function SimpleBackdrop() {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={false}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

function PrimaryCircularProgress() {
  return <CircularProgress color="primary" />;
}

export { SimpleBackdrop, PrimaryCircularProgress };
