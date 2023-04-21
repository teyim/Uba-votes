/* eslint-disable @typescript-eslint/no-explicit-any */
import { SelectOption } from 'types';

export type DropdownSelectProps<T> = {
  height: number;
  options: SelectOption[];
  onChange: (value: T) => void;
  defaultValue?: T;
};
