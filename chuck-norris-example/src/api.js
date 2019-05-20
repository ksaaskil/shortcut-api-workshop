import axios from "axios";
import { unescape } from "lodash";

export const getRandomJokes = (amount = 1) =>
  Promise.all([...Array(amount).keys()].map(() => getRandomJoke()));

export const getRandomJoke = async () => {
  const response = await axios.get(
    "https://api.icndb.com/jokes/random?exclude=explicit"
  );
  const joke = response.data.value.joke;
  return unescape(joke);
};
