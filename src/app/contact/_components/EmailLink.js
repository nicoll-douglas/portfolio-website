"use client";

import { ButtonLink } from "@/components/common";
import { Icon } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";

export default function EmailLink() {
  return (
    <ButtonLink
      href="mailto:me@nicolldouglas.dev"
      icon={<Icon as={MdEmail} h={6} w={6} color={"primary.5"} />}
      variant={"external"}
    >
      me@nicolldouglas.dev
    </ButtonLink>
  );
}
