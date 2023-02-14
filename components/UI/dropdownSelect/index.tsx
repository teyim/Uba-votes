import Select from 'react-select';
import { DropdownSelectProps } from './types';
import { memo } from 'react';
import { SelectOption } from 'types';

function DropdownSelect({
  height,
  options,
  onChange,
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
      name="select"
      isClearable
      isSearchable={false}
      options={options}
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
      onChange={(event) => onChange(event as SelectOption)}
    ></Select>
  );
}
export default memo(DropdownSelect);
