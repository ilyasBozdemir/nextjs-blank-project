import React, { createContext, useContext } from "react";

import {
  initialNavbarLinks,
  initialFooterData,
  initialSiteInfo,
} from "./appContextValues";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {
  const navbarLinks = initialNavbarLinks;
  const footerData = initialFooterData;
  const siteInfo = initialSiteInfo;

  const contextValue = {
    navbarLinks,
    footerData,
    siteInfo,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
