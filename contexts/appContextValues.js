// appContextValues.js

import { socialMediaIcons } from "@/assets/icons";
import formatPhoneNumber from "@/utils/formatPhoneNumber";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://www.production-doamin.com"
    : "http://localhost:3000";
const logoUrl =
  process.env.NODE_ENV === "production" ? "/logo.svg" : "/logo.svg";

const addressInfo = {
  streetAddress: ``,
  addressLocality: ``,
  addressRegion: ``,
  postalCode: ``,
  addressCountry: ``,
};

export const initialNavbarLinks = [
  { id: 1, name: "Home", path: "#" },
  { id: 2, name: "About", path: "#" },
  { id: 3, name: "Contact", path: "#" },
];
export const initialSocialMediaLinks = [
  { text: "Facebook", path: "#Facebook", icon: socialMediaIcons.Facebook },
  //{ text: "Twitter", path: "#Twitter", icon: socialMediaIcons.Twitter },
  { text: "Instagram", path: "#Instagram", icon: socialMediaIcons.Instagram },
  //{ text: "Youtube", path: "#Youtube", icon: socialMediaIcons.Youtube },
];

export const initialFooterData = {};

export const initialSiteInfo = {
  baseUrl: baseUrl,
  addressInfo,
  socialMediaLinks: initialSocialMediaLinks,
  initialSocialMediaLinks,
  logoUrl: baseUrl + logoUrl,
  phoneNumber: `+905555555555`,
};

initialSiteInfo.phoneNumberDisplay = formatPhoneNumber(
  initialSiteInfo.phoneNumber
);
