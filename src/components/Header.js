"use client";

import { Link, Box, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import useOnScroll from "@/hooks/useOnScroll";

function LinkTab({ href, children }) {
  const pathname = usePathname();

  return (
    <Link
      py={3}
      transitionProperty={"common"}
      transitionDuration={"normal"}
      _active={{ bg: "primary.4" }}
      px={{ base: 3, sm: 4 }}
      as={NextLink}
      href={href}
      marginBottom={"-2px"}
      borderBottomWidth={"2px"}
      color={pathname === href ? "primary.5" : "black"}
      borderBottomColor={pathname === href ? "primary.5" : "transparent"}
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const isScrolled = useOnScroll();

  return (
    <Box
      position={"fixed"}
      top={0}
      w={"100%"}
      left={0}
      as={"header"}
      pt={4}
      boxShadow={isScrolled ? "xl" : "none"}
      zIndex={"1000"}
      style={{ transition: "box-shadow 1s ease" }}
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
