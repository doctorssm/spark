import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Search.scss';

export const Search: React.FC = () => {
  return (
    <div className="search">
      <input type="search" placeholder="Search" />
      <a href="mailto:" className="link-edit" title="Create">
        <FontAwesomeIcon icon={'pencil-alt'} />
      </a>
    </div>
  );
};
