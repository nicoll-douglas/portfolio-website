import { Box, Heading, Text } from "@chakra-ui/react";
import ExternalLink from "@/components/common/ExternalLink";

export default function ExtraProject() {
  return (
    <Box maxW={"full"} as="section" aria-labelledby="extra">
      <Heading size={"lg"} mb={1} id="extra">
        Extra
      </Heading>
      <Text mb={6}>
        As a programmer, every once in a while I like to take a break from
        building software and indulge my passion and curiosity for the raw craft
        as well as the innate problem solving skills it requires. So, check out
        my solution for a technical and intriguing coding problem I challenged
        myself with—perhaps you may find it as satisyfing as I did:
      </Text>
      <ExternalLink
        href="https://nicoll-douglas.github.io/knights-shortest-path/"
        display="inline-block"
      >
        Knight&apos;s Shortest Path
        <Box display={{ base: "none", md: "inline" }}>
          {" "}
          | A Solution by Nicoll Douglas
        </Box>
      </ExternalLink>
    </Box>
  );
}
