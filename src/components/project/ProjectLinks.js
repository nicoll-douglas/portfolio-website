import { ListItem, UnorderedList } from "@chakra-ui/react";
import ExternalLink from "../common/ExternalLink";
import { Fragment } from "react";

function Separator() {
  return (
    <ListItem
      fontSize={"2xl"}
      aria-hidden="true"
      maxW={"fit-content"}
      display={{ base: "none", md: "flex" }}
    >
      &bull;
    </ListItem>
  );
}

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
      listStylePosition={"outside"}
      listStyleType={{ base: "disc", md: "none" }}
      aria-label="Project Links"
      {...rest}
    >
      {links.map(({ name, href }, index) => (
        <Fragment key={index}>
          <ListItem height={"30px"}>
            <ExternalLink href={href} my="auto">
              {name}
            </ExternalLink>
          </ListItem>
          {index !== links.length - 1 && <Separator />}
        </Fragment>
      ))}
    </UnorderedList>
  );
}
