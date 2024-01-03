import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshot from "../hooks/useScreenShots";

interface GameScreenShotsProps {
  gameId: number;
}

const GameScreenShots = ({ gameId }: GameScreenShotsProps) => {
  const { data, isLoading, error } = useScreenshot(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={3}
    >
      {data?.results?.map((ss) => (
        <Image key={ss.id} src={ss.image} alt="" />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
