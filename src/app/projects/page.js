import { Flex, Heading } from "@chakra-ui/react";
import LoremGallery from "@/components/LoremGallery";
import PageTransition from "@/components/common/PageTransition";
import TechList from "@/components/common/TechList";
import {
  ProjectDivider,
  ProjectSection,
  ProjectLinks,
} from "@/components/project";
import MesharaGallery from "@/components/MesharaGallery";
import ExtraProject from "@/components/ExtraProject";

export const metadata = {
  title: "Nicoll Douglas | Projects",
  description: "Web development projects by Nicoll Douglas.",
};

export default function Work() {
  return (
    <PageTransition>
      <Flex maxW={{ base: "lg", md: "4xl" }} flexDir={"column"} mt={8}>
        <Heading size={"4xl"} as={"h1"} maxW={"fit-content"} mb={"12"}>
          Projects
        </Heading>
        <ProjectSection
          projectName={"Meshara"}
          date={"Sep 2024 - Oct 2024"}
          description={
            "Clean, modern and performant website built for a freelance client, focused on a seamless and state of the art UI/UX."
          }
        >
          <ProjectLinks
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
          <MesharaGallery />
          <TechList list={["NextJS", "RadixUI"]} />
        </ProjectSection>
        <ProjectDivider />
        <ProjectSection
          projectName={"Lorem"}
          date="Jul 2024 - Oct 2024"
          description={
            "A messaging board app where users can connect via user-created boards, threads and replies. All the while providing a clean, intuitive, responsive and accessible user experience."
          }
        >
          <ProjectLinks
            links={[
              {
                name: "Live Site",
                href: "https://nicoll-douglas.github.io/lorem-frontend/",
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
          <TechList
            list={[
              "React (TanStack Query & Hooks)",
              "MongoDB (Mongoose)",
              "NodeJS (Express)",
              "Firebase/Google Cloud",
              "Chakra UI, Framer Motion",
              "Cypress (E2E Testing)",
            ]}
          />
        </ProjectSection>
        <ProjectDivider />
        <ExtraProject />
      </Flex>
    </PageTransition>
  );
}
