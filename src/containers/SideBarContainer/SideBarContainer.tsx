import { Dispatch } from 'redux';
import { FolderItem } from '../../contracts';
import { FolderType } from '../../enums';
import { NavBar } from '../../components';
import React from 'react'
import { connect } from 'react-redux';
import { setActiveFolderAction } from '../../store/app.action';

interface SideBarContainerProps {
  setActiveFolder: (type: FolderType | undefined) => void;
}

const SideBarContainer: React.FC<SideBarContainerProps> = (props) => {
  const onActiveEmailTypeChange = (item: FolderItem | null): void => {
    const value = item && item.type || undefined;
    props.setActiveFolder(value);
  }

  return (
    <section className="side-bar">
      <NavBar title={'Папки'} onItemClick={onActiveEmailTypeChange} />
    </section>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setActiveFolder: (type: FolderType| undefined) => dispatch(setActiveFolderAction(type))
});

export default connect(
  null,
  mapDispatchToProps
)(SideBarContainer);
