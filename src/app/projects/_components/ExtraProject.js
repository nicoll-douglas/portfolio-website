import { Box, Heading, Text } from "@chakra-ui/react";
import ExternalLink from "@/components/common/ExternalLink";

export default function ExtraProject() {
  return (
    <Box maxW={"full"} as="section" aria-labelledby="extra">
      <Heading size={"lg"} mb={4} id="extra">
        Extra
      </Heading>
      <ExternalLink href="https://github.com/nicoll-douglas/advent-of-code-2024">
        Advent of Code Solutions 2024
      </ExternalLink>
    </Box>
  );
}
