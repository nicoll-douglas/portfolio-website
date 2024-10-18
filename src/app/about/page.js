import { Heading, Text } from "@chakra-ui/react";
import SimpleSection from "@/components/common/SimpleSection";
import PageTransition from "@/components/common/PageTransition";
import CoreSkills from "@/components/CoreSkills";

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
          Born and raised in London, I&apos;ve become a passionate 21 year old
          developer with a strong foundation in both front-end and back-end
          technologies. With expertise in JavaScript, React, Node amongst many
          others, I thrive on building dynamic, user-friendly web applications
          that deliver seamless experiences.
        </Text>
        <Text>
          My approach combines a strong dedication for continuous learning with
          a keen mind for creative coding and robust problem-solving, enhanced
          by my previous backgrounds in art and maths.
        </Text>
        <CoreSkills />
      </SimpleSection>
    </PageTransition>
  );
}
