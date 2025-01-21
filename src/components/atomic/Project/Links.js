import { ListItem, UnorderedList } from "@chakra-ui/react";
import ExternalLink from "@/components/common/ExternalLink";
import Subsection from "./Subsection";

export default function Links({ links, ...rest }) {
  return (
    <Subsection heading={"Links"}>
      <UnorderedList fontSize={"xl"} {...rest}>
        {links.map(({ name, href }, index) => (
          <ListItem height={"30px"} key={index}>
            <ExternalLink my="auto" href={href} maxW="fit-content">
              {name}
            </ExternalLink>
          </ListItem>
        ))}
      </UnorderedList>
    </Subsection>
  );
}
