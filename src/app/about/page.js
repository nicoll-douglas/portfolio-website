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
          Born and raised in London, I&apos;ve become a passionate, self-taught
          developer with a strong foundation in both frontend and backend
          technologies. With expertise in JavaScript, React and PHP amongst many
          others, I thrive on building dynamic, user-friendly web applications
          that deliver flawless experiences—and can quickly pick up any
          necessary technologies depending on the needs of a project.
        </Text>
        <Text>
          My development philosophy combines a keen dedication to continuous
          learning and growth, with a committed attitude to innovative, and
          robust problem-solving—enhanced by my previous backgrounds in fine art
          and maths.
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
            <ListItem>Self-learning</ListItem>
            <ListItem>Adaptability</ListItem>
            <ListItem>Growth Mindset</ListItem>
            <ListItem>Forward-thinking</ListItem>
            <ListItem>Attention to detail</ListItem>
          </UnorderedList>
        </Box>
      </SimpleSection>
    </PageTransition>
  );
}
