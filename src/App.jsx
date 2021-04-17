import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Page from "./components/Page/Page";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Page} />
      <Route path="/ua" render={() => <Page language={"ua"} />} />
      <Route path="/ru" render={() => <Page language={"ru"} />} />

      <Route
        exact
        path="/about-author"
        render={() => <Page page={"aboutAuthor"} />}
      />
      <Route
        path="/about-author/ua"
        render={() => <Page page={"aboutAuthor"} language={"ua"} />}
      />
      <Route
        path="/about-author/ru"
        render={() => <Page page={"aboutAuthor"} language={"ru"} />}
      />

      <Redirect from="*" to={"/"} />
    </Switch>
  </Router>
);

export default App;
