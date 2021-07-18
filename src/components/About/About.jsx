import { Typography, Box } from "@material-ui/core";
import React from "react";

function About() {
  return (
    <Box width="100%" display="flex" flexDirection="column">
      <h1>About</h1>
      <Typography variant="h6">
        This is a simple react application using{" "}
        <a href="https://jsonplaceholder.typicode.com" target="_blank" rel="noreferrer">
          JSONPlaceholder API
        </a>
      </Typography>
    </Box>
  );
}

export default About;
