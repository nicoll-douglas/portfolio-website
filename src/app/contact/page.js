/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { MdEmail } from "react-icons/md";
import {
  Icon,
  Heading,
  UnorderedList,
  Text,
  useDisclosure,
  Popover,
  Button,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Box,
} from "@chakra-ui/react";
import SimpleSection from "@/components/SimpleSection";
import { motion } from "framer-motion";
import transitionProps from "@/config/transition";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect } from "react";
import ButtonLink from "@/components/ButtonLink";

export default function Contact() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const fontSize = "15px";

  function handleCopyEmail() {
    if (!isOpen) {
      onOpen();
      try {
        navigator.clipboard.writeText("dev.nicoll.douglas@gmail.com");
      } catch (err) {
        console.log(err);
      }
    }
  }

  useEffect(() => {
    if (!isOpen) return;
    const timeout = setTimeout(onClose, 2000);
    return () => clearTimeout(timeout);
  }, [isOpen]);

  return (
    <motion.div {...transitionProps}>
      <SimpleSection
        avatar={{ src: "/work-3-op.svg", w: { base: "150px", md: "240px" } }}
      >
        <Heading size={"4xl"} as={"h1"}>
          Contact Me
        </Heading>
        <Box>
          <Text mb={2}>
            Need a London-based web developer? Feel free to reach out and send
            me an email or connect with me elsewhere.
          </Text>
          <Popover isOpen={isOpen} closeOnBlur arrowShadowColor="primary.4">
            <PopoverTrigger>
              <Button
                variant={"link"}
                _active={{ color: "primary.6" }}
                leftIcon={<Icon w={6} h={6} as={MdEmail} color={"primary.5"} />}
                color={"primary.5"}
                fontSize={"xl"}
                fontWeight={"normal"}
                onClick={handleCopyEmail}
              >
                dev.nicoll.douglas@gmail.com
              </Button>
            </PopoverTrigger>
            <PopoverContent maxW={"fit-content"} bg="primary.4" borderWidth="0">
              <PopoverArrow bg="primary.4" />
              <PopoverBody borderColor={"transparent"}>
                <Text fontSize={"lg"}>Copied to clipboard!</Text>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
        <Heading size={"lg"} mt={4} mb={-4}>
          Connect
        </Heading>
        <UnorderedList
          listStyleType={"none"}
          ml={0}
          pt={3}
          display={"flex"}
          gap={5}
          flexWrap={"wrap"}
          justifyContent={{ base: "center", md: "start" }}
        >
          <ButtonLink
            href="https://www.linkedin.com/in/nicoll-douglas/"
            icon={<Icon as={FaLinkedin} h={6} w={6} color={"primary.5"} />}
            variant={"external"}
          >
            @NicollDouglas
          </ButtonLink>
          <ButtonLink
            variant={"external"}
            href={"https://github.com/nicoll-douglas"}
            icon={<Icon as={FaGithub} h={6} w={6} color={"primary.5"} />}
          >
            @nicoll-douglas
          </ButtonLink>
        </UnorderedList>
      </SimpleSection>
    </motion.div>
  );
}
