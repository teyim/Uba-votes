import React from 'react';
import Table from '../Table';

function Candidates() {
  return (
    <div className="px-6">
      <Table tableHeading="All Candidates" data={[]} />
    </div>
  );
}

export default Candidates;
