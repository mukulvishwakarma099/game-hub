import { HStack, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { error, games, loading } = useGames();

  return (
    <>
      {loading ? (
        <HStack justifyContent={"center"} alignItems={"center"}>
          <Spinner />
        </HStack>
      ) : null}
      {error ? <Text>{error}</Text> : null}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        gap={10}
        padding="10px"
      >
        {games?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
