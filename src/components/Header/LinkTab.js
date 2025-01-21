"use client";

import { usePathname } from "next/navigation";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function LinkTab({ href, children }) {
  const pathname = usePathname();

  return (
    <Link
      py={3}
      transitionProperty={"common"}
      transitionDuration={"normal"}
      _active={{ bg: "primary.4" }}
      px={{ base: 3, sm: 4 }}
      as={NextLink}
      href={href}
      marginBottom={"-2px"}
      borderBottomWidth={"2px"}
      color={pathname === href ? "primary.5" : "black"}
      borderBottomColor={pathname === href ? "primary.5" : "transparent"}
    >
      {children}
    </Link>
  );
}
