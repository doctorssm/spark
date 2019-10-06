import './Navigation.scss';

import { Folders } from '../Folders/Folders';
import React from 'react';

export class Navigation extends React.Component {
  render() {
    return (
      <nav className="nav">
        NAVIGATION
        <Folders />
      </nav>
    )
  }
}
