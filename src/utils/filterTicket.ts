import { TicketWithId } from '../store/Ticket/types';

export const sortTickets = (tickets: TicketWithId[] | [], sortValue: string): TicketWithId[] => {
  switch (sortValue) {
    case 'cheap':
      return tickets.sort((a, b) => +a.price - +b.price);
    case 'fast':
      return tickets.sort((a, b) => {
        const first = a.segments[0].duration + a.segments[1].duration;
        const second = b.segments[0].duration + b.segments[1].duration;
        return first - second;
      });
    case 'optimal':
      return tickets.sort((a, b) => {
        const first = a.segments[0].duration + a.segments[1].duration + +a.price;
        const second = b.segments[0].duration + b.segments[1].duration + +b.price;
        return first - second;
      });
    default:
      return tickets;
  }
};

export const filterTicket = (tickets: TicketWithId[] | [], filters: string): TicketWithId[] => {
  switch (filters) {
    case 'allTransfer':
      return tickets;
    case 'withoutTransfer':
      return tickets.filter((ticket) => ticket.segments[0].stops.length === 0 || ticket.segments[0].stops.length === 0);
    case 'oneTransfer':
      return tickets.filter((ticket) => ticket.segments[0].stops.length === 1 || ticket.segments[0].stops.length === 1);
    case 'twoTransfer':
      return tickets.filter((ticket) => ticket.segments[0].stops.length === 2 || ticket.segments[0].stops.length === 2);
    case 'threeTransfer':
      return tickets.filter((ticket) => ticket.segments[0].stops.length === 3 || ticket.segments[0].stops.length === 3);
    default:
      return tickets;
  }
};
