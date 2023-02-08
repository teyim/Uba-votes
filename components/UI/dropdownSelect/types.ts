import { SelectOption } from 'types';

export type DropdownSelectProps = {
  height: number;
  data: SelectOption[];
  chosenOption: (value: SelectOption | null) => void;
};
