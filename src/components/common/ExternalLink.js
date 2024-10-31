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
      style={{ textWrap: "wrap" }}
      display={"block"}
      {...rest}
    >
      {children}
      <ExternalLinkIcon
        display={"inline"}
        mb={"3px"}
        ml={"3px"}
        boxSize={"18px"}
        aria-hidden="true"
      />
    </Button>
  );
}
