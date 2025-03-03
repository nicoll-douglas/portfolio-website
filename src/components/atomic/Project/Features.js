import { ListItem, UnorderedList } from "@chakra-ui/react";
import Subsection from "./Subsection";

export default function Features({ features, ...rest }) {
  return (
    <Subsection heading={"Features"} gap={"3px"}>
      <UnorderedList fontSize={"xl"} {...rest}>
        {features.map((feature, index) => (
          <ListItem minHeight={"30px"} key={index}>
            {feature}
          </ListItem>
        ))}
      </UnorderedList>
    </Subsection>
  );
}
