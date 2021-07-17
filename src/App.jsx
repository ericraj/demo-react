import { Container, CssBaseline, Grid } from "@material-ui/core";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import store from "./store";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
