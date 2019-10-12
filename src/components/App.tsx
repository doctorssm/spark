import './App.scss';

import React, { useEffect } from 'react';

import { Dispatch } from 'redux';
import EmailContentContainer from '../containers/EmailContentContainer/EmailContentContainer';
import EmailListContainer from '../containers/EmailListContainer/EmailListContainer';
import SideBarContainer from '../containers/SideBarContainer/SideBarContainer';
import { connect } from 'react-redux';
import { initApp } from '../store/app.actions';

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
