export interface ITicket {
  price: number;
  carrier: string;
  segments: [
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    }
  ];
}

export type TicketWithId = ITicket & { id: string };

export interface ITicketState {
  searchId: string;
  tickets: TicketWithId[];
  loading: boolean;
  error: boolean;
}

export enum TicketActionTypes {
  get_tickets = 'GET_TICKETS',
  get_search_id = 'GET_SEARCH_ID',
  set_isLoading = 'SET_IS_LOADING',
  set_error = 'SET_ERROR',
}

export interface SetError {
  type: TicketActionTypes.set_error;
  payload: boolean;
}

export interface SetIsLoading {
  type: TicketActionTypes.set_isLoading;
  payload: boolean;
}

export interface GetSearchId {
  type: TicketActionTypes.get_search_id;
  payload: string;
}

export interface GetTickets {
  type: TicketActionTypes.get_tickets;
  payload: TicketWithId[];
}

export type TicketActionCreatorType = GetSearchId | SetIsLoading | SetError | GetTickets;
