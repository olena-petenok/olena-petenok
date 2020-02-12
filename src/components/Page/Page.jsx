import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Index from '../Index/Index';
import AboutAuthor from '../AboutAuthor/AboutAuthor';

// import { setInLocalStorage } from '../../utils/helper.js';

function Page(props) {
  const { language, page } = props;

  // useEffect(() => {
  //   document.title = `The language is: ${language}, the page is: ${page}`;
  // }, [language, page]);

  // useEffect(() => { setInLocalStorage("language", language); }, [language]);
  // useEffect(() => { setInLocalStorage("page", page); }, [page]);

  const pages = {
    'index': <Index language={language} />,
    'aboutAuthor': <AboutAuthor language={language} />,
    'default': <Index language={'en'} /> // 404 Not Found ?
  };

  return (
    <>
      <Header language={language} page={page} />
      {pages[page] || pages['default']}
      <Footer language={language} />
    </>
  );
}

Page.propTypes = { language: PropTypes.string, page: PropTypes.string };
Page.defaultProps = { language: 'en', page: 'index' }; // 404 Not Found ?

export default Page;
