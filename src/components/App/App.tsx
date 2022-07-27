import React, { useEffect } from 'react';

import FilterList from '../FilterList';
import logo from '../../img/Logo.svg';
import TicketList from '../TicketList';

import style from './App.module.scss';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Loader from '../Loader';
import TabList from '../TabList';

const App: React.FC = () => {
  const { loading } = useTypedSelector((state) => state.ticketReducer);
  const { startSearch } = useActions();
  useEffect(() => {
    startSearch();
  }, []);
  return (
    <div className={style.app}>
      {loading && <Loader />}
      <div className={style.app__logo}>
        <img src={logo} alt="AviaSales logo" />
      </div>
      <div className={style.app__inner}>
        <FilterList />
        <div className={style.app__content}>
          <TabList />
          <main>
            <TicketList />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
