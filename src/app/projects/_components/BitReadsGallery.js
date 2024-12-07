import {
  GalleryImg,
  GalleryCard,
  GalleryCardHeader,
  GalleryCardBody,
} from "@/components/gallery";
import bitreadsBlurUrl from "@/data/bitreadsBlurUrl";

export default function BitReadsGallery() {
  return (
    <GalleryCard>
      <GalleryCardHeader heading={"Preview"} />
      <GalleryCardBody>
        <GalleryImg
          alt={"BitReads Preview"}
          src={"/projects/bitreads/bitreads-preview.png"}
          blurDataURL={bitreadsBlurUrl}
        />
      </GalleryCardBody>
    </GalleryCard>
  );
}
