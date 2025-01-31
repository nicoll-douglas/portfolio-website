import { Project, Gallery } from "@/components/atomic";
import mesharaBlurUrl from "@/data/mesharaBlurUrl";
import * as B from "@/components/badges";
import mesharaWebp from "../../../../public/projects/meshara/meshara-dark.webp";

export default function Meshara() {
  return (
    <Project.Section
      projectName={"Meshara"}
      date={"Oct 2024"}
      description={
        "A clean, modern and performant website built for a freelance client, focused on a smooth and state-of-the-art UI/UX. I actively honed my client-developer communication skills, ensuring consistent updates and collaborative feedback throughout the project in order to align with the client's vision."
      }
    >
      <Project.Links
        links={[
          {
            name: "Live Site",
            href: "https://meshara.net",
          },
          {
            name: "Source",
            href: "https://github.com/nicoll-douglas/meshara-website",
          },
        ]}
      />
      <Gallery.Card>
        <Gallery.CardHeader heading={"Preview"} />
        <Gallery.CardBody>
          <Gallery.Img
            alt={"Meshara Homepage"}
            src={mesharaWebp}
            loading="lazy"
            blurDataURL={mesharaBlurUrl}
            unoptimized
          />
        </Gallery.CardBody>
      </Gallery.Card>
      <Project.TechStack>
        <B.React />
        <B.NextJs />
      </Project.TechStack>
    </Project.Section>
  );
}
