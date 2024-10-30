import { Heading, Text } from "@chakra-ui/react";
import SimpleSection from "@/components/common/SimpleSection";
import PageTransition from "@/components/common/PageTransition";
import CoreSkills from "./_components/CoreSkills";

export const metadata = {
  title: "Nicoll Douglas | About",
  description: "About Nicoll Douglas.",
};

export default function About() {
  return (
    <PageTransition>
      <SimpleSection
        avatar={{
          src: "/avatars/optimised/work-1-op.svg",
          w: { base: "150px", md: "250px" },
        }}
      >
        <Heading size={"4xl"} as={"h1"}>
          About
        </Heading>
        <Text>
          Born and raised in London, I&apos;ve become an experienced,
          self-taught developer with a strong foundation in both front-end and
          back-end technologies. With expertise in JavaScript, React and Node.js
          amongst many others, I thrive on building dynamic, user-friendly web
          applications that deliver flawless experiences—and can quickly pick up
          any necessary technologies depending on the needs of the project.
        </Text>
        <Text>
          My approach combines a strong dedication for continuous learning with
          a keen mind for innovation and robust problem-solving, enhanced by my
          previous backgrounds in fine art and maths.
        </Text>
        <CoreSkills />
      </SimpleSection>
    </PageTransition>
  );
}
