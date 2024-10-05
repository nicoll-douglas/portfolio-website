"use client";

import {
  Card,
  CardBody,
  Flex,
  IconButton,
  HStack,
  CardHeader,
  Heading,
  Divider,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  Fade,
} from "@chakra-ui/react";
import { useState, Fragment } from "react";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "@chakra-ui/icons";
import blurDataUrl from "@/constants/blurDataURL";
import Image from "next/image";

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
              <Heading size={"md"} color={"black"}>
                Gallery
              </Heading>
              <Spacer />
              <HStack gap={1}>
                <IconButton
                  icon={<ChevronLeftIcon color={"black"} boxSize={5} />}
                  variant="ghost"
                  size="xs"
                  _hover={{ bg: "primary.2" }}
                  _active={{ bg: "primary.4" }}
                  onClick={handleLeft}
                  aria-label="Previous image"
                />
                <IconButton
                  icon={<ChevronRightIcon color={"black"} boxSize={5} />}
                  variant="ghost"
                  size="xs"
                  _hover={{ bg: "primary.2" }}
                  _active={{ bg: "primary.4" }}
                  onClick={handleRight}
                  aria-label="Next image"
                />
                <IconButton
                  icon={<CloseIcon color={"black"} boxSize={"10px"} />}
                  variant="ghost"
                  size="xs"
                  _hover={{ bg: "primary.2" }}
                  _active={{ bg: "primary.4" }}
                  onClick={onClose}
                  aria-label="Close modal"
                />
              </HStack>
            </Flex>
          </CardHeader>
          <Divider opacity={1} borderColor={"primary.5"} />
          <CardBody>
            {Array.from({ length: imageCount }).map((_, index) => (
              <Fragment key={index}>
                {index === currentIndex && (
                  <Fade in={true} transition={{ enter: { delay: 0.09 } }}>
                    <Image
                      alt="Lorem"
                      src={`/lorem-${index}.png`}
                      width={1440}
                      height={810}
                      placeholder="blur"
                      blurDataURL={blurDataUrl}
                      loading="lazy"
                      style={{ borderRadius: "3px" }}
                    />
                  </Fade>
                )}
              </Fragment>
            ))}
          </CardBody>
        </Card>
      </ModalContent>
    </Modal>
  );
}
