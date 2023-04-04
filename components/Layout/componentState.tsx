import React from 'react';

type ComponentStateProps = {
  isLoading?: boolean;
  isEmpty?: boolean;
  isError?: boolean;
  currentComponent: string;
};

function ComponentState({
  isEmpty,
  isError,
  isLoading,
  currentComponent,
}: ComponentStateProps) {
  return (
    <div className="mx-auto mt-5">
      {isLoading && (
        <h1 className="text-center text-xl">
          Loading {currentComponent}......
        </h1>
      )}
      {isEmpty && <h1>No available {currentComponent}</h1>}
      {isError && <h1>Failed to fetch {currentComponent}</h1>}
    </div>
  );
}

export default ComponentState;
