"use client";

import { Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function ButtonLink({ icon, children, href, ...rest }) {
  return (
    <Button
      variant={"outline"}
      size={"lg"}
      as={NextLink}
      href={href}
      rightIcon={<ArrowForwardIcon mt={"3px"} aria-hidden={"true"} />}
      fontSize={"xl"}
      {...rest}
    >
      {children}
    </Button>
  );
}
