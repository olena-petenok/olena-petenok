import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Page from './components/Page/Page';

function App() {
  return (
    <Router>
      <Route exact path='/' component={ () => <Page /> } />
      <Route exact path='/about-author' component={ () => <Page page={'aboutAuthor'} /> } />
      <Route exact path='/ua' component={ () => <Page language={'ua'} /> } />
      <Route exact path='/about-author/ua' component={ () => <Page language={'ua'} page={'aboutAuthor'} /> } />
      <Route exact path='/ru' component={ () => <Page language={'ru'} /> } />
      <Route exact path='/about-author/ru' component={ () => <Page language={'ru'} page={'aboutAuthor'} /> } />
    </Router>
  );
}

export default App;
