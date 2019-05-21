import axios from "axios";
import { unescape } from "lodash";

export const getArrayOfLengthN = n => [...Array(n).keys()];

/**
 * IO: Fetch N joke promises
 * @param n How many to fetch
 * @return List of promises containing string
 */
export const getRandomJokes = (n = 1) =>
  getArrayOfLengthN(n).map(() => getRandomJoke());

/**
 * IO: Fetch one joke
 * @return Promise containing string
 */
const getRandomJoke = async () => {
  const response = await axios.get(
    "https://api.icndb.com/jokes/random?exclude=explicit"
  );
  const joke = response.data.value.joke;
  return unescape(joke);
};
