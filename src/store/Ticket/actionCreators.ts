import { AnyAction } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { ITicket, TicketActionCreatorType, TicketActionTypes, TicketWithId } from './types';

export const TicketActionCreators = {
  setError: (payload: boolean): TicketActionCreatorType => ({
    type: TicketActionTypes.set_error,
    payload,
  }),
  setIsLoading: (payload: boolean): TicketActionCreatorType => ({
    type: TicketActionTypes.set_isLoading,
    payload,
  }),

  getSearchId: (id: string): TicketActionCreatorType => ({
    type: TicketActionTypes.get_search_id,
    payload: id,
  }),

  getTickets: (tickets: TicketWithId[]): TicketActionCreatorType => ({
    type: TicketActionTypes.get_tickets,
    payload: tickets,
  }),

  startSearch: (): ThunkAction<void, Record<string, unknown>, Record<string, unknown>, AnyAction> => {
    return async (dispatch: ThunkDispatch<Record<string, unknown>, Record<string, unknown>, AnyAction>) => {
      try {
        fetch('https://aviasales-test-api.kata.academy/search')
          .then((data) => data.json())
          .then(({ searchId }) => {
            dispatch(TicketActionCreators.getSearchId(searchId));
            return searchId;
          })
          .then((searchId) => {
            dispatch(TicketActionCreators.setIsLoading(true));
            dispatch(TicketActionCreators.fetching(searchId));
          });
      } catch (e) {
        dispatch(TicketActionCreators.setError(true));
      }
    };
  },

  fetching: (searchId: string): ThunkAction<void, Record<string, unknown>, Record<string, unknown>, AnyAction> => {
    return async (dispatch: ThunkDispatch<Record<string, unknown>, Record<string, unknown>, AnyAction>) => {
      try {
        fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
          .then((data) => data.json())
          .then(({ tickets, stop }) => {
            const ticketsWithId = tickets.map((ticket: ITicket) => ({
              ...ticket,
              id: uuidv4(),
            }));
            dispatch(TicketActionCreators.getTickets(ticketsWithId));
            if (!stop) dispatch(TicketActionCreators.fetching(searchId));
            if (stop) dispatch(TicketActionCreators.setIsLoading(false));
          });
      } catch (e) {
        if (e.status === 500) {
          dispatch(TicketActionCreators.fetching(searchId));
        } else {
          dispatch(TicketActionCreators.setError(true));
          dispatch(TicketActionCreators.setIsLoading(false));
        }
        dispatch(TicketActionCreators.setError(true));
      }
    };
  },
};
