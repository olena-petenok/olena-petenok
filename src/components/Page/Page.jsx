import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Index from "../Index/Index";
import AboutAuthor from "../AboutAuthor/AboutAuthor";

import DataDocumentTitles from "../../constants/json/SharedData/DataDocumentTitles.json";

function Page(props) {
  const { language, page } = props;
  const titles = DataDocumentTitles;

  useEffect(() => {
    document.title = `${
      titles[page][language] || titles["default"]["default"]
    }`;
  }, [language, page]);

  const pages = {
    index: <Index language={language} />,
    aboutAuthor: <AboutAuthor language={language} />,
    default: <Index language={"en"} />,
  };

  return (
    <>
      <Header language={language} page={page} />
      {pages[page] || pages["default"]}
      <Footer language={language} />
    </>
  );
}

Page.propTypes = { language: PropTypes.string, page: PropTypes.string };
Page.defaultProps = { language: "en", page: "index" };

export default Page;
