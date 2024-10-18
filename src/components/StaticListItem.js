"use client";

import { ListItem, Icon } from "@chakra-ui/react";

export default function StaticListItem({ icon, children }) {
  return (
    <ListItem
      display={"flex"}
      alignItems={"center"}
      color={"primary.5"}
      fontSize={"xl"}
    >
      <Icon
        aria-hidden={true}
        w={6}
        h={6}
        as={icon}
        mr={1}
        color={"primary.5"}
      />
      {children}
    </ListItem>
  );
}
