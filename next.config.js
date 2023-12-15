// next.config.js

const { i18n } = require("./next-i18next.config");
const routes = require("./routes");

const nextConfig = {
  i18n,
  reactStrictMode: true,

  async rewrites() {
    const rewritesConfig = Object.values(routes).flatMap((route) =>
      Object.entries(route).map(([path, config]) => ({
        source: config.source,
        destination: config.destination,
      }))
    );

    return rewritesConfig;
  },
};

module.exports = nextConfig;
