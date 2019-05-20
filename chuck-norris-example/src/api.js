import axios from "axios";
export const getRandomJokes = (amount=1) => Promise.all([...Array(amount).keys()].map(() => getRandomJoke()))

export const getRandomJoke = () => axios.get("https://api.icndb.com/jokes/random").then((response) =>
      response.data.value.joke);
