import { ListItem, UnorderedList } from "@chakra-ui/react";
import ExternalLink from "../common/ExternalLink";

export default function ProjectLinks({ links, ...rest }) {
  return (
    <UnorderedList
      display={"flex"}
      gap={{ base: 0, md: 5 }}
      px={{ base: 4, md: 0 }}
      my={{ base: 5, md: 4 }}
      ml={{ md: 0 }}
      fontSize={"xl"}
      flexDir={{ base: "column", md: "row" }}
      flexWrap={"wrap"}
      alignItems={{ base: "start", md: "center" }}
      justifyContent={"center"}
      listStylePosition={{ base: "outside", md: "inside" }}
      aria-label="Project Links"
      {...rest}
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
