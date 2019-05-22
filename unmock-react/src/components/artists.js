import { Box, Grid } from "grommet";
import React from "react";

const Artists = () => {
  const [artists, setArtists] = React.useState([]);

  React.useEffect(() => {
    const fetchedArtists = [...Array(5).keys()].map(i => ({
      name: `Artist ${i + 1}`,
    }));
    setArtists(fetchedArtists);
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
          direction="column"
          border={{ color: "black", size: "xsmall" }}
          pad="medium"
          align="center"
        >
          {artist.name}
        </Box>
      ))}
    </Grid>
  );
};

export default Artists;
