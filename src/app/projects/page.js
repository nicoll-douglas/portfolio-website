import { Flex, Heading } from "@chakra-ui/react";
import PageTransition from "@/components/common/PageTransition";
import { Project } from "@/components/atomic";
import JWF from "./_components/JWF";
import Lorem from "./_components/Lorem";
import Meshara from "./_components/Meshara";

export const metadata = {
  title: "Nicoll Douglas | Projects",
  description: "Web development projects by Nicoll Douglas.",
};

export default function Work() {
  return (
    <PageTransition>
      <Flex maxW={{ base: "lg", md: "4xl" }} flexDir={"column"} mt={8}>
        <Heading
          size={"4xl"}
          as={"h1"}
          maxW={"fit-content"}
          mb={10}
          id="pre-tbp-ref"
        >
          Projects
        </Heading>
        <JWF />
        <Project.Divider />
        <Meshara />
        <Project.Divider />
        <Lorem />
      </Flex>
    </PageTransition>
  );
}
