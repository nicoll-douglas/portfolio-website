import { ListItem, UnorderedList } from "@chakra-ui/react";
import ExternalLink from "../common/ExternalLink";

export default function ProjectLinks({ links }) {
  return (
    <UnorderedList
      display={"flex"}
      gap={{ base: 0, md: 5 }}
      px={{ base: 4, md: 0 }}
      ml={{ md: 0 }}
      mb={{ base: 10, md: "30px" }}
      fontSize={"xl"}
      flexDir={{ base: "column", md: "row" }}
      flexWrap={"wrap"}
      alignItems={{ base: "start", md: "center" }}
      justifyContent={"center"}
      listStylePosition={{ base: "outside", md: "inside" }}
      aria-label="Project Links"
    >
      {links.map(({ name, href }, index) => (
        <ListItem
          key={index}
          listStyleType={index === 0 ? { base: "disc", md: "none" } : ""}
        >
          <ExternalLink href={href}>{name}</ExternalLink>
        </ListItem>
      ))}
    </UnorderedList>
  );
}
