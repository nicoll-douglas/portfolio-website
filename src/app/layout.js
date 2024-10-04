import { Itim } from "next/font/google";
import Providers from "@/components/Providers";
import AppLayout from "@/components/AppLayout";

const itim = Itim({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Nicoll Douglas | Full-Stack Web Developer",
  description: "Nicoll Douglas, a full-stack web developer based in London.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={itim.className}>
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
