import { combineReducers } from 'redux';

import filterReducer from './Filter/reducer';

export const rootReducer = combineReducers({
  filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
