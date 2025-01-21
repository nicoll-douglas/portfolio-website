import { Card as ChakraCard } from "@chakra-ui/react";

export default function Card({ children, ...rest }) {
  return (
    <ChakraCard
      variant={"outline"}
      bg={"primary.3"}
      borderColor={"primary.5"}
      overflow={"hidden"}
      size={"sm"}
      mt={{ base: 10, md: 8 }}
      mb={10}
      as={"figure"}
      {...rest}
    >
      {children}
    </ChakraCard>
  );
}
