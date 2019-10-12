import { Dispatch } from 'redux';
import { EmailType } from '../../enums';
import { NavBar } from '../../components';
import { NavItem } from '../../contracts';
import React from 'react'
import { connect } from 'react-redux';
import { setActiveFolderAction } from '../../store/app.action';

interface SideBarContainerProps {
  setActiveFolder: (type: EmailType) => void;
}

const SideBarContainer: React.FC<SideBarContainerProps> = (props) => {
  const onActiveEmailTypeChange = (item: NavItem): void => {
    props.setActiveFolder(item.type);
  }

  return (
    <section className="side-bar">
      <NavBar title={'Папки'} onItemClick={onActiveEmailTypeChange} />
    </section>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setActiveFolder: (type: EmailType) => dispatch(setActiveFolderAction(type))
});

export default connect(
  null,
  mapDispatchToProps
)(SideBarContainer);
