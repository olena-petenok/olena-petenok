import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Index from './components/Index/Index';
import AboutAuthor from './components/AboutAuthor/AboutAuthor';

function App() {
  const AboutAuthorPage = props => (
    <>
      <Header language={props.language} />
      <AboutAuthor language={props.language} />
      <Footer language={props.language} />
    </>
  );

  const IndexPage = props => (
    <>
      <Header language={props.language} />
      <Index language={props.language} />
      <Footer language={props.language} />
    </>
  );

  // const NotFound = () => ( <div><p>404 not found</p></div> );

  return (
    <Router>
      <Route exact path='/' component={ () => <IndexPage language={'en'} /> } />
      <Route exact path='/about-author' component={ () => <AboutAuthorPage language={'en'} /> } />
      <Route exact path='/ua' component={ () => <IndexPage language={'ua'} /> } />
      <Route exact path='/about-author/ua' component={ () => <AboutAuthorPage language={'ua'} /> } />
      <Route exact path='/ru' component={ () => <IndexPage language={'ru'} /> } />
      <Route exact path='/about-author/ru' component={ () => <AboutAuthorPage language={'ru'} /> } />
    </Router>
  );
}

export default App;
