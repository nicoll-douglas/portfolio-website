"use client";

import { Fade, Flex, Spacer } from "@chakra-ui/react";
import { Fragment, useMemo } from "react";
import loremBlurUrl from "@/data/loremBlurUrl";
import {
  GalleryImg,
  GalleryCard,
  GalleryBtn,
  GalleryCardHeader,
  GalleryCardBody,
} from "@/components/gallery";
import useGallery from "@/hooks/useGallery";

export default function LoremGallery() {
  const images = useMemo(
    () => [
      {
        label: "Demo",
        filename: "lorem-demo.gif",
      },
      {
        label: "Homepage",
        filename: "lorem-home.png",
      },
      {
        label: "In App",
        filename: "lorem-in-app.png",
      },
      {
        label: "Board",
        filename: "lorem-board.png",
      },
      {
        label: "Thread",
        filename: "lorem-thread.png",
      },
      {
        label: "User Profile",
        filename: "lorem-profile.png",
      },
    ],
    []
  );
  const { handleLeft, handleRight, currentIndex } = useGallery(images.length);

  return (
    <GalleryCard>
      <GalleryCardHeader heading={images[currentIndex].label} display="flex">
        <Spacer />
        <Flex align={"center"} gap={1}>
          <GalleryBtn type={"left"} onClick={handleLeft} />
          <GalleryBtn type={"right"} onClick={handleRight} />
        </Flex>
      </GalleryCardHeader>
      <GalleryCardBody>
        {images.map(({ filename, label }, index) => (
          <Fragment key={index}>
            {index === currentIndex && (
              <Fade in={true} transition={{ enter: { delay: 0.09 } }}>
                <GalleryImg
                  alt={label}
                  src={`/projects/lorem/${filename}`}
                  blurDataURL={loremBlurUrl}
                  loading="lazy"
                  priority={false}
                />
              </Fade>
            )}
          </Fragment>
        ))}
      </GalleryCardBody>
    </GalleryCard>
  );
}
