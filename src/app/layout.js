import { Itim } from "next/font/google";
import Contexts from "@/Contexts";
import { Container, Center } from "@chakra-ui/react";
import Header from "@/components/Header";

const itim = Itim({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={itim.className}>
        <Contexts>
          <Container
            minHeight={"100dvh"}
            maxWidth={"container.xl"}
            display={"flex"}
            flexDir={"column"}
            px={{ base: 4, md: 8 }}
            pt={{ base: 24, md: 28 }}
            pb={{ base: 14, md: 28 }}
          >
            <Header />
            <Center flex={1} as="main">
              {children}
            </Center>
          </Container>
        </Contexts>
      </body>
    </html>
  );
}
