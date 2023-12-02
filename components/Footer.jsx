import {
  Stack,
  Link as CLink,
  Box,
  chakra,
  Container,
  Text,
  VisuallyHidden,
  useColorModeValue,
  Flex,
  SimpleGrid,
  useColorMode,
} from "@chakra-ui/react";
import Logo from "./Logo";
import Link from "next/link";

import React from "react";

let color = {
  light: {
    primary: "#1d2e3d",
    secondary: "#fff",
  },
  dark: {
    primary: "#354656",
    secondary: "#fff",
  },
};

const FooterSection = () => {
  return (
    <>
      <>[FooterSection]</>
    </>
  );
};

const FooterData = () => {
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  let yearText;
  if (currentYear > startYear) {
    yearText = `${startYear}-${currentYear}`;
  } else {
    yearText = `${startYear}`;
  }
  return <> {yearText} &copy; Tüm Hakları Saklıdır.</>;
};

export default React.memo(FooterSection);
