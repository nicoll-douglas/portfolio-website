import { Card } from "@chakra-ui/react";

export default function GalleryCard({ children, ...rest }) {
  return (
    <Card
      variant={"outline"}
      bg={"primary.3"}
      borderColor={"primary.5"}
      size={"sm"}
      mt={{ base: 10, md: 8 }}
      mb={10}
      as={"figure"}
      {...rest}
    >
      {children}
    </Card>
  );
}
