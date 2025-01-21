import { Project } from "@/components/atomic";
import LoremGallery from "./LoremGallery";
import * as B from "@/components/badges";

export default function Lorem() {
  return (
    <Project.Section
      projectName={"Lorem"}
      date="Jul 2024 - Oct 2024"
      description={
        "A messaging board app where users can create accounts, customise profiles, and interact via threads on different topic-based messaging boards; all the while providing a clean, intuitive, responsive and accessible user experience."
      }
    >
      <Project.Links
        links={[
          {
            name: "Live Site / Try Demo",
            href: "https://lorem.nicolldouglas.dev",
          },
          {
            name: "Source (frontend)",
            href: "https://github.com/nicoll-douglas/lorem-frontend",
          },
          {
            name: "Source (backend)",
            href: "https://github.com/nicoll-douglas/lorem-backend",
          },
        ]}
      />
      <LoremGallery />
      <Project.TechStack>
        <B.React />
        <B.ChakraUi />
        <B.Node />
        <B.Express />
        <B.MongoDB />
      </Project.TechStack>
    </Project.Section>
  );
}
