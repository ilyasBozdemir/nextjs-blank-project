import { i18n } from "@/next-i18next.config";
import routes from "@/routes";
import siteInfo from "@/siteInfo";
export const getServerSideProps = async ({ res }) => {
  const baseUrl = siteInfo.baseUrl;
  const currentDate = new Date();

  const sitemapData = siteInfo.pages[i18n.defaultLocale];

  const defaultLocale = i18n.defaultLocale;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"  xmlns:xhtml="http://www.w3.org/1999/xhtml">
    ${sitemapData
      .map(
        (sitemap) => `
        <url>
        <loc>${baseUrl}/${sitemap.source}</loc>
        <lastmod>${currentDate.toISOString()}</lastmod>
        <changefreq>${sitemap.sitemap.changeFreq}</changefreq>
        <priority>${sitemap.sitemap.priority}</priority>

      </url>
      `
      )
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
};

export default function PagesSitemapXml() {}
