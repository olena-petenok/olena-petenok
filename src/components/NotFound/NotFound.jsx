import React from 'react';

import './not-found.sass';
import { NOTFOUND } from '../../constants/strings.js';

function NotFound(props) {
  return (
    <div className="not-found-container">
      <p className="not-found">{NOTFOUND}</p>
    </div>
  );
}

export default NotFound;
