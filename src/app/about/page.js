"use client";

import { Heading, Text, UnorderedList, ListItem, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import transitionProps from "@/config/transition";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress } from "react-icons/si";
import SimpleSection from "@/components/SimpleSection";

export default function About() {
  return (
    <motion.div {...transitionProps}>
      <SimpleSection
        avatar={{ src: "/work-1-op.svg", w: { base: "150px", md: "250px" } }}
      >
        <Heading>About...</Heading>
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
        <Text>{"I also like to code in Java sometimes."}</Text>
        <Heading size={"lg"} mb={-4} mt={4}>
          Core Skills
        </Heading>
        <UnorderedList
          listStyleType={"none"}
          ml={0}
          pt={3}
          display={"flex"}
          gap={5}
          fontSize={"lg"}
          flexWrap={"wrap"}
          justifyContent={{ base: "center", md: "start" }}
        >
          <ListItem display={"flex"} alignItems={"center"} color={"primary.5"}>
            <Icon w={6} h={6} as={SiJavascript} mr={1} color={"primary.5"} />
            JavaScript
          </ListItem>
          <ListItem display={"flex"} alignItems={"center"} color={"primary.5"}>
            <Icon as={FaReact} h={6} w={6} mr={1} color={"primary.5"} />
            React
          </ListItem>
          <ListItem display={"flex"} alignItems={"center"} color={"primary.5"}>
            <Icon as={FaNodeJs} h={6} w={6} mr={1} color={"primary.5"} />
            NodeJS
          </ListItem>
          <ListItem display={"flex"} alignItems={"center"} color={"primary.5"}>
            <Icon as={SiExpress} h={6} w={6} mr={1} color={"primary.5"} />
            ExpressJS
          </ListItem>
          <ListItem display={"flex"} alignItems={"center"} color={"primary.5"}>
            <Icon as={SiMongodb} h={6} w={6} mr={1} color={"primary.5"} />
            MongoDB
          </ListItem>
        </UnorderedList>
      </SimpleSection>
    </motion.div>
  );
}
