import React, { useEffect } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Index from "../Index/Index";
import AboutAuthor from "../AboutAuthor/AboutAuthor";

import DataDocumentTitles from "../../constants/json/SharedData/DataDocumentTitles.json";

const Page = ({ language = "en", page = "index" }) => {
  const titles = DataDocumentTitles;

  useEffect(() => {
    document.title = `${titles[page][language]}`;
  }, [language, page]);

  const pages = {
    index: <Index language={language} />,
    aboutAuthor: <AboutAuthor language={language} />,
  };

  return (
    <>
      <Header language={language} page={page} />
      {pages[page]}
      <Footer language={language} />
    </>
  );
};

export default Page;
