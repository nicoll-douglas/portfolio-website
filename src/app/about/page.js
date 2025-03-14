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
          I&apos;m a passionate developer who&apos;s been self-teaching web
          development since late 2023. Acquiring expertise in JavaScript, React,
          and Node.js amongst many others, I&apos;ve become someone who thrives
          on improving their coding skills as well as building dynamic,
          user-friendly software that can deliver flawless experiences.
        </Text>
        <Text>
          My development philosophy combines a keen dedication to continuous
          learning and growth, with a committed attitude to innovative, and
          robust problem-solving.
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
