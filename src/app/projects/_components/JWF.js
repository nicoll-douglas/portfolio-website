import { Project, Gallery } from "@/components/atomic";
import jwfBlurUrl from "@/data/jwfBlurUrl";
import * as B from "@/components/badges";
import jwfImage from "../../../../public/projects/jwf/homepage.png";

export default function JWF() {
  return (
    <Project.Section
      projectName={"Jiggy's Web Fundamentals"}
      date={"Jan 2025 - Feb 2025"}
      description={
        "An educational website where I regularly post tutorials on web development fundamentals. It features my own custom MVC implementation using PHP 8 which facilitates a robust and scalable backend throughout development and production."
      }
    >
      <Project.Links
        links={[
          {
            name: "Live Site",
            href: "https://jwf.nicolldouglas.dev",
          },
          {
            name: "Source",
            href: "https://github.com/nicoll-douglas/jiggys-web-fundamentals",
          },
        ]}
      />
      <Gallery.Card>
        <Gallery.CardHeader heading={"Preview"} />
        <Gallery.CardBody>
          <Gallery.Img
            alt={"Jiggy's Web Fundamentals Homepage"}
            src={jwfImage}
            blurDataURL={jwfBlurUrl}
            priority={true}
          />
        </Gallery.CardBody>
      </Gallery.Card>
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
