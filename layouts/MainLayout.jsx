import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { Box, Container, useColorMode } from "@chakra-ui/react";
import React from "react";

function MainLayout({ children }) {
  const { colorMode, toggleColorMode } = useColorMode();

  const [darkMode, setDarkMode] = React.useState(false);
  const isDarkMode = colorMode === "dark";

  React.useEffect(() => {
    setDarkMode(isDarkMode);
  }, [isDarkMode]);

  return (
    <Box>
      <Navbar />
      <Container p={4} maxW={"7xl"}>
        {children}
      </Container>
      <Footer />

      <ScrollToTop />
    </Box>
  );
}

export default MainLayout;
