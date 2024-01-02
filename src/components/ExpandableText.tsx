import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface ExpandableTextProps {
  children?: string;
}

const ExpandableText = ({ children }: ExpandableTextProps) => {
  const [expand, setExpand] = useState(false);

  if (!children) return null;

  const limit = 300;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expand ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpand(!expand)}
      >
        {expand ? "Show less" : "Expand"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
