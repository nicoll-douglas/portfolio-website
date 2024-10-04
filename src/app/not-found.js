"use client";

import SimpleSection from "@/components/SimpleSection";
import { Heading, Text } from "@chakra-ui/react";
import ButtonLink from "@/components/ButtonLink";
import transitionProps from "@/config/transition";
import { motion } from "framer-motion";
import { useContext } from "react";
import { TabContext } from "@/components/AppLayout";

export default function NotFound() {
  const { setTabIndex } = useContext(TabContext);

  return (
    <motion.div {...transitionProps}>
      <SimpleSection
        avatar={{ src: "/not-found-op.svg", w: { base: "250px", md: "350px" } }}
      >
        <Heading mx={{ base: "auto", md: 0 }}>Not Found</Heading>
        <Text align={{ base: "center", md: "left" }}>
          {"The page you're looking for could not be found."}
        </Text>
        <ButtonLink
          href={"/"}
          onClick={() => setTabIndex(0)}
          mx={{ base: "auto", md: 0 }}
        >
          Return to home
        </ButtonLink>
      </SimpleSection>
    </motion.div>
  );
}
