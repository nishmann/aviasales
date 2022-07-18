import { ActionType, FilterActionTypes } from './types';

export const changeOtherInput = (name: string): ActionType => ({
  type: FilterActionTypes.other_input,
  payload: name,
});

export const allFilterOn = (): ActionType => ({
  type: FilterActionTypes.all_true,
});
export const allFilterOff = (): ActionType => ({
  type: FilterActionTypes.all_false,
});
