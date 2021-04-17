import React, { useEffect } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Index from "../Index/Index";
import AboutAuthor from "../AboutAuthor/AboutAuthor";

import { indexLanguages, IndexContext } from "../Index/IndexContext";

import DataDocumentTitles from "../../constants/json/SharedData/DataDocumentTitles.json";

const Page = ({ language = "en", page = "index" }) => {
  useEffect(() => {
    document.title = `${DataDocumentTitles[page][language]}`;
  }, [language, page]);

  const pages = {
    index: <Index language={language} />,
    aboutAuthor: <AboutAuthor language={language} />,
  };

  return (
    <IndexContext.Provider value={indexLanguages[language]}>
      <Header language={language} page={page} />

      {pages[page]}

      <Footer language={language} />
    </IndexContext.Provider>
  );
};

export default Page;
