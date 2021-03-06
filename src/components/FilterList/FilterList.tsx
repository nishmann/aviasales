import React from 'react';

import Filter from '../Filter';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import style from '../Filter/Filter.module.scss';
import { IElement } from '../../store/Filter/types';

const FilterList: React.FC = () => {
  const { filters } = useTypedSelector((data) => data.filterReducer);
  const checked = filters.filter((el) => (el.name !== 'allTransfer' ? el.checked : null));
  return (
    <div className={style.filter}>
      <div>
        <h5 className={style.filter__title}>Количество пересадок</h5>
        <ul className={style.checkbox_group}>
          {filters.map((el: IElement) => (
            <Filter key={el.value} {...el} otherCheckedInputs={checked} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterList;
