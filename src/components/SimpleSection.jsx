import { Flex } from "@chakra-ui/react";
import Avatar from "./Avatar";

export default function SimpleSection({ avatar, children }) {
  return (
    <Flex
      gap={{ base: 4, lg: 8 }}
      flexDir={{ base: "column-reverse", md: "row" }}
    >
      <Flex
        flexDir={"column"}
        gap={4}
        my={"auto"}
        maxW={"xl"}
        alignItems={{ base: "center", md: "start" }}
        textAlign={{ base: "center", md: "left" }}
      >
        {children}
      </Flex>
      {avatar && <Avatar {...avatar} />}
    </Flex>
  );
}
