/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function QueryScrollHandler() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id");

  function scrollTo(id, offset = 60) {
    window.scrollTo({
      top:
        document.querySelector(id).getBoundingClientRect().top -
        offset +
        window.scrollY,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    switch (projectId) {
      case "lorem":
        scrollTo("#pre-lorem-ref");
        break;
      case "meshara":
        scrollTo("#pre-meshara-ref", -9);
    }
  }, []);

  return <></>;
}
