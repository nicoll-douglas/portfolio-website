import {
  GalleryImg,
  GalleryCard,
  GalleryCardHeader,
  GalleryCardBody,
} from "@/components/gallery";
import { Fade } from "@chakra-ui/react";
import theBridgeProjectBlurUrl from "@/data/theBridgeProjectBlurUrl";

export default function TBPGallery() {
  return (
    <GalleryCard>
      <GalleryCardHeader heading="Frontend Preview" />
      <GalleryCardBody>
        <Fade in={true} transition={{ enter: { delay: 0.09 } }}>
          <GalleryImg
            src={"/projects/the-bridge-project/preview.png"}
            alt="Design Preview"
            blurDataURL={theBridgeProjectBlurUrl}
          />
        </Fade>
      </GalleryCardBody>
    </GalleryCard>
  );
}
