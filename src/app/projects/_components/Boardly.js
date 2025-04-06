import { Project, Gallery } from "@/components/atomic";
import boardlyBlurUrl from "@/data/boardlyBlurUrl";
import * as B from "@/components/badges";
import demoGif from "../../../../public/projects/boardly/demo.gif";

export default function Boardly() {
  return (
    <Project.Section
      projectName={"Boardly"}
      date={"Jun 2024 - Sep 2024"}
      description={
        "A full-stack messaging board app where users can create accounts, customise profiles, and interact via threads on different topic-based messaging boards; all the while providing a clean, intuitive, responsive, and accessible user experience. This was one of the first major projects I worked on and it was very much a great learning experience for me."
      }
    >
      <Project.Links
        links={[
          {
            name: "Demo Site",
            href: "https://demo.boardly.nicolldouglas.dev",
          },
          {
            name: "Source (frontend)",
            href: "https://github.com/nicoll-douglas/boardly-frontend",
          },
          {
            name: "Source (backend)",
            href: "https://github.com/nicoll-douglas/boardly-backend",
          },
        ]}
      />
      <Gallery.Card>
        <Gallery.CardHeader heading={"Demo"} />
        <Gallery.CardBody>
          <Gallery.Img
            alt={"Boardly Demo"}
            src={demoGif}
            loading="lazy"
            blurDataURL={boardlyBlurUrl}
            unoptimized
          />
        </Gallery.CardBody>
      </Gallery.Card>
      <Project.Features
        features={[
          "Secure token-based user authentication.",
          "A dynamic and responsive frontend driven by React and Chakra UI.",
          "Robust data persistence and CRUD functionality supported by Node.js and MongoDB.",
          "User-friendly profile customisation and secure account management.",
        ]}
      />
      <Project.TechStack>
        <B.JavaScript />
        <B.React />
        <B.ChakraUi />
        <B.Node />
        <B.Express />
        <B.MongoDB />
        <B.Firebase />
      </Project.TechStack>
    </Project.Section>
  );
}
