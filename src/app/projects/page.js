import { Flex, Heading, Box } from "@chakra-ui/react";
import PageTransition from "@/components/common/PageTransition";
import { Project } from "@/components/atomic";
import OneByOne from "./_components/OneByOne";
import Meshara from "./_components/Meshara";
import Chattr from "./_components/Chattr";

export const metadata = {
  title: "Nicoll Douglas | Projects",
  description: "Web development projects by Nicoll Douglas.",
};

export default function Work() {
  return (
    <PageTransition>
      <Box maxW={{ base: "lg", md: "4xl" }} mt={8}>
        <Heading size={"4xl"} as={"h1"} maxW={"fit-content"} mb={6}>
          Projects
        </Heading>
        <Meshara />
        <Project.Divider />
        <OneByOne />
        <Project.Divider />
        <Chattr />
      </Box>
    </PageTransition>
  );
}
