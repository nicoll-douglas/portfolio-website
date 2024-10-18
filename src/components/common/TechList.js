import { Heading, UnorderedList, Box, ListItem } from "@chakra-ui/react";

export default function TechList({ heading = "Technologies:", list }) {
  return (
    <Box maxW={"fit-content"}>
      <Heading size={"md"} as={"h3"} mb={1}>
        {heading}
      </Heading>
      <UnorderedList fontSize={"xl"} px={4}>
        {list.map((technology, index) => (
          <ListItem key={index}>{technology}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}
