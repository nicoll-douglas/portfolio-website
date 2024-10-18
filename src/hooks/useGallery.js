import { useState } from "react";

export default function useGallery(imageCount) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleLeft() {
    if (currentIndex === 0) {
      setCurrentIndex(imageCount - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function handleRight() {
    if (currentIndex === imageCount - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  return { handleLeft, handleRight, currentIndex, imageCount };
}
