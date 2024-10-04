"use client";

import {
  Image,
  Card,
  CardBody,
  Center,
  Flex,
  IconButton,
  VStack,
  HStack,
  CardHeader,
  Heading,
  Divider,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  SlideFade,
} from "@chakra-ui/react";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "@chakra-ui/icons";

export default function LoremGallery({ isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageCount = 5;

  function handleLeft() {
    if (currentIndex === 0) {
      setCurrentIndex(imageCount - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function handleRight() {
    if (currentIndex === imageCount - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW={"fit-content"} mx={4}>
        <Card
          variant={"outline"}
          bg={"primary.3"}
          borderColor={"primary.5"}
          size={"sm"}
          maxW="1024px"
        >
          <CardHeader>
            <Flex alignItems={"center"}>
              <Heading size={"sm"} color={"black"}>
                Gallery
              </Heading>
              <Spacer />
              <HStack gap={1}>
                <IconButton
                  icon={<ChevronLeftIcon boxSize={5} />}
                  variant="ghost"
                  size="xs"
                  _hover={{ bg: "primary.2" }}
                  _active={{ bg: "primary.4" }}
                  onClick={handleLeft}
                />
                <IconButton
                  icon={<ChevronRightIcon boxSize={5} />}
                  variant="ghost"
                  size="xs"
                  _hover={{ bg: "primary.2" }}
                  _active={{ bg: "primary.4" }}
                  onClick={handleRight}
                />
                <IconButton
                  icon={<CloseIcon boxSize={"10px"} />}
                  variant="ghost"
                  size="xs"
                  _hover={{ bg: "primary.2" }}
                  _active={{ bg: "primary.4" }}
                  onClick={onClose}
                />
              </HStack>
            </Flex>
          </CardHeader>
          <Divider borderColor={"primary.5"} />
          <CardBody>
            {isOpen && <Image alt="Lorem" src={`/lorem-${currentIndex}.png`} />}
          </CardBody>
        </Card>
      </ModalContent>
    </Modal>
  );
}
