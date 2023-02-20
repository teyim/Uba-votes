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
    <div>
      {isLoading && <h1>Loading {currentComponent}......</h1>}
      {isEmpty && <h1>No available {currentComponent}</h1>}
    </div>
  );
}

export default ComponentState;
