import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TicketActionCreators } from '../store/Ticket/actionCreators';

type bindActionCreatorsType = ReturnType<typeof bindActionCreators>;

export const useActions = (): bindActionCreatorsType => {
  const dispatch = useDispatch();
  return bindActionCreators(TicketActionCreators, dispatch);
};
