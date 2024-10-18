"use client";

import { IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export default function GalleryBtn({ type, ...rest }) {
  const Icon = type === "left" ? ChevronLeftIcon : ChevronRightIcon;
  const ariaLabel = type === "left" ? "Previous Image" : "Next Image";

  return (
    <IconButton
      icon={<Icon color={"black"} boxSize={5} aria-hidden="true" />}
      variant="ghost"
      size="xs"
      _hover={{ bg: "primary.2" }}
      _active={{ bg: "primary.4" }}
      aria-label={ariaLabel}
      {...rest}
    />
  );
}
