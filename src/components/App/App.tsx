import React, { useEffect } from 'react';

import FilterList from '../FilterList';
import logo from '../../img/Logo.svg';
import Tabs from '../Tabs';
import TicketList from '../TicketList';
import ButtonShowTicket from '../ButtonShowTicket';

import style from './App.module.scss';
import { useActions } from '../../hooks/useActions';

const App: React.FC = () => {
  const { startSearch } = useActions();
  useEffect(() => {
    startSearch();
  }, []);
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
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
