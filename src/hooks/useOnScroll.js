import { useEffect, useState } from "react";

export default function useOnScroll() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const scrolled =
      document.body.scrollTop > 0 || document.documentElement.scrollTop > 0;
    setIsScrolled(scrolled);
  }

  return isScrolled;
}
