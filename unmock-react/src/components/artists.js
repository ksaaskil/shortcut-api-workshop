import { Box, Grid } from "grommet";
import React from "react";
import { getArtists } from "../api/spotify";
import { unmock } from "unmock-jsdom";

const Artists = () => {
  const [artists, setArtists] = React.useState([]);

  async function fetchAndSetArtists() {
    await unmock();
    const fetchedArtists = await getArtists();
    setArtists(fetchedArtists);
  }

  React.useEffect(() => {
    fetchAndSetArtists();
  }, []);

  return (
    <Grid
      columns={{
        count: 3,
        size: "auto",
      }}
      gap="small"
      margin="small"
    >
      {artists.map((artist, i) => (
        <Box
          key={`artist_${i}`}
          direction="column"
          // border={{ color: "black", size: "xsmall" }}
          pad="medium"
          align="center"
          background="light-1"
        >
          {artist.name}
        </Box>
      ))}
    </Grid>
  );
};

export default Artists;
