import { ICampaign } from 'helpers/types';
import React from 'react';
import { CampaignSummary } from 'types';
import moment from 'moment';
import { AiFillEdit } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';
import { useContext } from 'react';
import { ModalContext } from 'context/modalContext';
import Campaign from './campaign';
import { DELETE_CAMPAIGN, UPDATE_CAMPAIGN } from 'data/constants';
import { Toaster, toast } from 'react-hot-toast';

type TableProps = {
  tableHeading: string;
  summaryData: CampaignSummary[] | undefined;
  data: ICampaign[] | undefined;
};

function showCampaignUpdateSuccessMessage(message: string) {
  toast.success(message);
}

function Table({ tableHeading, data, summaryData }: TableProps) {
  const { handleModal } = useContext(ModalContext);
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-gray-400 overflow-x-scroll mt-3 max-h-96 overflow-y-scroll">
      <Toaster />
      {tableHeading && (
        <header className="px-5 py-4 border-b border-gray-400">
          <h2 className="font-semibold text-gray-800">{tableHeading}</h2>
        </header>
      )}
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto border-separate">
          <table className="table-auto w-full ">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-500 bg-gray-200 rounded-sm">
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
              {summaryData?.map((campaign) => (
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
                        'DD/MM/YYYY h:mm:ss a'
                      )}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-light-blue-500">
                      {moment(campaign.endTime).format('DD/MM/YYYY h:mm:ss a')}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-indigo-600 hover:underline cursor-pointer">
                      <AiFillEdit
                        className="w-5 h-5"
                        onClick={() =>
                          handleModal(
                            <Campaign
                              action={UPDATE_CAMPAIGN}
                              campaignData={data?.find(
                                (c) => c?._id === campaign?.id
                              )}
                              showSuccessMessage={(message) =>
                                showCampaignUpdateSuccessMessage(message)
                              }
                            />
                          )
                        }
                      />
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-red-500 hover:underline cursor-pointer">
                      <MdDeleteForever
                        className="w-5 h-5"
                        onClick={() =>
                          handleModal(
                            <Campaign
                              action={DELETE_CAMPAIGN}
                              campaignData={data?.find(
                                (c) => c?._id === campaign?.id
                              )}
                            />
                          )
                        }
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
