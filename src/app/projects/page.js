"use client";

import { motion } from "framer-motion";
import transitionProps from "@/config/transition";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  ListItem,
  ScaleFade,
  Spacer,
  Spinner,
  Text,
  UnorderedList,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { MdImage } from "react-icons/md";
import LoremGallery from "@/components/LoremGallery";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import blurDataUrl from "@/constants/blurDataURL";

function ButtonLink({ children, href, ...rest }) {
  return (
    <Button
      as={Link}
      href={href}
      variant={"link"}
      target="_blank"
      _active={{ color: "primary.6" }}
      fontSize={"xl"}
      color={"primary.5"}
      fontWeight={"normal"}
      {...rest}
    >
      {children}
      <ExternalLinkIcon ml={"3px"} boxSize={"18px"} />
    </Button>
  );
}

export default function Work() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <motion.div {...transitionProps}>
      <Flex maxW={{ base: "lg", md: "4xl" }} flexDir={"column"} my={8}>
        <Heading size={"4xl"} as={"h1"} maxW={"fit-content"}>
          Projects
        </Heading>
        <Box py={12} as="section" aria-labelledby="lorem">
          <Flex alignItems={"end"}>
            <Heading size={"2xl"} id="lorem">
              Lorem
            </Heading>
            <Spacer />
            <Text color={"primary.5"}>Jul 2024 - Oct 2024</Text>
          </Flex>
          <Text>
            A messaging board app where users can connect via user-created
            boards, threads and replies. All the while providing a clean,
            intuitive, responsive and accessible user experience.
          </Text>
          <UnorderedList
            display={"flex"}
            gap={5}
            ml={0}
            mt={3}
            mb={8}
            flexWrap={"wrap"}
            alignItems={"center"}
            justifyContent={"center"}
            listStyleType={"none"}
            aria-label="Project Links"
          >
            <ListItem>
              <ButtonLink
                href={"https://nicoll-douglas.github.io/lorem-frontend/"}
              >
                Live Site
              </ButtonLink>
            </ListItem>
            <ListItem>
              <ButtonLink
                href={"https://github.com/nicoll-douglas/lorem-frontend"}
              >
                Source (frontend)
              </ButtonLink>
            </ListItem>
            <ListItem>
              <ButtonLink
                href={"https://github.com/nicoll-douglas/lorem-backend"}
              >
                Source (backend)
              </ButtonLink>
            </ListItem>
            <ListItem>
              <Button
                rightIcon={<Icon as={MdImage} mt={"3px"} />}
                variant={"outline"}
                onClick={onOpen}
              >
                Gallery
              </Button>
            </ListItem>
          </UnorderedList>
          <Card
            variant={"outline"}
            bg={"primary.3"}
            borderColor={"primary.5"}
            size={"sm"}
            mb={6}
          >
            <CardHeader>
              <Heading size={"md"} color={"black"}>
                Demo
              </Heading>
            </CardHeader>
            <Divider borderColor={"primary.5"} opacity={1} />
            <CardBody>
              <ScaleFade in={true}>
                <Image
                  alt="Lorem demo"
                  src="/lorem-gif-2.gif"
                  width={1440}
                  height={810}
                  priority={true}
                  style={{ borderRadius: "3px" }}
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                />
              </ScaleFade>
            </CardBody>
          </Card>
          <LoremGallery onClose={onClose} isOpen={isOpen} />
          <Heading size={"md"}>Technologies:</Heading>
          <UnorderedList fontSize={"xl"} px={4}>
            <ListItem>React (TanStack Query & Hooks)</ListItem>
            <ListItem>MongoDB (Mongoose)</ListItem>
            <ListItem>NodeJS (Express)</ListItem>
            <ListItem>Firebase/Google Cloud</ListItem>
            <ListItem>Chakra UI, Framer Motion</ListItem>
            <ListItem>Cypress (E2E Testing)</ListItem>
            <ListItem>JSON Web Tokens</ListItem>
          </UnorderedList>
        </Box>
        <Divider borderColor={"primary.5"} />
        <Box py={12} maxW={"full"} as="section" aria-labelledby="extra">
          <Heading size={"lg"} mb={1} id="extra">
            Extra
          </Heading>
          <Text mb={6}>
            As a programmer, every once in a while I like to take a break from
            building software and indulge my passion and curiosity for the raw
            craft as well as the innate problem solving skills it requires. So
            check out my solution for an intriguing Data Structures & Algorithms
            coding problem I challenged myself with, perhaps you may find it as
            satisyfing as I did:
          </Text>
          <ButtonLink
            href="https://nicoll-douglas.github.io/knights-shortest-path/"
            display="inline-block"
          >
            Knight&apos;s Shortest Path
            <Box display={{ base: "none", md: "inline" }}>
              {" "}
              | A Solution by Nicoll Douglas
            </Box>
          </ButtonLink>
        </Box>
      </Flex>
    </motion.div>
  );
}
