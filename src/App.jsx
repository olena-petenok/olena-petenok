import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import IndexContent from './components/IndexContent/IndexContent';
import AboutAuthorContent from './components/AboutAuthorContent/AboutAuthorContent';

import DataLogoLinks from './constants/json/SharedData/DataLogoLinks.json';
import DataMenuLanguageLinks from './constants/json/SharedData/DataMenuLanguageLinks.json';
import DataFooterContacts from './constants/json/SharedData/DataFooterContacts.json';

import EnDataMenuLinks from './constants/json/EnData/EnDataMenuLinks.json';
import EnDataHeaderMenuSmallLinks from './constants/json/EnData/EnDataHeaderMenuSmallLinks.json';
import EnDataIndex from './constants/json/EnData/EnDataIndex.json';
import EnDataAboutAuthor from './constants/json/EnData/EnDataAboutAuthor.json';

import RuDataMenuLinks from './constants/json/RuData/RuDataMenuLinks.json';
import RuDataHeaderMenuSmallLinks from './constants/json/RuData/RuDataHeaderMenuSmallLinks.json';
import RuDataIndex from './constants/json/RuData/RuDataIndex.json';
import RuDataAboutAuthor from './constants/json/RuData/RuDataAboutAuthor.json';

import UaDataMenuLinks from './constants/json/UaData/UaDataMenuLinks.json';
import UaDataHeaderMenuSmallLinks from './constants/json/UaData/UaDataHeaderMenuSmallLinks.json';
import UaDataIndex from './constants/json/UaData/UaDataIndex.json';
import UaDataAboutAuthor from './constants/json/UaData/UaDataAboutAuthor.json';

// import {  } from './utils/helper.js';

/*
const Page = (props) => (
  <div>
    <Header activeLanguageId={props.activeLanguageId} activeId={props.activeId} logo={props.logo} links={props.links} languages={props.languages} linksSmall={props.linksSmall} />
    {props.children}
    <Footer links={props.links} contacts={props.contacts} />
  </div>
);
*/

const Index = (props) => (
  <div>
    <Header activeLanguageId={props.activeLanguageId} activeId={props.activeId} logo={props.logo} links={props.links} languages={props.languages} linksSmall={props.linksSmall} />
    <IndexContent index={props.index} />
    <Footer links={props.links} contacts={props.contacts} />
  </div>
);

const AboutAuthor = (props) => (
  <div>
    <Header activeLanguageId={props.activeLanguageId} activeId={props.activeId} logo={props.logo} links={props.links} languages={props.languages} linksSmall={props.linksSmall} />
    <AboutAuthorContent aboutAuthor={props.aboutAuthor} />
    <Footer links={props.links} contacts={props.contacts} />
  </div>
);

/*
const NotFound = () => (
  <div>
    <Header logo={LogoLinksData} links={MenuLinksData} languages={MenuLanguageLinksData} linksS={HeaderMenuSmallLinksData} />
    <p>404 not found</p>
    <Footer links={MenuLinksData} contacts={FooterContactsData} />
  </div>
);*/

/*
const NotFound = () => (
  <div>
    <p>404 not found</p>
  </div>
);
*/
//

function App (props) {
  return (
    <Router>
      <Route exact path='/' component={ () => <Index activeLanguageId={1} activeId={1} logo={DataLogoLinks} links={EnDataMenuLinks} languages={DataMenuLanguageLinks} linksSmall={EnDataHeaderMenuSmallLinks} contacts={DataFooterContacts} index={EnDataIndex} /> } />
      <Route exact path='/about-author' component={ () => <AboutAuthor activeLanguageId={1} activeId={2} logo={DataLogoLinks} links={EnDataMenuLinks} languages={DataMenuLanguageLinks} linksSmall={EnDataHeaderMenuSmallLinks} contacts={DataFooterContacts} aboutAuthor={EnDataAboutAuthor} /> } />
      <Route exact path='/ua' component={ () => <Index activeLanguageId={2} activeId={1} logo={DataLogoLinks} links={UaDataMenuLinks} languages={DataMenuLanguageLinks} linksSmall={UaDataHeaderMenuSmallLinks} contacts={DataFooterContacts} index={UaDataIndex} /> } />
      <Route exact path='/ua/about-author' component={ () => <AboutAuthor activeLanguageId={2} activeId={2} logo={DataLogoLinks} links={UaDataMenuLinks} languages={DataMenuLanguageLinks} linksSmall={UaDataHeaderMenuSmallLinks} contacts={DataFooterContacts} aboutAuthor={UaDataAboutAuthor} /> } />
      <Route exact path='/ru' component={ () => <Index activeLanguageId={3} activeId={1} logo={DataLogoLinks} links={RuDataMenuLinks} languages={DataMenuLanguageLinks} linksSmall={RuDataHeaderMenuSmallLinks} contacts={DataFooterContacts} index={RuDataIndex} /> } />
      <Route exact path='/ru/about-author' component={ () => <AboutAuthor activeLanguageId={3} activeId={2} logo={DataLogoLinks} links={RuDataMenuLinks} languages={DataMenuLanguageLinks} linksSmall={RuDataHeaderMenuSmallLinks} contacts={DataFooterContacts} aboutAuthor={RuDataAboutAuthor} /> } />
    </Router>
  );
}

export default App;
