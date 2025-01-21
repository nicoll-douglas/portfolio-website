import {
  CardHeader as ChakraCardHeader,
  Heading,
  Divider,
} from "@chakra-ui/react";

export default function CardHeader({ heading, children, ...rest }) {
  return (
    <>
      <ChakraCardHeader {...rest}>
        <Heading
          size={"md"}
          color={"black"}
          maxW={"fit-content"}
          as="figcaption"
        >
          {heading}
        </Heading>
        {children}
      </ChakraCardHeader>
      <Divider borderColor={"primary.5"} opacity={1} />
    </>
  );
}
