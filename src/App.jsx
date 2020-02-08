import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './components/Header/Header';
import { headerLanguages } from './components/Header/HeaderContext';
import Footer from './components/Footer/Footer';
import { footerLanguages } from './components/Footer/FooterContext';
import Index from './components/Index/Index';
import { indexLanguages } from './components/Index/IndexContext';
import AboutAuthor from './components/AboutAuthor/AboutAuthor';
import { aboutAuthorLanguages } from './components/AboutAuthor/AboutAuthorContext';

// const AboutAuthor = (props) => (
//   <>
//     <Header value={headerLanguages.en} />
//     <AboutAuthor value={aboutAuthorLanguages.ua} />
//     <Footer value={footerLanguages.ua}
//   </>
// );

// const NotFound = () => ( <div><p>404 not found</p></div> );

// const themes = {
//   light: { foreground: "#000000", background: "#ff0000" },
//   dark: { foreground: "#ffffff", background: "#00ff00" }
// };
// const ThemeContext = React.createContext(themes.dark);
//
// function ThemedButton() {
//   const theme = useContext(ThemeContext);
//   return (
//     <button style={{ background: theme.background, color: theme.foreground }}>
//       I am styled by theme context!
//     </button>
//   );
// }
// function Toolbar(props) { return ( <div><ThemedButton /></div> ); }
// function AppTry() { return (<ThemeContext.Provider value={themes.light}><Toolbar /></ThemeContext.Provider> ); }

function App (props) {
  return (
    <Router>
      <Route exact path='/' component={ () => <Index value={indexLanguages.ua} /> } />
    </Router>

    // <Router>
    //   <Route exact path='/' component={ () => <AboutAuthor value={aboutAuthorLanguages.ua} /> } />
    // </Router>

    // <Router>
    //   <Route exact path='/' component={ () => <Footer value={footerLanguages.ua} /> } />
    // </Router>

    // <Router>
    //   <Route exact path='/' component={ () => <Header value={headerLanguages.en} /> } />
    // </Router>

    // <Router>
    //   <Route exact path='/' component={ () => <Index activeLanguageId={1} activeId={1} logo={DataLogoLinks} links={EnDataMenuLinks} languages={DataMenuLanguageLinks} linksSmall={EnDataHeaderMenuSmallLinks} contacts={DataFooterContacts} index={EnDataIndex} /> } />
    //   <Route exact path='/about-author' component={ () => <AboutAuthor activeLanguageId={1} activeId={2} logo={DataLogoLinks} links={EnDataMenuLinks} languages={DataMenuLanguageLinks} linksSmall={EnDataHeaderMenuSmallLinks} contacts={DataFooterContacts} aboutAuthor={EnDataAboutAuthor} /> } />
    //   <Route exact path='/ua' component={ () => <Index activeLanguageId={2} activeId={1} logo={DataLogoLinks} links={UaDataMenuLinks} languages={DataMenuLanguageLinks} linksSmall={UaDataHeaderMenuSmallLinks} contacts={DataFooterContacts} index={UaDataIndex} /> } />
    //   <Route exact path='/ua/about-author' component={ () => <AboutAuthor activeLanguageId={2} activeId={2} logo={DataLogoLinks} links={UaDataMenuLinks} languages={DataMenuLanguageLinks} linksSmall={UaDataHeaderMenuSmallLinks} contacts={DataFooterContacts} aboutAuthor={UaDataAboutAuthor} /> } />
    //   <Route exact path='/ru' component={ () => <Index activeLanguageId={3} activeId={1} logo={DataLogoLinks} links={RuDataMenuLinks} languages={DataMenuLanguageLinks} linksSmall={RuDataHeaderMenuSmallLinks} contacts={DataFooterContacts} index={RuDataIndex} /> } />
    //   <Route exact path='/ru/about-author' component={ () => <AboutAuthor activeLanguageId={3} activeId={2} logo={DataLogoLinks} links={RuDataMenuLinks} languages={DataMenuLanguageLinks} linksSmall={RuDataHeaderMenuSmallLinks} contacts={DataFooterContacts} aboutAuthor={RuDataAboutAuthor} /> } />
    // </Router>
  );
}

export default App;
