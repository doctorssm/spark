import './App.scss';

import { EmailContentContainer, EmailListContainer, SideBarContainer } from '../containers';

import React from 'react';

const App: React.FC = () => {
  return (
    <div className="main">
      <SideBarContainer />
      <EmailListContainer />
      <EmailContentContainer />
    </div>
  );
}

export default App;
