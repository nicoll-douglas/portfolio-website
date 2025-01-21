"use client";

import { Box, Flex } from "@chakra-ui/react";
import { useOnScroll } from "@/hooks";
import LinkTab from "./LinkTab";

export default function Header() {
  const isScrolled = useOnScroll();

  return (
    <Box
      position={"fixed"}
      top={0}
      w={"100dvw"}
      left={0}
      as={"header"}
      pt={4}
      boxShadow={isScrolled ? "xl" : "none"}
      zIndex={"1000"}
      style={{ transition: "box-shadow 750ms ease" }}
    >
      <Flex
        borderBottomColor={"primary.1"}
        borderBottomWidth={2}
        mx={"auto"}
        maxW={"fit-content"}
        w={"100%"}
        fontSize={"lg"}
        minH={"fit-content"}
        as={"nav"}
      >
        <LinkTab href={"/"}>Home</LinkTab>
        <LinkTab href={"/projects"}>Projects</LinkTab>
        <LinkTab href={"/about"}>About</LinkTab>
        <LinkTab href={"/contact"}>Contact</LinkTab>
      </Flex>
    </Box>
  );
}
