import { Box } from "@chakra-ui/react";
import SmallHeading from "./SmallHeading";

export default function Subsection({ heading, children, ...rest }) {
  return (
    <Box my={5} display={"flex"} flexDir={"column"} {...rest}>
      <SmallHeading>{heading}</SmallHeading>
      {children}
    </Box>
  );
}
