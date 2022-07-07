import TicketItem from '../TicketItem';

import style from './TicketList.module.scss';

const TicketList = () => {
  return (
    <div className={style.ticket__list}>
      <TicketItem />
      <TicketItem />
      <TicketItem />
      <TicketItem />
      <TicketItem />
    </div>
  );
};

export default TicketList;
