import { SelectOption } from 'types';

export type DropdownSelectProps<T> = {
  height: number;
  data: SelectOption[];
  chosenOption: (value: T) => void;
};
