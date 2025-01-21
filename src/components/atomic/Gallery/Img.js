import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Img({ blurDataURL, alt, src, ...rest }) {
  return (
    <Box borderRadius={{ base: 0, md: "3px" }} overflow={"hidden"}>
      <Image alt={alt} src={src} placeholder="blur" {...rest} />
    </Box>
  );
}
