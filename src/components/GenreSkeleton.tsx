import {
  HStack,
  ListItem,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <ListItem>
      <HStack>
        <SkeletonCircle />
        <SkeletonText />
      </HStack>
    </ListItem>
  );
};

export default GenreSkeleton;
