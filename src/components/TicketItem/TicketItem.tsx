import React from 'react';

import Transfer from '../Transfer';

import style from './TicketItem.module.scss';

export interface Segment {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}

interface TicketProps {
  price: number;
  carrier: string;
  segments: Segment[];
}

const TicketItem: React.FC<TicketProps> = ({ price, carrier, segments }) => {
  return (
    <div className={style.ticket}>
      <div className={style.ticket__head}>
        <div className={style.ticket__price}>{price}</div>
        <div>
          <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="Fly company logo" />
        </div>
      </div>
      {segments.map((el) => (
        <Transfer key={el.date} {...el} />
      ))}
    </div>
  );
};

export default TicketItem;
