"use client";

import * as Ch from "@chakra-ui/react";
import { Fragment, useMemo } from "react";
import loremBlurUrl from "@/data/loremBlurUrl";
import { useGallery } from "@/hooks";
import { Gallery } from "@/components/atomic";
import loremBoard from "../../../../public/projects/lorem/lorem-board.png";
// import loremDemo from "../../../../public/projects/lorem/lorem-demo.gif";
import loremHome from "../../../../public/projects/lorem/lorem-home.png";
import loremInApp from "../../../../public/projects/lorem/lorem-in-app.png";
import loremProfile from "../../../../public/projects/lorem/lorem-profile.png";
import loremThread from "../../../../public/projects/lorem/lorem-thread.png";

export default function LoremGallery() {
  const images = useMemo(
    () => [
      // {
      //   label: "Demo",
      //   src: loremDemo,
      // },
      {
        label: "/",
        src: loremHome,
      },
      {
        label: "/home",
        src: loremInApp,
      },
      {
        label: "/boards/*",
        src: loremBoard,
      },
      {
        label: "/threads/*",
        src: loremThread,
      },
      {
        label: "/users/*",
        src: loremProfile,
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
        {images.map(({ src, label }, index) => (
          <Fragment key={index}>
            {index === currentIndex && (
              <Ch.Fade in={true} transition={{ enter: { delay: 0.09 } }}>
                <Gallery.Img alt={label} src={src} loading="lazy" />
              </Ch.Fade>
            )}
          </Fragment>
        ))}
      </Gallery.CardBody>
    </Gallery.Card>
  );
}
