import { Flex, Spacer, Heading, Text, Box } from "@chakra-ui/react";

export default function Section({ projectName, date, description, children }) {
  return (
    <Box as="section">
      <Flex alignItems={"end"} mb={2} gap={4}>
        <Heading size={"2xl"}>{projectName}</Heading>
        <Spacer />
        <Text color={"primary.5"} textAlign={"right"}>
          {date}
        </Text>
      </Flex>
      <Text>{description}</Text>
      {children}
    </Box>
  );
}
