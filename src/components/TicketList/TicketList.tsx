import React, { useState } from 'react';

import TicketItem from '../TicketItem';
import style from './TicketList.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { filterTicket, sortTickets } from '../../utils/filterTicket';

const TicketList: React.FC = () => {
  const [amount, setAmount] = useState(5);
  const { tickets } = useTypedSelector((state) => state.ticketReducer);
  const { sortedTicket, activeFilter } = useTypedSelector((state) => state.filterReducer);
  const filteredTicket = filterTicket(tickets, activeFilter);
  const sortingTicket = sortTickets(filteredTicket, sortedTicket);

  return (
    <>
      {sortingTicket.slice(0, amount).map((ticket) => (
        <TicketItem key={ticket.id} {...ticket} />
      ))}
      <button className={style.button__show} onClick={() => setAmount(amount + 5)} type="button">
        Показать еще 5 билетов!
      </button>
    </>
  );
};

export default TicketList;
