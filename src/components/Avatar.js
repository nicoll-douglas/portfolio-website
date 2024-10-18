import { Image } from "@chakra-ui/react";

export default function Avatar(props) {
  return (
    <Image
      alt="Author Avatar"
      mx={"auto"}
      w={{ base: "200px", md: "330px" }}
      {...props}
    />
  );
}
