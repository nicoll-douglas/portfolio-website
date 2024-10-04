"use client";

import { Heading, Text } from "@chakra-ui/react";
import SimpleSection from "@/components/SimpleSection";
import ButtonLink from "@/components/ButtonLink";
import { motion } from "framer-motion";
import transitionProps from "@/config/transition";
import { TabContext } from "@/components/AppLayout";
import { useContext } from "react";

export default function Home() {
  const { setTabIndex } = useContext(TabContext);

  return (
    <motion.div {...transitionProps}>
      <SimpleSection avatar={{ src: "/main-op.svg" }}>
        <Heading mb={{ base: 0, lg: 2 }}>{"Hi, I'm Nicoll"}</Heading>
        <Text>
          {
            "I'm a full-stack web developer based in London driven by my philosophy of “building as I learn, learning as I build, succeeding as I grow”. I develop efficient and robust applications for the web and have an eagerness to keep expanding my skills, not only as a developer, but as a creator and collaborator."
          }
        </Text>
        <ButtonLink
          href={"/work"}
          onClick={() => setTabIndex(1)}
          mx={{ base: "auto", md: 0 }}
        >
          View my work
        </ButtonLink>
      </SimpleSection>
    </motion.div>
  );
}
