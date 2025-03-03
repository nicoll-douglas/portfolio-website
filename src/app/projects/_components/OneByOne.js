import { Project, Gallery } from "@/components/atomic";
import * as B from "@/components/badges";
import oneByOneImage from "../../../../public/projects/oneByOne/homepage.png";

export default function OneByOne() {
  return (
    <Project.Section
      projectName={"1x1 Web Fundamentals"}
      date={"Jan 2025 - Feb 2025"}
      description={
        "An educational website where I regularly post tutorials on web development fundamentals. It features my own custom MVC implementation using PHP 8 which facilitates a robust and scalable backend throughout development and production."
      }
    >
      <Project.Links
        links={[
          {
            name: "Live Site",
            href: "https://1x1.nicolldouglas.dev",
          },
          {
            name: "Source",
            href: "https://github.com/nicoll-douglas/1x1-web-fundamentals",
          },
        ]}
      />
      <Gallery.Card>
        <Gallery.CardHeader heading={"Preview"} />
        <Gallery.CardBody>
          <Gallery.Img
            alt={"1x1 Web Fundamentals Homepage"}
            src={oneByOneImage}
            priority={true}
          />
        </Gallery.CardBody>
      </Gallery.Card>
      <Project.Features
        features={[
          "OAuth integration supporting secure authentication.",
          "An accessible, responsive, and SEO-friendly user interface.",
          "Deployed on a VPS for full control and project scalability.",
        ]}
      />
      <Project.TechStack>
        <B.HTML />
        <B.CSS />
        <B.JavaScript />
        <B.PHP />
        <B.MySQL />
      </Project.TechStack>
    </Project.Section>
  );
}
