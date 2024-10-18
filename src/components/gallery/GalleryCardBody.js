import { CardBody } from "@chakra-ui/react";

export default function GalleryCardBody({ children }) {
  return <CardBody p={{ base: 0, md: 3 }}>{children}</CardBody>;
}
