import React from "react";
import Artists from "./components/artists";
import { Box, Button, Grommet, Heading } from "grommet";

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
    gap="small"
    elevation="medium"
    {...props}
  />
);

function App() {
  return (
    <Grommet theme={theme}>
      <AppBar>
        <Heading level="3" margin="none">
          Mediate
        </Heading>
        <Button active={true} label="Artists" />
      </AppBar>
      <Artists />
    </Grommet>
  );
}

export default App;
