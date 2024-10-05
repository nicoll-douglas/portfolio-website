"use client";

import { Spinner } from "@chakra-ui/react";
import useDelayedFallback from "@/hooks/useDelayedFallback";

export default function Loading() {
  const show = useDelayedFallback();

  return show && <Spinner size={"lg"} color="primary.5" />;
}
