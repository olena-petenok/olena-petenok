import React, { useEffect } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Index from "../Index/Index";
import AboutAuthor from "../AboutAuthor/AboutAuthor";

import { indexLanguages, IndexContext } from "../Index/IndexContext";
import {
  aboutAuthorLanguages,
  AboutAuthorContext,
} from "../AboutAuthor/AboutAuthorContext";

import DataDocumentTitles from "../../constants/json/SharedData/DataDocumentTitles.json";

const Page = ({ language = "en", page = "index" }) => {
  useEffect(() => {
    document.title = `${DataDocumentTitles[page][language]}`;
  }, [language, page]);

  const pages = {
    index: <Index language={language} />,
    aboutAuthor: <AboutAuthor language={language} />,
  };

  // TODO: merge contents into one and make it memorized
  return (
    <IndexContext.Provider value={indexLanguages[language]}>
      <AboutAuthorContext.Provider value={aboutAuthorLanguages[language]}>
        <Header language={language} page={page} />

        {pages[page]}

        <Footer language={language} />
      </AboutAuthorContext.Provider>
    </IndexContext.Provider>
  );
};

export default Page;
