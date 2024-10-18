import { Flex, Spacer, Heading, Text, Box } from "@chakra-ui/react";

export default function ProjectSection({
  projectName,
  date,
  description,
  children,
}) {
  return (
    <Box as="section" aria-labelledby={projectName}>
      <Flex alignItems={"end"} mb={1}>
        <Heading size={"2xl"} id={projectName}>
          {projectName}
        </Heading>
        <Spacer />
        <Text color={"primary.5"}>{date}</Text>
      </Flex>
      <Text>{description}</Text>
      {children}
    </Box>
  );
}
