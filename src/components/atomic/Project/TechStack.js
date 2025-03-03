import Subsection from "./Subsection";
import { BadgeList } from "@/components/common";

export default function TechStack({ children }) {
  return (
    <Subsection
      heading={"Tech Stack"}
      alignItems={{ base: "center", md: "start" }}
      gap={2}
      mt={{ base: 10, md: 8 }}
    >
      <BadgeList justifyContent={{ base: "center", md: "start" }}>
        {children}
      </BadgeList>
    </Subsection>
  );
}
