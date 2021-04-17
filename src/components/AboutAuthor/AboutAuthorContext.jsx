import React from "react";

import EnDataAboutAuthor from "../../constants/json/EnData/EnDataAboutAuthor.json";
import UaDataAboutAuthor from "../../constants/json/UaData/UaDataAboutAuthor.json";
import RuDataAboutAuthor from "../../constants/json/RuData/RuDataAboutAuthor.json";

export const aboutAuthorLanguages = {
  en: { aboutAuthor: EnDataAboutAuthor },
  ua: { aboutAuthor: UaDataAboutAuthor },
  ru: { aboutAuthor: RuDataAboutAuthor },
};

export const AboutAuthorContext = React.createContext(aboutAuthorLanguages.en);
