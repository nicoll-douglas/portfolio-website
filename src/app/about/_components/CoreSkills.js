"use client";

import StaticListItem from "@/components/common/StaticListItem";
import { Box, Heading, UnorderedList } from "@chakra-ui/react";
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

export default function CoreSkills() {
  return (
    <Box mt={6}>
      <Heading size={"lg"} mb={3}>
        Core Skills
      </Heading>
      <UnorderedList
        listStyleType={"none"}
        ml={0}
        display={"flex"}
        gap={5}
        flexWrap={"wrap"}
        justifyContent={{ base: "center", md: "start" }}
      >
        <StaticListItem icon={SiTypescript}>TypeScript</StaticListItem>
        <StaticListItem icon={FaReact}>React</StaticListItem>
        <StaticListItem icon={FaNodeJs}>Node.js</StaticListItem>
        <StaticListItem icon={SiExpress}>ExpressJS</StaticListItem>
        <StaticListItem icon={SiMongodb}>MongoDB</StaticListItem>
      </UnorderedList>
    </Box>
  );
}
