import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Search.scss';

export class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <input type="search" placeholder="Search" />
        <a href="mailto:" target="_blank" className="link-edit" title="Create">
          <FontAwesomeIcon icon={'pencil-alt'} />
        </a>
      </div>
    );
  }
}
