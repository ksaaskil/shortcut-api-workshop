import axios from "axios";
import { unescape } from "lodash";

export const getArrayOfLengthN = n => [...Array(n).keys()];

/**
 * IO: Fetch N joke promises
 * @param n How many to fetch
 * @return List of promises containing string
 */
export const getRandomJokes = (n = 1) =>
  getArrayOfLengthN(n).map(() => getRandomJokeFp());

/**
 * IO: Fetch a joke response from ICNDB API.
 * @return `Axios` response
 */
const getRandomJokeResponse = () => {
  return axios.get("https://api.icndb.com/jokes/random?exclude=explicit");
};

/**
 * Fetch one joke in imperative fashion.
 * See the alternative `getRandomJokeFp` below for more FP-like
 * example.
 * @return Promise containing unescaped string
 */
export const getRandomJoke = async () => {
  const response = await axios.get(
    "https://api.icndb.com/jokes/random?exclude=explicit"
  );
  const joke = response.data.value.joke;
  return unescape(joke);
};

/**
 * Compose functions in async fashion.
 * The result of the previous function call is awaited before feeding to * the next function.
 * @param  {...any} fns
 * @returns Composed function
 */
const asyncPipe = (...fns) => x => fns.reduce(async (y, f) => f(await y), x);

/**
 * Alternative to `getRandomJoke`:
 * Fetch one joke in declarative fashion using function composition.
 * This does not need unit testing, only the individual functions do
 * if they are complex.
 * @return Promise containing unescaped string
 */
export const getRandomJokeFp = asyncPipe(
  getRandomJokeResponse,
  response => response.data.value.joke,
  unescape
);
