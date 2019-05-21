import * as api from "../api";
import * as React from "react";
import { Box, Heading, Paragraph } from "grommet";

const Jokes = ({ amount }) => {
  const [error, setError] = React.useState(undefined);
  const [loading, setIsLoading] = React.useState(false);
  const [jokes, setJokes] = React.useState([]);

  // Do not refer to state variables here, only in `useEffect`
  // https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
  async function updateJokes(howMany) {
    setIsLoading(true);
    try {
      const newJokes = await Promise.all(api.getRandomJokes(howMany));
      setJokes(newJokes);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    updateJokes(amount);
  }, [amount]);

  return (
    <Box direction="column" align="center">
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
