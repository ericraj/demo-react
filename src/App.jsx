import { Container, Grid, CssBaseline } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from "./components/AppBar";
import About from "./components/About";
import TodoList from "./components/TodoList";
import useStyles from "./styles";
import Footer from "./components/Footer";

function App() {
  const classes = useStyles();
  return (
    <Router>
      <CssBaseline />
      <Grid container direction="column">
        <AppBar />
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TodoList />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </Grid>
    </Router>
  );
}

export default App;
