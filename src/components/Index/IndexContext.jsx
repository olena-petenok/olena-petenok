import React, { useContext } from 'react';

import EnDataIndex from '../../constants/json/EnData/EnDataIndex.json';
import UaDataIndex from '../../constants/json/UaData/UaDataIndex.json';
import RuDataIndex from '../../constants/json/RuData/RuDataIndex.json';

export const indexLanguages = {
  en: { index: EnDataIndex },
  ua: { index: UaDataIndex },
  ru: { index: RuDataIndex }
};

export const IndexContext = React.createContext(indexLanguages.en);
