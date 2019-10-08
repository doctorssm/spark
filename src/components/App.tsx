import { connect } from 'react-redux';
import './App.scss';

import { EmailContentContainer, SideBarContainer } from '../containers';

import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { initApp } from '../store/app.action';
import EmailListContainer from '../containers/EmailListContainer/EmailListContainer';

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
