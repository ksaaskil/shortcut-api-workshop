import * as api from "../api";
import * as React from "react";
import { Box, Heading, Paragraph } from "grommet";

const Jokes = ({ amount }) => {
  const [error, setError] = React.useState(undefined);
  const [loading, setIsLoading] = React.useState(false);
  const [jokes, setJokes] = React.useState([]);

  React.useEffect(() => {
    async function updateJokes() {
      setIsLoading(true);
      try {
        const newJokes = await Promise.all(api.getRandomJokes(amount));
        setJokes(newJokes);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    updateJokes();
  }, [amount]);

  return (
    <Box direction="column" align="center" justify="start">
      <Heading level="3" alignSelf="center">
        Your daily Chuck dose
      </Heading>
      {error && (
        <Paragraph>
          Sorry, failed fetching Chuck facts. Please try again soon.
        </Paragraph>
      )}
      {!error && loading && <Paragraph>Loading...</Paragraph>}
      {!error &&
        !loading &&
        jokes.map((joke, i) => <Paragraph key={`joke_${i}`}>{joke}</Paragraph>)}
    </Box>
  );
};

export default Jokes;
