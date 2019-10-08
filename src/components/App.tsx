import { connect } from 'react-redux';
import './App.scss';

import { EmailContentContainer, EmailListContainer, SideBarContainer } from '../containers';

import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { initApp } from '../store/app.action';

interface AppProps {
  init: () => void;
}

const App: React.FC<AppProps> = (props) => {
  useEffect(props.init, []);

  return (
    <div className="main">
      <SideBarContainer />
      <EmailListContainer />
      <EmailContentContainer />
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  init: () => dispatch(initApp())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
