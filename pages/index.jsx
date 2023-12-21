import PageWrapper from "@/components/Wrapper/PageWrapper";
import routes from "@/routes";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  const links = [
    {
      title: "Sitemap Index",
      path: "/sitemap_index.xml",
    },
    {
      title: "Pages Sitemap",
      path: "/pages-sitemap.xml",
    },
    {
      title: "Blog Sitemap",
      path: "/blog-sitemap.xml",
    },

    {
      title: "Robots.txt",
      path: "/robots.txt",
    },
  ];

  return (
    <PageWrapper>
      <Flex
        as={"nav"}
        direction={"column"}
        justifyContent={"center"}
        textAlign={"center"}
      >
        {links.map((link) => (
          <Link key={link.path} href={link.path} locale={"tr"} target="_blank">
            {link.title}
          </Link>
        ))}
      </Flex>
    </PageWrapper>
  );
}
