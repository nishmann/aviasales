import React from 'react';

import style from './ButtonShowTicket.module.scss';

const ButtonShowTicket: React.FC = () => {
  return (
    <button className={style.button__show} type="button">
      Показать еще 5 билетов!
    </button>
  );
};

export default ButtonShowTicket;
