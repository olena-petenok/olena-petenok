import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons); // loads the Icon plugin
import 'uikit/dist/css/uikit.min.css';

import './styles/style.sass';

import React from 'react';
import { render } from 'react-dom';
import App from './App';

const root = document.createElement('div');
document.body.appendChild(root);
root.style.height = '100%';

function renderApp() {
  render (<App />, root);
}

renderApp();
