import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Img({ alt, src, ...rest }) {
  return (
    <Box borderRadius={{ base: 0, md: "3px" }} overflow={"hidden"}>
      <Image
        width={1440}
        height={810}
        alt={alt}
        src={src}
        placeholder="blur"
        {...rest}
      />
    </Box>
  );
}
