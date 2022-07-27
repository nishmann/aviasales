import { FilterActionCreatorType, FilterActionTypes } from './types';

export const changeOtherInput = (name: string): FilterActionCreatorType => ({
  type: FilterActionTypes.other_input,
  payload: name,
});

export const allFilterOn = (): FilterActionCreatorType => ({
  type: FilterActionTypes.all_true,
});

export const allFilterOff = (): FilterActionCreatorType => ({
  type: FilterActionTypes.all_false,
});

export const allTransferOff = (): FilterActionCreatorType => ({
  type: FilterActionTypes.all_transfer_off,
});
