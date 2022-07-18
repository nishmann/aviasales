import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { allFilterOff, allFilterOn, changeOtherInput } from '../store/Filter/actionCreators';

const allActionCreators = {
  changeOtherInput,
  allFilterOn,
  allFilterOff,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActionCreators, dispatch);
};
