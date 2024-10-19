import { Fade } from "@chakra-ui/react";
import {
  GalleryImg,
  GalleryCard,
  GalleryCardHeader,
  GalleryCardBody,
} from "./gallery";
import mesharaBlurUrl from "@/data/mesharaBlurUrl";

export default function MesharaGallery() {
  return (
    <GalleryCard>
      <GalleryCardHeader heading={"Preview"} />
      <GalleryCardBody>
        <Fade in={true} transition={{ enter: { delay: 0.09 } }}>
          <GalleryImg
            alt={"Meshara Homepage"}
            src={"/projects/meshara/meshara-dark.gif"}
            blurDataURL={mesharaBlurUrl}
          />
        </Fade>
      </GalleryCardBody>
    </GalleryCard>
  );
}
