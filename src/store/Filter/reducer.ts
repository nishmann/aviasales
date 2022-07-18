import { ActionType, FilterActionTypes, IFilterState } from './types';

const initialState: IFilterState = {
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
};

const filterReducer = (state = initialState, action: ActionType): IFilterState => {
  switch (action.type) {
    case FilterActionTypes.all_true:
      return {
        ...state,
        filters: state.filters.map((el) => ({ ...el, checked: true })),
      };
    case FilterActionTypes.all_false:
      return {
        ...state,
        filters: state.filters.map((el) => ({ ...el, checked: false })),
      };
    case FilterActionTypes.other_input:
      return {
        ...state,
        filters: state.filters.map((el) => (el.name === action.payload ? { ...el, checked: !el.checked } : el)),
      };
    default:
      return state;
  }
};

export default filterReducer;
