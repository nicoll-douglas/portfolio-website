import { Heading, Text } from "@chakra-ui/react";
import SimpleSection from "@/components/common/SimpleSection";
import ButtonLink from "@/components/common/ButtonLink";
import PageTransition from "@/components/common/PageTransition";

export const metadata = {
  title: "Nicoll Douglas | Full-Stack Web Developer",
  description: "Nicoll Douglas is a full-stack web developer based in London.",
};

export default function Home() {
  return (
    <PageTransition>
      <SimpleSection avatar={{ src: "/avatars/optimised/main-op.svg" }}>
        <Heading mb={{ base: 0, lg: 2 }}>{"Hi, I'm Nicoll"}</Heading>
        <Text>
          {
            "I'm a full-stack web developer based in London driven by my philosophy of “building as I learn, learning as I build, succeeding as I grow”. I develop efficient and robust applications for the web and have an eagerness to keep expanding my skills, not only as a developer, but as a creator and collaborator."
          }
        </Text>
        <ButtonLink href={"/projects"} mx={{ base: "auto", md: 0 }}>
          View my work
        </ButtonLink>
      </SimpleSection>
    </PageTransition>
  );
}
