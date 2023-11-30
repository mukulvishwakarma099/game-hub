import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: GenreListProps) => {
  const { data, loading, error } = useGenres();

  if (error) return null;

  if (loading) return <Spinner />;

  return (
    <List>
      {data?.map((genre) => (
        <ListItem paddingY="5px" key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit="cover"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              variant="link"
              fontSize="lg"
              onClick={() => onSelectGenre(genre)}
            >
              {genre?.name.length > 12
                ? genre?.name.substring(0, 12).concat("...")
                : genre?.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
