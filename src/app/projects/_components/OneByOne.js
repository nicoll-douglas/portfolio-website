import { Project, Gallery } from "@/components/atomic";
import * as B from "@/components/badges";
import oneByOneImage from "../../../../public/projects/oneByOne/homepage.png";

export default function OneByOne() {
  return (
    <Project.Section
      projectName={"1x1 Web Fundamentals"}
      date={"Jan 2025 - Feb 2025"}
      description={
        "A simple and cleanly architected educational website where I regularly post tutorials on web development fundamentals. It features my own custom MVC implementation using PHP 8 which facilitates a robust and scalable backend throughout development and production, as well as serving as an example to users and learners."
      }
    >
      <Project.Links
        links={[
          {
            name: "Production Site",
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
          "OAuth integration for secure authentication.",
          "An accessible, responsive, and user-friendly user interface.",
          "Deployment on a VPS for full developer control and project scalability.",
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
