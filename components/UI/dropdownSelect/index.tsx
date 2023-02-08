import Select from 'react-select';
import { DropdownSelectProps } from './types';

export default function DropdownSelect({
  height,
  data,
  chosenOption,
}: DropdownSelectProps) {
  const inputStyle = () => ({
    alignItems: 'center',
    display: 'flex',
    height: height,
  });
  const colourStyles = {
    input: (styles: object) => ({ ...styles, ...inputStyle() }),
  };

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
      onChange={(value) => chosenOption(value)}
    ></Select>
  );
}
