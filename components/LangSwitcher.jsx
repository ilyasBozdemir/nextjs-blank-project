import { Box, Button, Stack, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const routes = require("../routes");
const getRouteSource = (name, language = global.locale) =>
  routes[language][name].source;

function LangSwitcher() {
  const router = useRouter();
  const { locale } = router;

  const [currentLocale, setCurrentLocale] = useState(locale);

  useEffect(() => {
    const savedLocale = localStorage.getItem("selectedLocale");
    if (savedLocale) {
      setCurrentLocale(savedLocale);
    }
  }, []);

  let newRoute = ``;

  const toggleLanguage = () => {
    const newLocale = currentLocale === "en" ? "tr" : "en";
    setCurrentLocale(newLocale);
    localStorage.setItem("selectedLocale", newLocale);

    newRoute = getRouteSource(router.pathname, newLocale);

    window.history.replaceState({}, "", newRoute);

    if (newRoute) {
      router.push(newRoute, undefined, { locale: newLocale });
    } else {
      router.push(router.pathname, undefined, {
        locale: newLocale,
      });
    }
  };

  return (
    <>
      <Button
        id="lang-switcher"
        color={useColorModeValue("text.200", "textD.200")}
        bg="transparent"
        p={2}
        fontSize="lg"
        onClick={toggleLanguage}
        mr={2}
        variant={"link"}
        _hover={{
          textDecoration: "none",
          color: "primary.100",
        }}
        cursor={"pointer"}
      >
        {currentLocale === "en" ? "TR" : "EN"}
      </Button>
    </>
  );
}

export default LangSwitcher;
