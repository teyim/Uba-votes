import React, { Children } from 'react';

type ButtonProps = {
  onClick: () => void;
  style?: string;
};

function Button({
  children,
  onClick,
  style,
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={`${style} bg-white shadow-sm rounded-sm border border-gray-400 py-2 px-2 my-4 hover:bg-indigo-600 hover:text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
