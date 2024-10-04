"use client";

import { MdEmail } from "react-icons/md";
import {
  Icon,
  Heading,
  UnorderedList,
  ListItem,
  Link,
  TabPanel,
} from "@chakra-ui/react";
import SimpleSection from "@/components/SimpleSection";
import { motion } from "framer-motion";
import transitionProps from "@/config/transition";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.div {...transitionProps}>
      <SimpleSection
        avatar={{ src: "/work-3-op.svg", w: { base: "150px", md: "240px" } }}
      >
        <Heading mb={{ base: 2, lg: 6 }}>Thanks for reaching out</Heading>
        <UnorderedList
          listStyleType={"none"}
          ml={0}
          display={"flex"}
          flexDir={"column"}
          gap={5}
          fontSize={"lg"}
          alignItems={{ base: "center", md: "start" }}
        >
          <ListItem color={"primary.5"}>
            <Link
              display={"flex"}
              alignItems={"center"}
              href="mailto:dev.nicoll.douglas@gmail.com"
            >
              <Icon w={6} h={6} as={MdEmail} mr={1} color={"primary.5"} />
              dev.nicoll.douglas@gmail.com
            </Link>
          </ListItem>
          <ListItem color={"primary.5"}>
            <Link
              display={"flex"}
              alignItems={"center"}
              href="https://www.linkedin.com/in/nicoll-douglas-135624291/"
              target="_blank"
            >
              <Icon as={FaLinkedin} h={6} w={6} mr={1} color={"primary.5"} />
              @NicollDouglas
            </Link>
          </ListItem>
        </UnorderedList>
      </SimpleSection>
    </motion.div>
  );
}
