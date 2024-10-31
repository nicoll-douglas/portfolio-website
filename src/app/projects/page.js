import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import PageTransition from "@/components/common/PageTransition";
import TechList from "@/components/common/TechList";
import {
  ProjectDivider,
  ProjectSection,
  ProjectLinks,
} from "@/components/project";
import ExtraProject from "./_components/ExtraProject";
import QueryScrollHandler from "./_components/QueryScrollHandler";
import LoremGallery from "./_components/LoremGallery";
import MesharaGallery from "./_components/MesharaGallery";
import TBPGallery from "./_components/TBPGallery";

export const metadata = {
  title: "Nicoll Douglas | Projects",
  description: "Web development projects by Nicoll Douglas.",
};

export default function Work() {
  return (
    <PageTransition>
      <QueryScrollHandler />
      <Flex maxW={{ base: "lg", md: "4xl" }} flexDir={"column"} mt={8}>
        <Heading
          size={"4xl"}
          as={"h1"}
          maxW={"fit-content"}
          mb={"12"}
          id="pre-tbp-ref"
        >
          Projects
        </Heading>
        <ProjectSection
          projectName={"The Bridge Project"}
          date="Nov 2024 - Present"
          description={
            "The Bridge Project is a web platform that aims at streamlining end-to-end project management for independent freelancers and clients by facilitating seamless communication, project briefing, task tracking, payment handling, onboarding and more."
          }
        >
          <ProjectLinks
            links={[
              {
                name: "Read more",
                href: "https://github.com/nicoll-douglas/the-bridge-project/blob/main/project-plan.md",
              },
              {
                name: "Ongoing progress",
                href: "https://github.com/nicoll-douglas/the-bridge-project",
              },
            ]}
          />
          <TBPGallery />
          <TechList
            list={[
              "TypeScript",
              "React (Next.js)",
              "Node.js (Nest.js)",
              "MySQL",
              "Stripe",
              "Firebase/Google Cloud",
              "Chakra UI",
            ]}
          />
        </ProjectSection>
        <ProjectDivider id="pre-meshara-ref" />
        <ProjectSection
          projectName={"Meshara"}
          date={"Oct 2024"}
          description={
            "A clean, modern and performant website built for a freelance client, focused on a smooth and state-of-the-art UI/UX. I actively honed my client-developer communication skills, ensuring consistent updates and collaborative feedback throughout the project in order to align with the client's vision."
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
          <Text
            fontStyle={"italic"}
            fontSize={"lg"}
            color={"primary.5"}
            fontWeight={"bold"}
            textAlign={"center"}
            mx={{ base: 0, md: 8 }}
            as={"blockquote"}
          >
            &quot;Working with Nicoll was a seamless experience. He delivered an
            amazing website that exceeded our expectations and that truly
            represents us. The attention to detail was outstanding. Love the
            dark mode!&quot;{" "}
            <Box
              fontStyle={"normal"}
              mt={1}
              color={"black"}
              as="span"
              display={"block"}
              fontWeight={"normal"}
            >
              - Adrian Davies, Founder @ Meshara
            </Box>
          </Text>
          <MesharaGallery />
          <TechList list={["React (Next.js)", "Radix UI", "Figma"]} />
        </ProjectSection>
        <ProjectDivider id="pre-lorem-ref" />
        <ProjectSection
          projectName={"Lorem"}
          date="Jul 2024 - Oct 2024"
          description={
            "A messaging board app where users can create accounts, customise profiles, and interact via threads on different topic-based messaging boards. All the while providing a clean, intuitive, responsive and accessible user experience. Built using decoupled architecture and as a Single Page Application (SPA) on the frontend."
          }
        >
          <ProjectLinks
            links={[
              {
                name: "Live Site / Try Demo",
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
              "React (Vite)",
              "MongoDB (Mongoose)",
              "Node.js (Express)",
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
