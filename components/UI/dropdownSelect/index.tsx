import Select from 'react-select';
import { DropdownSelectProps } from './types';
import { memo } from 'react';
import { SelectOption } from 'types';

function DropdownSelect({
  height,
  data,
  chosenOption,
}: DropdownSelectProps<SelectOption>) {
  const inputStyle = () => ({
    alignItems: 'center',
    display: 'flex',
    height: height,
  });
  const colourStyles = {
    input: (styles: object) => ({ ...styles, ...inputStyle() }),
  };
  console.log('child');

  return (
    <Select
      options={data}
      styles={colourStyles}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: '#a78bfa',
          primary: 'black',
        },
      })}
      required
      onChange={(event) => chosenOption(event as SelectOption)}
    ></Select>
  );
}
export default memo(DropdownSelect);
