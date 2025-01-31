import { Flex, Heading, Box } from "@chakra-ui/react";
import PageTransition from "@/components/common/PageTransition";
import { Project } from "@/components/atomic";
import JWF from "./_components/JWF";
import Meshara from "./_components/Meshara";

export const metadata = {
  title: "Nicoll Douglas | Projects",
  description: "Web development projects by Nicoll Douglas.",
};

export default function Work() {
  return (
    <PageTransition>
      <Box maxW={{ base: "lg", md: "4xl" }} mt={8}>
        <Heading size={"4xl"} as={"h1"} maxW={"fit-content"} mb={8}>
          Projects
        </Heading>
        <JWF />
        <Project.Divider />
        <Meshara />
      </Box>
    </PageTransition>
  );
}
