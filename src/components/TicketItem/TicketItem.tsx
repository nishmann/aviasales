import logo from '../../img/S7 Logo.svg';
import Transfer from '../Transfer';

import style from './TicketItem.module.scss';

const TicketItem = () => {
  return (
    <div className={style.ticket}>
      <div className={style.ticket__head}>
        <div className={style.ticket__price}>13 400 р</div>
        <div>
          <img src={logo} alt="Fly company logo" />
        </div>
      </div>
      <Transfer />
      <Transfer />
    </div>
  );
};

export default TicketItem;
