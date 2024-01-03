import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import DefinationItem from "./DefinitionItem";

interface GameAttributesProps {
  game: Game;
}

const GameAttributes = ({ game }: GameAttributesProps) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinationItem term="Platforms">
        {game?.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinationItem>
      <DefinationItem term="Metascore">
        <CriticScore score={game?.metacritic!} />
      </DefinationItem>
      <DefinationItem term="Genres">
        {game?.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinationItem>
      <DefinationItem term="Publishers">
        {game?.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinationItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
