import { CardBody as ChakraCardBody } from "@chakra-ui/react";

export default function CardBody({ children }) {
  return <ChakraCardBody p={{ base: 0, md: 3 }}>{children}</ChakraCardBody>;
}
