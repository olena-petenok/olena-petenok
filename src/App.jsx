import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Page from './components/Page/Page';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'><Page /></Route>
        <Route exact path='/ua'><Page language={'ua'} /></Route>
        <Route exact path='/ru'><Page language={'ru'} /></Route>
        <Route exact path='/about-author'><Page page={'aboutAuthor'} /></Route>
        <Route exact path='/about-author/ua'><Page page={'aboutAuthor'} language={'ua'} /></Route>
        <Route exact path='/about-author/ru'><Page page={'aboutAuthor'} language={'ru'} /></Route>
        <Route path='*'><Page /></Route>
      </Switch>
    </Router>
  );
}

export default App;
