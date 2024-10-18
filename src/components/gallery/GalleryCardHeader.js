import { CardHeader, Heading, Divider } from "@chakra-ui/react";

export default function GalleryCardHeader({ heading, children, ...rest }) {
  return (
    <>
      <CardHeader {...rest}>
        <Heading
          size={"md"}
          color={"black"}
          maxW={"fit-content"}
          as="figcaption"
        >
          {heading}
        </Heading>
        {children}
      </CardHeader>
      <Divider borderColor={"primary.5"} opacity={1} />
    </>
  );
}
