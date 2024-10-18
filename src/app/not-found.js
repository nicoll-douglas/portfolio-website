import SimpleSection from "@/components/common/SimpleSection";
import { Heading, Text } from "@chakra-ui/react";
import ButtonLink from "@/components/common/ButtonLink";
import PageTransition from "@/components/common/PageTransition";

export const metadata = {
  title: "404 | Not Found",
  description: "Page could not be found.",
};

export default function NotFound() {
  return (
    <PageTransition>
      <SimpleSection
        avatar={{
          src: "/avatars/optimised/not-found-op.svg",
          w: { base: "250px", md: "350px" },
        }}
      >
        <Heading mx={{ base: "auto", md: 0 }} as={"h1"} size={"4xl"}>
          Not Found
        </Heading>
        <Text align={{ base: "center", md: "left" }}>
          {"The page you're looking for could not be found."}
        </Text>
        <ButtonLink href={"/"} mx={{ base: "auto", md: 0 }}>
          Return to home
        </ButtonLink>
      </SimpleSection>
    </PageTransition>
  );
}
