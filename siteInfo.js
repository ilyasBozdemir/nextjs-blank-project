// siteInfo.js

import { socialMediaIcons } from "./assets/icons";

const routes = require("./routes");
const trPages = Object.values(routes.tr);
const enPages = Object.values(routes.en);

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://www.prod-domain.com"
    : "http://localhost:3000";

export const navLinks = [
  { name: "About", path: "#", i18nKey: "navs.about" },
  { name: "Features", path: "#", i18nKey: "navs.features" },
  { name: "Pricing", path: "#", i18nKey: "navs.pricing" },
];

export const dropdownLinks = [
  {
    name: "Blog",
    path: "#",
    i18nKey: "navs.blog",
  },
  {
    name: "Documentation",
    path: "#",
    i18nKey: "navs.documentation",
  },
];

export const footerLinks = [
  { name: "About", path: "#", i18nKey: "navs.about" },
  {
    name: "Documentation",
    path: "#",
    i18nKey: "navs.documentation",
  },
];

export const socialMediaLinks = [
  { text: "Facebook", path: "#Facebook", icon: socialMediaIcons.Facebook },
  { text: "Twitter", path: "#Twitter", icon: socialMediaIcons.Twitter },
  { text: "Instagram", path: "#Instagram", icon: socialMediaIcons.Instagram },
  { text: "Youtube", path: "#Youtube", icon: socialMediaIcons.Youtube },
];

export const siteInfo = {
  baseUrl,
  pages: {
    tr: trPages,
    en: enPages,
  },
  navbarPaths: ["home", "about"],
  footerPaths: ["home", "about"],
  socialMediaLinks,
  sitemaps: [
    { fileName: "/blog-sitemap.xml" },
    { fileName: "/pages-sitemap.xml" },
  ],
};
