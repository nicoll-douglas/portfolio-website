import { Project, Gallery } from "@/components/atomic";
import * as B from "@/components/badges";
import mesharaPng from "../../../../public/projects/meshara/meshara-new.png";

export default function Meshara() {
  return (
    <Project.Section
      projectName={"Meshara"}
      date={"Jan 2025 - Present"}
      description={
        "A clean, modern, and performant website I am currently working on for and with Meshara. With the site we aim to uphold a smooth, state-of-the-art, and inviting UI/UX that can further enhance the brand image of the business."
      }
    >
      <Project.Links
        links={[{ name: "Staging Site", href: "https://meshara.net" }]}
      />
      <Gallery.Card>
        <Gallery.CardHeader heading={"Preview"} />
        <Gallery.CardBody>
          <Gallery.Img
            alt={"Meshara Homepage"}
            src={mesharaPng}
            loading="lazy"
          />
        </Gallery.CardBody>
      </Gallery.Card>
      <Project.TechStack>
        <B.React />
        <B.NextJs />
        <B.Node />
        <B.MongoDB />
      </Project.TechStack>
    </Project.Section>
  );
}
