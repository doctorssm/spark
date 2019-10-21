import React from 'react';

import backgroundImg from 'assets/img/wood.png';

import './EmailListEmpty.scss';

export const EmailListEmpty: React.FC = () => (
  <div className="empty-list">
    <div className="text-center mb-10">
      <img src={backgroundImg} alt="background" />
    </div>
    <div className="text-center">
      <h3 className="mb-10">Эта папка пуста</h3>
      <div>То, что вы ищете находится в другой папке</div>
    </div>
  </div>
);
