import React from 'react';
import PropTypes from 'prop-types';

import NewComponent from './components/NewComponent.jsx';
import NewPureComponent from './components/NewPureComponent.jsx';

// import {  } from './utils/helper.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //
    // };
  }

  render() {
    // const {  } = this.state;

    return (
      <>
        <NewComponent />
        <NewPureComponent />
      </>
    );
  }
}

export default App;
