import axios from "axios";
import { unescape } from "lodash";

export const getArrayOfLength = n => [...Array(n).keys()];

export const fetchNPromises = (n = 1, fetchPromiseFn) => {
  const listOfPromises = getArrayOfLength(n).map(() => fetchPromiseFn());
  return Promise.all(listOfPromises);
};

export const getRandomJokes = (n = 1) => fetchNPromises(n, getRandomJoke);

const getRandomJoke = async () => {
  const response = await axios.get(
    "https://api.icndb.com/jokes/random?exclude=explicit"
  );
  const joke = response.data.value.joke;
  return unescape(joke);
};
