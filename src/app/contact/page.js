import { Heading, Text, Box } from "@chakra-ui/react";
import SimpleSection from "@/components/common/SimpleSection";
import EmailCopyBtn from "./_components/EmailCopyBtn";
import PageTransition from "@/components/common/PageTransition";
import Socials from "./_components/Socials";

export const metadata = {
  title: "Nicoll Douglas | Contact",
  description: "Contact Nicoll Douglas, a full-stack web developer.",
};

export default function Contact() {
  return (
    <PageTransition>
      <SimpleSection
        avatar={{
          src: "/avatars/optimised/work-3-op.svg",
          w: { base: "150px", md: "240px" },
        }}
      >
        <Heading size={"4xl"} as={"h1"}>
          Contact Me
        </Heading>
        <Box>
          <Text mb={2}>
            Need a project-ready, London-based web developer? Feel free to reach
            out and send me an email or connect with me elsewhere!
          </Text>
          <EmailCopyBtn />
        </Box>
        <Socials />
      </SimpleSection>
    </PageTransition>
  );
}
