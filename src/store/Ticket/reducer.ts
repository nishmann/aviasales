import { ITicketState, TicketActionCreatorType, TicketActionTypes } from './types';

const initialState: ITicketState = {
  searchId: '',
  tickets: [],
  loading: false,
  error: false,
};

const ticketReducer = (state = initialState, action: TicketActionCreatorType): ITicketState => {
  switch (action.type) {
    case TicketActionTypes.set_error:
      return {
        ...state,
        error: action.payload,
      };
    case TicketActionTypes.set_isLoading:
      return {
        ...state,
        loading: action.payload,
      };
    case TicketActionTypes.get_search_id:
      return {
        ...state,
        searchId: action.payload,
      };
    case TicketActionTypes.get_tickets:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload],
      };
    default:
      return state;
  }
};

export default ticketReducer;
