import React from "react";
// import './App.css';
import Jokes from "./components/jokes";
import CatFacts from "./components/cat-facts";
import { Box, Button, Heading, Grommet } from "grommet";

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
    align="center"
    justify="start"
    background="brand"
    gap="medium"
    round="none"
    pad={{ horizontal: "small", vertical: "small" }}
    margin="none"
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

function App() {
  const [navState, setNavState] = React.useState("chuck");
  return (
    <Grommet full theme={theme}>
      <AppBar>
        <Heading level="3" margin="none">
          Your daily facts
        </Heading>
        <Button
          label="Chuck Norris"
          onClick={() => setNavState("chuck")}
          active={navState === "chuck"}
        />
        <Button
          label="Cats"
          onClick={() => setNavState("cats")}
          active={navState === "cats"}
        />
      </AppBar>
      <Box pad="medium" align="center">
        {navState === "chuck" && <Jokes amount={2} />}
        {navState === "cats" && <CatFacts amount={2} />}
      </Box>
    </Grommet>
  );
}

export default App;
