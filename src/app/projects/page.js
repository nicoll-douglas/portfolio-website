"use client";

import { motion } from "framer-motion";
import transitionProps from "@/config/transition";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  ListItem,
  Spacer,
  Text,
  UnorderedList,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { MdImage } from "react-icons/md";
import LoremGallery from "@/components/LoremGallery";

function ButtonLink({ children, href }) {
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
    >
      {children}
      <ExternalLinkIcon ml={"3px"} boxSize={"18px"} mt={"1px"} />
    </Button>
  );
}

export default function Work() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <motion.div {...transitionProps}>
      <Flex gap={4} maxW={{ base: "lg", md: "4xl" }} flexDir={"column"} my={8}>
        <Heading size={"4xl"} mb={4}>
          Projects
        </Heading>
        <Box>
          <Flex alignItems={"end"}>
            <Heading size={"2xl"} color={"primary.5"}>
              Lorem
            </Heading>
            <Spacer />
            <Text color={"primary.5"} fontWeight={"bold"}>
              Jul 2024 - Oct 2024
            </Text>
          </Flex>
          <Text>
            An intuitive messaging board app where users can connect through
            dynamic discussion threads.
          </Text>
          <Flex
            gap={5}
            mt={5}
            mb={8}
            flexWrap={"wrap"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <ButtonLink
              href={"https://nicoll-douglas.github.io/lorem-frontend/"}
            >
              Live Site
            </ButtonLink>
            <ButtonLink
              href={"https://github.com/nicoll-douglas/lorem-frontend"}
            >
              Source (frontend)
            </ButtonLink>
            <ButtonLink
              href={"https://github.com/nicoll-douglas/lorem-backend"}
            >
              Source (backend)
            </ButtonLink>
          </Flex>
          <Card
            variant={"outline"}
            bg={"primary.3"}
            borderColor={"primary.5"}
            size={"sm"}
            mb={6}
          >
            <CardHeader>
              <Heading size={"sm"}>Demo</Heading>
            </CardHeader>
            <Divider borderColor={"primary.5"} />
            <CardBody>
              <Image alt="Lorem demo" src="/lorem-gif-2.gif" />
            </CardBody>
          </Card>

          <Button
            rightIcon={<Icon as={MdImage} mt={"3px"} />}
            variant={"outline"}
            mb={6}
            onClick={onOpen}
          >
            Gallery
          </Button>
          <LoremGallery onClose={onClose} isOpen={isOpen} />
          <Heading size={"md"}>Technologies:</Heading>
          <UnorderedList fontSize={"xl"} px={4} mb={6}>
            <ListItem>React (TanStack Query & Hooks)</ListItem>
            <ListItem>MongoDB (Mongoose)</ListItem>
            <ListItem>NodeJS (Express)</ListItem>
            <ListItem>Firebase/Google Cloud</ListItem>
            <ListItem>Chakra UI, Framer Motion</ListItem>
            <ListItem>Authentication (JSON Web Tokens)</ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </motion.div>
  );
}
