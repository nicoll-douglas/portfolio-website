import { Fade } from "@chakra-ui/react";
import {
  GalleryImg,
  GalleryCard,
  GalleryCardHeader,
  GalleryCardBody,
} from "@/components/gallery";
import mesharaBlurUrl from "@/data/mesharaBlurUrl";

export default function MesharaGallery() {
  return (
    <GalleryCard>
      <GalleryCardHeader heading={"Preview"} />
      <GalleryCardBody>
        <GalleryImg
          alt={"Meshara Homepage"}
          src={"/projects/meshara/meshara-dark.gif"}
          blurDataURL={mesharaBlurUrl}
        />
      </GalleryCardBody>
    </GalleryCard>
  );
}
