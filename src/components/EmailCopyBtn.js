/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { MdEmail } from "react-icons/md";
import {
  Popover,
  PopoverTrigger,
  Button,
  Icon,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";

export default function EmailCopyBtn() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const email = "dev.nicoll.douglas@gmail.com";

  function handleCopyEmail() {
    if (!isOpen) {
      onOpen();
      try {
        navigator.clipboard.writeText(email);
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
          {email}
        </Button>
      </PopoverTrigger>
      <PopoverContent maxW={"fit-content"} bg="primary.4" borderWidth="0">
        <PopoverArrow bg="primary.4" />
        <PopoverBody borderColor={"transparent"}>
          <Text fontSize={"lg"}>Copied to clipboard!</Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
