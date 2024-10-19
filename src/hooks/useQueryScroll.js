/* eslint-disable react-hooks/exhaustive-deps */
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function useQueryScroll() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id");

  function scrollTo(id, offset = 68) {
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
}
