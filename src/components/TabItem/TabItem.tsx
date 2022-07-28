import React from 'react';
import { useDispatch } from 'react-redux';

import style from './TabItem.module.scss';
import { changeSortTicket } from '../../store/Filter/actionCreators';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface TabItemProps {
  value: string;
  desc: string;
}

const TabItem: React.FC<TabItemProps> = ({ value, desc }) => {
  const dispatch = useDispatch();
  const { sortedTicket } = useTypedSelector((state) => state.filterReducer);
  const changeChecked = (): void => {
    dispatch(changeSortTicket(value));
  };
  return (
    <>
      <input id={value} type="radio" name="most" value={value} defaultChecked={value === sortedTicket} />
      <label className={style.label} htmlFor={value} onClick={changeChecked} role="presentation">
        {desc}
      </label>
    </>
  );
};

export default TabItem;
