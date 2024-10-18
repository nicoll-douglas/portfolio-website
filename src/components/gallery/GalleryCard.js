import { Card } from "@chakra-ui/react";

export default function GalleryCard({ children, ...rest }) {
  return (
    <Card
      variant={"outline"}
      bg={"primary.3"}
      borderColor={"primary.5"}
      size={"sm"}
      mb={10}
      {...rest}
    >
      {children}
    </Card>
  );
}
