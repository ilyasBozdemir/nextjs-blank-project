const path = require("path");
module.exports = {
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "tr", // aynı zamanda _document.jsx içinde burdan besleniyor
  },
  localePath: path.resolve("./locales"),
};
