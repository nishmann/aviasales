export enum FilterActionTypes {
  all_true = 'ALL_ON',
  all_false = 'ALL_OFF',
  other_input = 'OTHER_INPUT',
  all_transfer_off = 'ALL_TRANSFER_OFF',
}

export interface IElement {
  name: string;
  checked: boolean;
  value: string;
}

export interface IFilterState {
  filters: IElement[];
}

interface AllTransferOff {
  type: FilterActionTypes.all_transfer_off;
}

interface AllFilterOnAction {
  type: FilterActionTypes.all_true;
}

interface AllFilterOffAction {
  type: FilterActionTypes.all_false;
}

interface ChangeOtherInputAction {
  type: FilterActionTypes.other_input;
  payload: string;
}

export type FilterActionCreatorType = AllFilterOnAction | AllFilterOffAction | ChangeOtherInputAction | AllTransferOff;
