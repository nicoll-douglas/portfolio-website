import { Heading } from "@chakra-ui/react";

export default function SmallHeading({ children, ...rest }) {
  return (
    <Heading size={"lg"} fontSize={"24px"} as={"h3"} {...rest}>
      {children}
    </Heading>
  );
}
