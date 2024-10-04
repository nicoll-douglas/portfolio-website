"use client";

import {
  Container,
  Tabs,
  Tab,
  TabList,
  Box,
  Center,
  TabPanels,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { createContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const TabContext = createContext();

export default function AppLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const paths = ["/", "/projects", "/about", "/contact"];
  const [tabIndex, setTabIndex] = useState(
    paths.findIndex((path) => path === pathname) ?? -1
  );

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
      <TabContext.Provider value={{ tabIndex, setTabIndex }}>
        <Tabs
          isManual
          size={"lg"}
          flex={1}
          display={"flex"}
          flexDir={"column"}
          index={tabIndex}
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
            <TabList
              maxWidth={"fit-content"}
              mx={"auto"}
              borderBottomColor={"primary.1"}
              w={"100%"}
            >
              <Tab as={NextLink} href={"/"} onClick={() => setTabIndex(0)}>
                Home
              </Tab>
              <Tab
                as={NextLink}
                href={"/projects"}
                onClick={() => setTabIndex(1)}
              >
                Projects
              </Tab>
              <Tab as={NextLink} href={"/about"} onClick={() => setTabIndex(2)}>
                About
              </Tab>
              <Tab
                as={NextLink}
                href={"/contact"}
                onClick={() => setTabIndex(3)}
              >
                Contact
              </Tab>
            </TabList>
          </Box>
          <TabPanels flex={1} display={"flex"} flexDir={"column"}>
            <Center flex={1} as="main">
              {children}
            </Center>
          </TabPanels>
        </Tabs>
      </TabContext.Provider>
    </Container>
  );
}
