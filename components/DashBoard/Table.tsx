import { ICampaign } from 'helpers/types';
import React from 'react';
import { FilteredCampaign } from 'types';
import moment from 'moment';

type TableProps = {
  tableHeading: string;
  data: FilteredCampaign[] | undefined;
};

function Table({ tableHeading, data }: TableProps) {
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-gray-200 overflow-x-scroll mt-8">
      {tableHeading && (
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">{tableHeading}</h2>
        </header>
      )}
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto border-separate">
          <table className="table-auto w-full bborder-spacing-y-10">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 bg-gray-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Candidates</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Votes</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Start time</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">End time</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-gray-100">
              {/* Row */}
              {data?.map((campaign) => (
                <tr key={campaign.id}>
                  <td className="p-2">
                    <div className="text-gray-800">{campaign.name}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{campaign.numCandidates}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-green-500">
                      {campaign.numVotes / 2}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">
                      {moment(campaign.startTime).format(
                        'MMMM Do YYYY, h:mm:ss a'
                      )}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-light-blue-500">
                      {moment(campaign.endTime).format(
                        'MMMM Do YYYY, h:mm:ss a'
                      )}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-blue-500 hover:underline cursor-pointer">
                      Edit
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-red-500 hover:underline cursor-pointer">
                      Delete
                    </div>
                  </td>
                </tr>
              ))}

              {/* Row */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
