import { Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function ButtonLink({ variant, icon, children, href, ...rest }) {
  if (variant === "external") {
    return (
      <Button
        variant={"link"}
        as={Link}
        target="_blank"
        _active={{ color: "primary.6" }}
        href={href}
        leftIcon={icon}
        fontSize={"xl"}
        color={"primary.5"}
        fontWeight={"normal"}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      variant={"outline"}
      size={"lg"}
      as={NextLink}
      href={href}
      fontSize={"xl"}
      {...rest}
    >
      {children}
    </Button>
  );
}
