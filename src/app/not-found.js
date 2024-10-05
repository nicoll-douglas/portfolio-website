"use client";

import SimpleSection from "@/components/SimpleSection";
import { Heading, Text } from "@chakra-ui/react";
import ButtonLink from "@/components/ButtonLink";
import transitionProps from "@/config/transition";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div {...transitionProps}>
      <SimpleSection
        avatar={{ src: "/not-found-op.svg", w: { base: "250px", md: "350px" } }}
      >
        <Heading mx={{ base: "auto", md: 0 }} as={"h1"} size={"4xl"}>
          Not Found
        </Heading>
        <Text align={{ base: "center", md: "left" }}>
          {"The page you're looking for could not be found."}
        </Text>
        <ButtonLink href={"/"} mx={{ base: "auto", md: 0 }}>
          Return to home
        </ButtonLink>
      </SimpleSection>
    </motion.div>
  );
}
