import React from 'react';

import FilterList from '../FilterList';
import logo from '../../img/Logo.svg';
import Tabs from '../Tabs';
import TicketList from '../TicketList';
import ButtonShowTicket from '../ButtonShowTicket';

import style from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={style.app}>
      <div className={style.app__logo}>
        <img src={logo} alt="AviaSales logo" />
      </div>
      <div className={style.app__inner}>
        <FilterList />
        <div className={style.app__content}>
          <Tabs />
          <main>
            <TicketList />
            <ButtonShowTicket />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
