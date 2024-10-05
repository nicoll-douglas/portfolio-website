"use client";

import { Container, Link, Box, Center, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

export default function AppLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const scrolled =
      document.body.scrollTop > 0 || document.documentElement.scrollTop > 0;
    setIsScrolled(scrolled);
  }

  return (
    <Container
      minHeight={"100dvh"}
      maxWidth={"container.xl"}
      display={"flex"}
      flexDir={"column"}
      px={{ base: 4, md: 8 }}
      pt={{ base: 24, md: 28 }}
      pb={{ base: 14, md: 28 }}
    >
      <Box
        position={"fixed"}
        top={0}
        w={"100dvw"}
        left={0}
        as={"header"}
        pt={4}
        boxShadow={isScrolled ? "xl" : "none"}
        zIndex={"1000"}
        style={{
          transition: "box-shadow 1s ease",
        }}
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
      <Center flex={1} as="main">
        {children}
      </Center>
    </Container>
  );
}
