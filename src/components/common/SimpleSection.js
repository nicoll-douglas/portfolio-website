import { Flex } from "@chakra-ui/react";
import Avatar from "./Avatar";

export default function SimpleSection({ avatar, children, ...rest }) {
  return (
    <Flex
      gap={{ base: 4, lg: 8 }}
      flexDir={{ base: "column-reverse", md: "row" }}
      maxW={{ base: "lg", md: "4xl" }}
      my={8}
      {...rest}
    >
      <Flex
        flexDir={"column"}
        gap={4}
        my={"auto"}
        alignItems={{ base: "center", md: "start" }}
        textAlign={{ base: "center", md: "left" }}
      >
        {children}
      </Flex>
      {avatar && <Avatar {...avatar} />}
    </Flex>
  );
}
