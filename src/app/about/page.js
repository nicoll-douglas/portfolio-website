"use client";

import { Heading, Text, UnorderedList, ListItem, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import transitionProps from "@/config/transition";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress } from "react-icons/si";
import SimpleSection from "@/components/SimpleSection";
import StaticListItem from "@/components/StaticListItem";

export default function About() {
  return (
    <motion.div {...transitionProps}>
      <SimpleSection
        avatar={{ src: "/work-1-op.svg", w: { base: "150px", md: "250px" } }}
      >
        <Heading size={"4xl"} as={"h1"}>
          About
        </Heading>
        <Text>
          {
            "Born and raised in London, I've become a passionate 21 year old developer with a strong foundation in both front-end and back-end technologies. With expertise in JavaScript, React, Node amongst many others, I thrive on building dynamic, user-friendly web applications that deliver seamless experiences."
          }
        </Text>
        <Text>
          {
            "My approach combines a strong dedication for continuous learning with a keen mind for creative coding and robust problem-solving, enhanced by my previous backgrounds in art and maths."
          }
        </Text>
        <Heading size={"lg"} mb={-4} mt={6}>
          Core Skills
        </Heading>
        <UnorderedList
          listStyleType={"none"}
          ml={0}
          pt={3}
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
      </SimpleSection>
    </motion.div>
  );
}
