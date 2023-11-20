import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bgColor="red">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bgColor="blue">
          aside
        </GridItem>
      </Show>
      <GridItem area="main" bgColor="green">
        main
      </GridItem>
    </Grid>
  );
};

export default App;
