import Campaigns from 'pages/campaigns';
import React from 'react';

type ComponentStateProps = {
  isLoading?: boolean;
  isEmpty?: boolean;
  currentComponent: string;
};

function ComponentState({
  isEmpty,
  isLoading,
  currentComponent,
}: ComponentStateProps) {
  return (
    <div className="mx-auto">
      {isLoading && (
        <h1 className="text-center text-xl">
          Loading {currentComponent}......
        </h1>
      )}
      {isEmpty && <h1>No available {currentComponent}</h1>}
    </div>
  );
}

export default ComponentState;
