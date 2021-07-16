import { AppBar as MUIAppBar, Container, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

function AppBar() {
  const classes = useStyles();

  const links = [
    { id: 1, url: "/", text: "Demo React" },
    { id: 2, url: "/about", text: "About" }
  ];

  return (
    <MUIAppBar className={classes.root}>
      <Container maxWidth="lg">
        <Toolbar>
          {links.map(link => (
            <Typography key={link.id} variant="h6" className={classes.title}>
              <Link to={link.url}>{link.text}</Link>
            </Typography>
          ))}
        </Toolbar>
      </Container>
    </MUIAppBar>
  );
}

export default AppBar;
