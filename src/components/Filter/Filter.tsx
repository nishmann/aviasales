import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { allFilterOff, allFilterOn, changeOtherInput } from '../../store/Filter/actionCreators';

import style from './Filter.module.scss';

interface FilterInputProps {
  name: string;
  checked: boolean;
  value: string;
}

const Filter: React.FC<FilterInputProps> = ({ name, value, checked: isChecked }) => {
  const [checked, setChecked] = useState(isChecked);
  const dispatch = useDispatch();
  const changeChecked = (): void => {
    if (!checked || checked) {
      dispatch(changeOtherInput(name));
      if (name === 'allTransfer' && !isChecked) {
        dispatch(allFilterOn());
      }
      if (name === 'allTransfer' && isChecked) {
        dispatch(allFilterOff());
      }
    }
  };

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  return (
    <label className={style.label} htmlFor={name}>
      <input className={style.checkbox} name={name} type="checkbox" checked={checked} onChange={changeChecked} />
      <span>{value}</span>
    </label>
  );
};

export default Filter;
