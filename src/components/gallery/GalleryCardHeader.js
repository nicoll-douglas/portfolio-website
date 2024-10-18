import { CardHeader, Heading, Divider } from "@chakra-ui/react";

export default function GalleryCardHeader({ heading, children, ...rest }) {
  return (
    <>
      <CardHeader {...rest}>
        <Heading size={"md"} color={"black"} as={"h3"} maxW={"fit-content"}>
          {heading}
        </Heading>
        {children}
      </CardHeader>
      <Divider borderColor={"primary.5"} opacity={1} />
    </>
  );
}
