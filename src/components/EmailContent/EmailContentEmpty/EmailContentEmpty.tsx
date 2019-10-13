import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './EmailContentEmpty.scss';

export const EmailContentEmpty: React.FC = () => {
  return (
    <div className="empty-email-content">
      <FontAwesomeIcon icon={'envelope'} />
    </div>
  );
};
