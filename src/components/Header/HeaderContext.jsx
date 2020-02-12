import React, { useContext } from 'react';

import EnDataMenuLinks from '../../constants/json/EnData/EnDataMenuLinks.json';
import EnDataHeaderMenuSmallLinks from '../../constants/json/EnData/EnDataHeaderMenuSmallLinks.json';

import UaDataMenuLinks from '../../constants/json/UaData/UaDataMenuLinks.json';
import UaDataHeaderMenuSmallLinks from '../../constants/json/UaData/UaDataHeaderMenuSmallLinks.json';

import RuDataMenuLinks from '../../constants/json/RuData/RuDataMenuLinks.json';
import RuDataHeaderMenuSmallLinks from '../../constants/json/RuData/RuDataHeaderMenuSmallLinks.json';

export const headerLanguages = {
  en: {
    links: EnDataMenuLinks,
    linksSmall: EnDataHeaderMenuSmallLinks
  },
  ua: {
    links: UaDataMenuLinks,
    linksSmall: UaDataHeaderMenuSmallLinks
  },
  ru: {
    links: RuDataMenuLinks,
    linksSmall: RuDataHeaderMenuSmallLinks
  }
};

export const HeaderContext = React.createContext(headerLanguages.en);
