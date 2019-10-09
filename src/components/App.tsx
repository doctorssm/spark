import { connect } from 'react-redux';
import './App.scss';


import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { initApp } from '../store/app.action';
import SideBarContainer from '../containers/SideBarContainer/SideBarContainer';
import EmailListContainer from '../containers/EmailListContainer/EmailListContainer';
import EmailContentContainer from '../containers/EmailContentContainer/EmailContentContainer';

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
