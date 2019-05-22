import React from "react";
import Artists from "./components/artists";
import { Box, Grommet, Heading } from "grommet";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px",
    },
  },
};

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="start"
    background="brand"
    pad="small"
    elevation="medium"
    {...props}
  />
);

function App() {
  return (
    <Grommet theme={theme}>
      <AppBar>
        <Heading level="3" margin="none">
          My artists
        </Heading>
      </AppBar>
      <Artists />
    </Grommet>
  );
}

export default App;
