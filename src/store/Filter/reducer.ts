import { FilterActionCreatorType, FilterActionTypes, IFilterState } from './types';

const initialState: IFilterState = {
  sortedTicket: 'cheap',
  filters: [
    {
      name: 'allTransfer',
      checked: false,
      value: 'Все',
    },
    {
      name: 'withoutTransfer',
      checked: false,
      value: 'Без пересадок',
    },
    {
      name: 'oneTransfer',
      checked: false,
      value: '1 пересадка',
    },
    {
      name: 'twoTransfer',
      checked: false,
      value: '2 пересадки',
    },
    {
      name: 'threeTransfer',
      checked: false,
      value: '3 пересадки',
    },
  ],
  activeFilter: 'allTransfer',
};

const filterReducer = (state = initialState, action: FilterActionCreatorType): IFilterState => {
  switch (action.type) {
    case FilterActionTypes.all_true:
      return {
        ...state,
        filters: state.filters.map((el) => ({ ...el, checked: true })),
        activeFilter: 'allTransfer',
      };
    case FilterActionTypes.all_false:
      return {
        ...state,
        filters: state.filters.map((el) => ({ ...el, checked: false })),
        activeFilter: 'allTransfer',
      };
    case FilterActionTypes.other_input:
      return {
        ...state,
        filters: state.filters.map((el) => (el.name === action.payload ? { ...el, checked: !el.checked } : el)),
        activeFilter: action.payload,
      };
    case FilterActionTypes.all_transfer_off:
      return {
        ...state,
        filters: state.filters.map((el) => (el.name === 'allTransfer' ? { ...el, checked: false } : el)),
      };
    case FilterActionTypes.sorted_ticket:
      return {
        ...state,
        sortedTicket: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
