"use client";

import StaticListItem from "./StaticListItem";
import { Box, Heading, UnorderedList } from "@chakra-ui/react";
import { SiJavascript, SiExpress, SiMongodb } from "react-icons/si";
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
        <StaticListItem icon={SiJavascript}>JavaScript</StaticListItem>
        <StaticListItem icon={FaReact}>React</StaticListItem>
        <StaticListItem icon={FaNodeJs}>NodeJS</StaticListItem>
        <StaticListItem icon={SiExpress}>ExpressJS</StaticListItem>
        <StaticListItem icon={SiMongodb}>MongoDB</StaticListItem>
      </UnorderedList>
    </Box>
  );
}
