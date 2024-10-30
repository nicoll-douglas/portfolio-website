"use client";

import { UnorderedList, Icon, Box, Heading } from "@chakra-ui/react";
import ButtonLink from "@/components/common/ButtonLink";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Socials() {
  return (
    <Box mt={5}>
      <Heading size={"lg"} mb={3}>
        Connect
      </Heading>
      <UnorderedList
        listStyleType={"none"}
        ml={0}
        display={"flex"}
        gap={5}
        flexWrap={"wrap"}
        justifyContent={{ base: "center", md: "start" }}
      >
        <ButtonLink
          href="https://www.linkedin.com/in/nicoll-douglas/"
          icon={<Icon as={FaLinkedin} h={6} w={6} color={"primary.5"} />}
          variant={"external"}
        >
          @nicoll-douglas
        </ButtonLink>
        <ButtonLink
          variant={"external"}
          href={"https://github.com/nicoll-douglas"}
          icon={<Icon as={FaGithub} h={6} w={6} color={"primary.5"} />}
        >
          @nicoll-douglas
        </ButtonLink>
      </UnorderedList>
    </Box>
  );
}
