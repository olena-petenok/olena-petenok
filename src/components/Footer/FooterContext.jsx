import React from "react";

import EnDataMenuLinks from "../../constants/json/EnData/EnDataMenuLinks.json";
import UaDataMenuLinks from "../../constants/json/UaData/UaDataMenuLinks.json";
import RuDataMenuLinks from "../../constants/json/RuData/RuDataMenuLinks.json";

export const footerLanguages = {
  en: { links: EnDataMenuLinks },
  ua: { links: UaDataMenuLinks },
  ru: { links: RuDataMenuLinks },
};

export const FooterContext = React.createContext(footerLanguages.en);
