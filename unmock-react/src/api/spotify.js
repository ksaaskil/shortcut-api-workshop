import axios from "axios";

/**
 * Compose functions in async fashion.
 * The result of the previous function call is awaited before feeding to * the next function.
 * @param  {...any} fns
 * @returns Composed function
 */
const asyncPipe = (...fns) => x => fns.reduce(async (y, f) => f(await y), x);

const fetchFromSpotify = async () => {
  const url = `${process.env.REACT_APP_SPOTIFY_URL}/v1/artists`;
  const response = await axios.get(url);
  console.log("Got response", response);
  return response.data;
};

export const getArtists = asyncPipe(fetchFromSpotify, data => data.artists);
