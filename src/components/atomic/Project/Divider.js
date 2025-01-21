import { Divider as ChakraDivider } from "@chakra-ui/react";

export default function Divider(props) {
  return (
    <ChakraDivider
      my={{ base: 6, md: 10 }}
      borderColor={"primary.5"}
      opacity={1}
      {...props}
    />
  );
}
