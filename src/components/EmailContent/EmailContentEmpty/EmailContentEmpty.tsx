import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './EmailContentEmpty.scss';

export const EmailContentEmpty: React.FC = () => {
  return (
    <div className="email-content-empty">
      <FontAwesomeIcon icon={'envelope'} />
    </div>
  );
};
