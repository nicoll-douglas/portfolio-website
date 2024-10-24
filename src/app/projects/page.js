import { Box, Flex, Heading, Text } from "@chakra-ui/react";
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
import QueryScrollHandler from "@/components/QueryScrollHandler";

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
          id="pre-meshara-ref"
        >
          Projects
        </Heading>
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
          <TechList list={["NextJS", "Radix UI", "Figma"]} />
        </ProjectSection>
        <ProjectDivider id="pre-lorem-ref" />
        <ProjectSection
          projectName={"Lorem"}
          date="Jul 2024 - Oct 2024"
          description={
            "A messaging board app where users can create accounts, post threads to boards, and reply to others. All the while providing a clean, intuitive, responsive and accessible user experience. Built using decoupled architecture and meant for those who enjoy the forum-like style of internet communicaton pre-social-media."
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
