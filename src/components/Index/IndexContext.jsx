import React from "react";

import EnDataIndex from "../../constants/json/EnData/EnDataIndex.json";
import UaDataIndex from "../../constants/json/UaData/UaDataIndex.json";
import RuDataIndex from "../../constants/json/RuData/RuDataIndex.json";
import { indexImages } from "../../constants/indexImages.js";

import { parseIndexJson } from "../../utils/helper.js";

export const indexLanguages = {
  en: { index: parseIndexJson(EnDataIndex, indexImages) },
  ua: { index: parseIndexJson(UaDataIndex, indexImages) },
  ru: { index: parseIndexJson(RuDataIndex, indexImages) },
};

export const IndexContext = React.createContext(indexLanguages.en);
