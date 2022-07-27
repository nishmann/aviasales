import React from 'react';

import style from './TabItem.module.scss';

interface TabItemProps {
  value: string;
  desc: string;
}

const TabItem: React.FC<TabItemProps> = ({ value, desc }) => {
  return (
    <>
      <input id={value} type="radio" name="most" value={value} defaultChecked={false} />
      <label className={style.label} htmlFor={value} role="presentation">
        {desc}
      </label>
    </>
  );
};

export default TabItem;
