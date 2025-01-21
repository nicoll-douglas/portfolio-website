"use client";

import * as Ch from "@chakra-ui/react";
import { Fragment, useMemo } from "react";
import loremBlurUrl from "@/data/loremBlurUrl";
import { useGallery } from "@/hooks";
import { Gallery } from "@/components/atomic";

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
    <Gallery.Card>
      <Gallery.CardHeader heading={images[currentIndex].label} display="flex">
        <Ch.Spacer />
        <Ch.Flex align={"center"} gap={1}>
          <Gallery.Btn type={"left"} onClick={handleLeft} />
          <Gallery.Btn type={"right"} onClick={handleRight} />
        </Ch.Flex>
      </Gallery.CardHeader>
      <Gallery.CardBody>
        {images.map(({ filename, label }, index) => (
          <Fragment key={index}>
            {index === currentIndex && (
              <Ch.Fade in={true} transition={{ enter: { delay: 0.09 } }}>
                <Gallery.Img
                  alt={label}
                  src={`/projects/lorem/${filename}`}
                  blurDataURL={loremBlurUrl}
                  loading="lazy"
                  priority={false}
                />
              </Ch.Fade>
            )}
          </Fragment>
        ))}
      </Gallery.CardBody>
    </Gallery.Card>
  );
}
