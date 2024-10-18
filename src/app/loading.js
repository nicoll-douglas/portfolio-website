"use client";

import { Spinner } from "@chakra-ui/react";
import useDelayFallback from "@/hooks/useDelayFallback";

export default function Loading() {
  const show = useDelayFallback();

  return show && <Spinner size={"lg"} color="primary.5" />;
}
