import { EmailList, Search } from '../../components';
import { getActiveFolderType, getEmailsSortedByDate } from '../../store/app.selector';

import { AppState } from '../../store/app.reducer';
import { Dispatch } from 'redux';
import { Email } from '../../contracts';
import { FolderType } from '../../enums';
import React from 'react'
import { connect } from 'react-redux';
import { setActiveEmail } from '../../store/app.action';

interface EmailListContainerProps {
  emails: Email[];
  activeFolderType: FolderType | undefined
  setActiveEmail: (emailId: string) => void;
}

const EmailListContainer: React.FC<EmailListContainerProps> = (props) => {
  const { emails, setActiveEmail } = props;

  const onEmailClick = (emailId: string): void => {
    setActiveEmail(emailId);
  };

  const getHeaderName = () => {
    switch(props.activeFolderType) {
      case FolderType.Sent:
        return 'Отправленные';
      case FolderType.Drafts:
        return 'Черновики';
      case FolderType.Marked:
        return 'Отмеченные';
      case FolderType.Archive:
        return 'Архив';
      default:
        return 'Отправленные';
    }
  }

  // const getHeaderIcon = () => {
  //   switch(props.activeFolderType) {
  //     case FolderType.Sent:
  //       return 'paper-plane';
  //     case FolderType.Drafts:
  //       return 'file';
  //     case FolderType.Marked:
  //       return 'thumbtack';
  //     case FolderType.Archive:
  //       return 'archive';
  //     default:
  //       return '';
  //   }
  // }

  return (
    <section className="overflow-hidden">
      <Search />
      <div className="bg-white full-height">
        <EmailList emails={emails} header={getHeaderName()} icon={'paper-plane'} onItemClick={onEmailClick} />
      </div>
    </section>
  )
}

const mapStateToProps = (state: AppState) => ({
  emails: getEmailsSortedByDate(state),
  activeFolderType: getActiveFolderType(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setActiveEmail: (emailId: string) => dispatch(setActiveEmail(emailId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailListContainer);
