/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Loading() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 350);
    return () => clearTimeout(timeout);
  }, []);

  return show && <Spinner size={"lg"} color="primary.5" />;
}
