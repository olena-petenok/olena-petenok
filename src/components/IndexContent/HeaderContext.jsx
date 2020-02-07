import React, { useContext } from 'react';

import EnDataMenuLinks from '../../constants/json/EnData/EnDataMenuLinks.json';
import EnDataHeaderMenuSmallLinks from '../../constants/json/EnData/EnDataHeaderMenuSmallLinks.json';

import RuDataMenuLinks from '../../constants/json/RuData/RuDataMenuLinks.json';
import RuDataHeaderMenuSmallLinks from '../../constants/json/RuData/RuDataHeaderMenuSmallLinks.json';

import UaDataMenuLinks from '../../constants/json/UaData/UaDataMenuLinks.json';
import UaDataHeaderMenuSmallLinks from '../../constants/json/UaData/UaDataHeaderMenuSmallLinks.json';

export const headerLanguages = {
  en: {
    activeLanguageId: 1,
    activeId: 1,
    links: EnDataMenuLinks,
    linksSmall: EnDataHeaderMenuSmallLinks
  },
  ua: {
    activeLanguageId: 2,
    activeId: 1,
    links: UaDataMenuLinks,
    linksSmall: UaDataHeaderMenuSmallLinks
  },
  ru: {
    activeLanguageId: 3,
    activeId: 1,
    links: RuDataMenuLinks,
    linksSmall: RuDataHeaderMenuSmallLinks
  }
};

export const HeaderContext = React.createContext(headerLanguages.en);
