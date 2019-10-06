import './Search.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <input type="search" placeholder="Search"/>
        <FontAwesomeIcon icon={'pencil-alt'} />
      </div>
    )
  }
}
