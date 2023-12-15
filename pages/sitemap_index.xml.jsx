import initialSiteInfo from "@/contexts/appContextValues";

export const getServerSideProps = async ({ res }) => {
  const baseUrl = initialSiteInfo.baseUrl;
  const currentDate = new Date();
 
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${siteInfo.sitemaps
        .map((sitemap) => {
          return `
          <sitemap>
          <loc>${baseUrl}/${sitemap.fileName}</loc>
          <lastmod>${currentDate.toISOString()}</lastmod>
        </sitemap>
          `;
        })

        .join("")}
    </sitemapindex>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemapIndex);
  res.end();
  return {
    props: {},
  };
};

export default function SitemapIndex() {}
