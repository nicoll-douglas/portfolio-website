"use client";

import { Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";

export default function ExternalLink({ children, href, ...rest }) {
  return (
    <Button
      as={Link}
      href={href}
      variant={"link"}
      target="_blank"
      _active={{ color: "primary.6" }}
      fontSize={"xl"}
      color={"primary.5"}
      fontWeight={"normal"}
      {...rest}
    >
      {children}
      <ExternalLinkIcon ml={"3px"} boxSize={"18px"} aria-hidden="true" />
    </Button>
  );
}
