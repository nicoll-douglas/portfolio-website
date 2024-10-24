import { Divider } from "@chakra-ui/react";

export default function ProjectDivider(props) {
  return (
    <Divider
      my={{ base: 10, md: 14 }}
      borderColor={"primary.5"}
      opacity={1}
      {...props}
    />
  );
}
