import { Flex, Spacer, Heading, Text, Box } from "@chakra-ui/react";

export default function ProjectSection({
  projectName,
  date,
  description,
  children,
}) {
  const id = projectName
    .split(" ")
    .map((v) => v.toLowerCase())
    .join("-");

  return (
    <Box as="section" aria-labelledby={id}>
      <Flex alignItems={"end"} mb={2} gap={4}>
        <Heading size={"2xl"} id={id}>
          {projectName}
        </Heading>
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
