import * as api from "./api";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

describe("Joke API with mock axios", () => {
  const joke = "Chuck says &amp; does.";
  beforeAll(() => {
    const mockAxios = new MockAdapter(axios);
    mockAxios.onGet().reply(200, {
      value: { joke },
    });
  });

  it("creates an empty array of given length", async () => {
    const array = api.getArrayOfLengthN(5);
    expect(array).toHaveLength(5);
  });

  it("fetches unescaped jokes in imperative fashion", async () => {
    const joke = await api.getRandomJoke();
    expect(joke).toEqual(`Chuck says & does.`);
  });

  it("fetches unescaped joke in functional fashion", async () => {
    const joke = await api.getRandomJokeFp();
    expect(joke).toEqual(`Chuck says & does.`);
  });

  it("fetches many jokes", async () => {
    const jokes = await Promise.all(api.getRandomJokes(3));
    expect(jokes).toHaveLength(3);
  });
});
