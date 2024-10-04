"use client";

import { Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Loading() {
  const [show, setShow] = useState();

  useEffect(() => {
    const timeout = setTimeout(show, 400, true);
    return () => clearTimeout(timeout);
  }, []);

  return show && <Spinner size={"lg"} color="primary.5" />;
}
