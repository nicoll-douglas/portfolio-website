import { ListItem, UnorderedList } from "@chakra-ui/react";
import ExternalLink from "@/components/common/ExternalLink";
import { Fragment } from "react";
import Subsection from "./Subsection";

export default function Links({ links, ...rest }) {
  return (
    <Subsection heading={"Links"}>
      <UnorderedList
        display={"flex"}
        fontSize={"xl"}
        flexDir={"column"}
        flexWrap={"wrap"}
        listStylePosition={"outside"}
        listStyleType={"disc"}
        aria-label="Project Links"
        {...rest}
      >
        {links.map(({ name, href }, index) => (
          <Fragment key={index}>
            <ListItem>
              <ExternalLink href={href} my="auto" maxW="fit-content">
                {name}
              </ExternalLink>
            </ListItem>
          </Fragment>
        ))}
      </UnorderedList>
    </Subsection>
  );
}
