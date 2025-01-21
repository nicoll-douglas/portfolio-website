import { Project, Gallery } from "@/components/atomic";
import jwfBlurUrl from "@/data/jwfBlurUrl";
import * as B from "@/components/badges";

export default function JWF() {
  return (
    <Project.Section
      projectName={"Jiggy's Web Fundamentals"}
      date={"Jan 2025"}
      description={
        "A website where I regularly post informational tutorials about web development fundamentals. I personally had a user reach out and tell me how well the simplicity of the site, ease of navigation and informative tutorials provided them with a great user and learning experience."
      }
    >
      <Project.Links
        links={[
          {
            name: "Live Site",
            href: "https://jwf.nicolldouglas.dev",
          },
          {
            name: "Source",
            href: "https://github.com/nicoll-douglas/jiggys-web-fundamentals",
          },
        ]}
      />
      <Gallery.Card>
        <Gallery.CardHeader heading={"Preview"} />
        <Gallery.CardBody>
          <Gallery.Img
            alt={"Jiggy's Web Fundamentals Homepage"}
            src={"/projects/jwf/homepage.png"}
            blurDataURL={jwfBlurUrl}
          />
        </Gallery.CardBody>
      </Gallery.Card>
      <Project.TechStack>
        <B.HTML />
        <B.CSS />
        <B.JavaScript />
        <B.PHP />
        <B.MySQL />
      </Project.TechStack>
    </Project.Section>
  );
}
