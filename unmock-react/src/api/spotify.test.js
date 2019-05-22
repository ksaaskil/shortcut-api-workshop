import { getArtists } from "./spotify";
import { unmock } from "unmock-jsdom";

describe("Fetching artists from spotify", () => {
  beforeAll(async () => {
    await unmock();
  });
  it("fetches artists as expected", async () => {
    const artists = await getArtists();
    expect(artists).toBeDefined();
    expect(artists.length > 0).toBe(true);
    const artist = artists[0];
    expect(artist.name).toBeDefined();
  });
});
