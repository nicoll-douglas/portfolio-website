import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { SimpleSection, PageTransition } from "@/components/common";

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
          I am a passionate, self-taught developer with a strong foundation in
          both frontend and backend technologies. With expertise in JavaScript,
          React, and PHP amongst many others, I thrive on building dynamic,
          user-friendly web applications that deliver flawless experiences—and
          can quickly pick up any necessary technologies depending on the needs
          of a project.
        </Text>
        <Text>
          My development philosophy combines a keen dedication to continuous
          learning and growth, with a committed attitude to innovative, and
          robust problem-solving, further enhanced by my self-taught background.
        </Text>
        <Box mt={3}>
          <Heading size={"lg"} mb={1}>
            Core Qualities
          </Heading>
          <UnorderedList
            fontSize={"xl"}
            display={"flex"}
            flexDir={{ base: "row" }}
            columnGap={{ base: 10 }}
            justifyContent={{ base: "center", md: "start" }}
            flexWrap={"wrap"}
          >
            <ListItem>Self-driven</ListItem>
            <ListItem>Adaptable</ListItem>
            <ListItem>Growth Mindset</ListItem>
            <ListItem>Forward-thinking</ListItem>
            <ListItem>Detail-oriented</ListItem>
          </UnorderedList>
        </Box>
      </SimpleSection>
    </PageTransition>
  );
}
