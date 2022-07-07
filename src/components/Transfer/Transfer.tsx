import style from './Transfer.module.scss';

const Transfer = () => {
  return (
    <ul className={style.transfer}>
      <li className={style.transfer__item}>
        <div className={`${style.transfer__city} ${style.transfer_size}`}>
          <p className={style.title}>MOW – HKT</p>
          <p className={style.value}>10:45 – 08:00</p>
        </div>
        <div className={`${style.transfer__time} ${style.transfer_size}`}>
          <p className={style.title}>В пути</p>
          <p className={style.value}>21ч 15м</p>
        </div>
        <div className={`${style.transfer__count} ${style.transfer_size}`}>
          <p className={style.title}>2 пересадки</p>
          <p className={style.value}>HKG, JNB</p>
        </div>
      </li>
    </ul>
  );
};

export default Transfer;
