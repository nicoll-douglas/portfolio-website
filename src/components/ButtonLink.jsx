import { Button } from "@chakra-ui/react";
import NextLink from "next/link";

export default function ButtonLink({ children, href, ...rest }) {
  return (
    <Button variant={"outline"} size={"lg"} as={NextLink} href={href} {...rest}>
      {children}
    </Button>
  );
}
