const { i18n } = require("./next-i18next.config");

// routes.js

const trRoutes = {
  "/": {
    source: i18n.defaultLocale !== "tr" ? "/tr" : "/",
    destination: "/",
    locale: "tr",
    //
    meta: {
      title: "Türkçe Başlık",
      description: "Türkçe Açıklama",
      canonical: "https://ornek.com/tr",
    },
    sitemap: {
      pageName: "pages-sitemap.xml",
      changeFreq: "weekly",
      priority: "1",
    },
  },
  "/about": {
    source: i18n.defaultLocale !== "tr" ? "/tr/hakkimizda" : "/hakkimizda",
    destination: "/about",
    locale: "tr",
    //
    meta: {
      title: "Hakkımızda - Türkçe",
      description: "Hakkımızda ile ilgili Türkçe açıklama",
      canonical: "https://ornek.com/tr/hakkimizda",
    },
    sitemap: {
      pageName: "pages-sitemap.xml",
      changeFreq: "weekly",
      priority: "0.8",
    },
  },
};

const enRoutes = {
  "/": {
    source: i18n.defaultLocale !== "en" ? "/en" : "/",
    destination: "/",
    locale: "en",
    //
    meta: {
      title: "English Title",
      description: "English Description",
      canonical: "https://example.com/en",
    },
    sitemap: {
      pageName: "pages-sitemap.xml",
      changeFreq: "weekly",
      priority: "1",
    }
  },
  "/about": {
    source: i18n.defaultLocale !== "tr" ? "en/about" : "/about",
    destination: "/about",
    locale: "en",
    //
    meta: {
      title: "About Us in English",
      description: "Description about us in English",
      canonical: "https://example.com/en/about",
    },
    sitemap: {
      pageName: "pages-sitemap.xml",
      changeFreq: "weekly",
      priority: "0.8",
    },
  },
};

module.exports = {
  tr: trRoutes,
  en: enRoutes,
};
