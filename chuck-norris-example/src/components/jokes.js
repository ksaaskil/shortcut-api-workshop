import * as api from "../api";
import * as React from "react";
import { Box, Heading, Paragraph } from "grommet";

const Jokes = props => {
  const [loading, setIsLoading] = React.useState(false);
  const [jokes, setJokes] = React.useState([]);

  React.useEffect(() => {
    updateJokes();
  }, []);

  async function updateJokes() {
    setIsLoading(true);
    const newJokes = await Promise.all(api.getRandomJokes(props.amount));
    setIsLoading(false);
    setJokes(newJokes);
  }

  return (
    <Box direction="column" justify="start">
      <Heading level="3" alignSelf="center">
        Your daily Chuck dose
      </Heading>
      {loading && <Paragraph>Loading...</Paragraph>}
      {!loading &&
        jokes.map((joke, i) => <Paragraph key={`joke_${i}`}>{joke}</Paragraph>)}
    </Box>
  );
};

export default Jokes;
