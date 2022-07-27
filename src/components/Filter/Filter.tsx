import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { allFilterOff, allFilterOn, allTransferOff, changeOtherInput } from '../../store/Filter/actionCreators';

import style from './Filter.module.scss';

interface FilterInputProps {
  name: string;
  checked: boolean;
  value: string;
  otherCheckedInputs: any[];
}

const Filter: React.FC<FilterInputProps> = ({ name, value, checked: isChecked, otherCheckedInputs }) => {
  const [checked, setChecked] = useState(isChecked);
  const dispatch = useDispatch();
  const changeChecked = (): void => {
    if (name === 'allTransfer') {
      if (checked) {
        dispatch(allFilterOff());
      } else if (!checked) {
        dispatch(allFilterOn());
      }
    } else {
      dispatch(changeOtherInput(name));
    }
    setChecked(!checked);
  };

  useEffect(() => {
    if (otherCheckedInputs.length === 4) {
      dispatch(allFilterOn());
    } else if (otherCheckedInputs.length < 4) {
      dispatch(allTransferOff());
    }
    setChecked(isChecked);
  }, [isChecked]);

  return (
    <li className={style.li}>
      <input className={style.checkbox} id={name} type="checkbox" checked={checked} onChange={changeChecked} />
      <label className={style.label} htmlFor={name}>
        {value}
      </label>
    </li>
  );
};

export default Filter;
