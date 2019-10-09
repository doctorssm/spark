import React from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { NavBar } from '../../components';
import { FolderItem } from '../../contracts';
import { setActiveFolder } from '../../store/app.action';
import { FolderType } from '../../enums';

interface SideBarContainerProps {
  setActiveFolder: (type: FolderType | undefined) => void;
}

const SideBarContainer: React.FC<SideBarContainerProps> = (props) => {
  const onFolderClick = (item: FolderItem): void => {
    console.log('onFolderClick', item);
    props.setActiveFolder(item.type);
  }

  return (
    <section className="side-bar">
      <NavBar onFolderSelectionChange={onFolderClick} />
    </section>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setActiveFolder: (type: FolderType| undefined) => dispatch(setActiveFolder(type))
});

export default connect(
  null,
  mapDispatchToProps
)(SideBarContainer);
