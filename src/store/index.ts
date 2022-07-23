import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import filterReducer from './Filter/reducer';
import ticketReducer from './Ticket/reducer';
import { TicketActionCreators } from './Ticket/actionCreators';

export const allActionCreator = {
  ...TicketActionCreators,
};

export const rootReducer = combineReducers({
  filterReducer,
  ticketReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
