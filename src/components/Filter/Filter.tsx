import React from 'react';

import style from './Filter.module.scss';

const Filter: React.FC = () => {
  return (
    <div className={style.filter}>
      <div>
        <h5 className={style.filter__title}>Количество пересадок</h5>
        <div className={style.checkbox_group}>
          <label className={style.label}>
            <input className={style.checkbox} type="checkbox" />
            Все
          </label>
          <label className={style.label}>
            <input className={style.checkbox} type="checkbox" />
            Без пересадок
          </label>
          <label className={style.label}>
            <input className={style.checkbox} type="checkbox" />1 пересадка
          </label>
          <label className={style.label}>
            <input className={style.checkbox} type="checkbox" />2 пересадки
          </label>
          <label className={style.label}>
            <input className={style.checkbox} type="checkbox" />3 пересадки
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
