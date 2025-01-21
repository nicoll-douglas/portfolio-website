import { UnorderedList } from "@chakra-ui/react";

export default function List({ children, ...rest }) {
  return (
    <UnorderedList
      listStyleType={"none"}
      ml={0}
      display={"flex"}
      rowGap={3}
      columnGap={6}
      flexWrap={"wrap"}
      {...rest}
    >
      {children}
    </UnorderedList>
  );
}
