import { Gallery } from "@/components/atomic";
import mesharaBlurUrl from "@/data/mesharaBlurUrl";

export default function MesharaGallery() {
  return (
    <Gallery.Card>
      <Gallery.CardHeader heading={"Preview"} />
      <Gallery.CardBody>
        <Gallery.Img
          alt={"Meshara Homepage"}
          src={"/projects/meshara/meshara-dark.gif"}
          blurDataURL={mesharaBlurUrl}
        />
      </Gallery.CardBody>
    </Gallery.Card>
  );
}
