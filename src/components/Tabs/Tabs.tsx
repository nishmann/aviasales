import style from './Tabs.module.scss';

const Tabs = () => {
  return (
    <div className={style.tabs}>
      <button className={`${style.tabs__btn} ${style.btn_left} ${style.btn_active}`}>Самый дешевый</button>
      <button className={`${style.tabs__btn} ${style.btn_center}`}>Самый быстрый</button>
      <button className={`${style.tabs__btn} ${style.btn_right}`}>Оптимальный</button>
    </div>
  );
};

export default Tabs;
