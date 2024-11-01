import {
  GalleryImg,
  GalleryCard,
  GalleryCardHeader,
  GalleryCardBody,
} from "@/components/gallery";
import { Fade } from "@chakra-ui/react";
import mesharaBlurUrl from "@/data/mesharaBlurUrl";

export default function TBPGallery() {
  return (
    <GalleryCard>
      <GalleryCardHeader heading="Frontend Preview" />
      <GalleryCardBody>
        <Fade in={true} transition={{ enter: { delay: 0.09 } }}>
          <GalleryImg
            src={"/projects/the-bridge-project/preview.png"}
            alt="Design Preview"
            blurDataURL={mesharaBlurUrl}
          />
        </Fade>
      </GalleryCardBody>
    </GalleryCard>
  );
}
