import React from 'react';
import TabItem from '../TabItem';

import style from './TabList.module.scss';

const TabList: React.FC = () => {
  const arrTab = [
    { value: 'cheap', desc: 'самый дешевый' },
    { value: 'fast', desc: 'самый быстрый' },
    { value: 'optimal', desc: 'оптимальный' },
  ];
  return (
    <form className={style}>
      {arrTab.map((el) => (
        <TabItem key={el.value} {...el} />
      ))}
    </form>
  );
};

export default TabList;
