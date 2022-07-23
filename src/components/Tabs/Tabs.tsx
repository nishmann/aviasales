import React from 'react';

import style from './Tabs.module.scss';

const Tabs: React.FC = () => {
  return (
    <div className={style.tabs}>
      <button className={`${style.tabs__btn} ${style.btn_left} ${style.btn_active}`} type="button">
        Самый дешевый
      </button>
      <button className={`${style.tabs__btn} ${style.btn_center}`} type="button">
        Самый быстрый
      </button>
      <button className={`${style.tabs__btn} ${style.btn_right}`} type="button">
        Оптимальный
      </button>
    </div>
  );
};

export default Tabs;
