import PageWrapper from "@/components/Wrapper/PageWrapper";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  const links = [
    {
      title: "Sitemap Index",
      path: "/sitemap/sitemap_index.xml",
    },
    {
      title: "Pages Sitemap",
      path: "/sitemap/pages-sitemap.xml",
    },
    {
      title: "Blog Sitemap",
      path: "/sitemap/blog-sitemap.xml",
    },

    {
      title: "Robots.txt",
      path: "/robots.txt",
    },
    {
      title: "Rss blog-1",
      path: "/rss/blog-1.xml",
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
