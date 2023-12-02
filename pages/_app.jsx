import { AppContextProvider } from "@/contexts/AppContext";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const MainLayout = dynamic(() => import("../layouts/MainLayout"));

function MyApp({ Component, pageProps }) {
  let Layout = MainLayout;

  return (
    <ChakraProvider>
      <CSSReset />
      <AppContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
