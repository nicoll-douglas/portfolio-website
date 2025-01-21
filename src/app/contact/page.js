import { Heading, Text, Box, Icon } from "@chakra-ui/react";
// import EmailCopyBtn from "./_components/EmailCopyBtn";
import Socials from "./_components/Socials";
import { PageTransition, SimpleSection, ButtonLink } from "@/components/common";
import EmailLink from "./_components/EmailLink";

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
            Need a London-based web developer? Feel free to reach out and send
            me an email or connect with me elsewhere!
          </Text>
          {/* <EmailCopyBtn /> */}
          <EmailLink />
        </Box>
        <Socials />
      </SimpleSection>
    </PageTransition>
  );
}
