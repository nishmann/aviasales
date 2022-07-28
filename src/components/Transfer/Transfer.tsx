import React from 'react';
import { format } from 'date-fns';

import style from './Transfer.module.scss';
import { allTime, arrivalTime, transferNumber } from '../../utils/formatTime';

interface Segment {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}

const Transfer: React.FC<Segment> = ({ date, destination, origin, stops, duration }) => {
  return (
    <ul className={style.transfer}>
      <li className={style.transfer__item}>
        <div className={`${style.transfer__city} ${style.transfer_size}`}>
          <p className={style.title}>{`${origin} - ${destination}`}</p>
          <p className={style.value}>
            {format(new Date(date), 'HH:mm')} – {arrivalTime(date, duration)}
          </p>
        </div>
        <div className={`${style.transfer__time} ${style.transfer_size}`}>
          <p className={style.title}>В пути</p>
          <p className={style.value}>{allTime(date, duration)}</p>
        </div>
        <div className={`${style.transfer__count} ${style.transfer_size}`}>
          <p className={style.title}>{`${stops.length} ${transferNumber(stops.length)}`}</p>
          <p className={style.value}>{stops.join(', ')}</p>
        </div>
      </li>
    </ul>
  );
};

export default Transfer;
