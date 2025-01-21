import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Img({ blurDataURL, alt, src, ...rest }) {
  return (
    <Box borderRadius={{ base: 0, md: "3px" }} overflow={"hidden"}>
      <Image
        alt={alt}
        src={src}
        width={1440}
        height={810}
        priority={true}
        placeholder="blur"
        blurDataURL={blurDataURL}
        unoptimized
        {...rest}
      />
    </Box>
  );
}
