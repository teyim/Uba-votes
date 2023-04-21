/* eslint-disable @typescript-eslint/no-non-null-assertion */

import Table from '../Table';
import Button from '@components/UI/button';
import { useContext } from 'react';
import { ModalContext } from 'context/modalContext';
import Campaign from '../campaign';
import { CREATE_CAMPAIGN, UPDATE_CAMPAIGN } from 'data/constants';
import { ICampaign } from 'helpers/types';

type CampaignTabProps = {
  data: ICampaign[] | undefined;
  showSuccessMessage: (message: string) => void;
};

function Campaigns({ data, showSuccessMessage }: CampaignTabProps) {
  const { handleModal } = useContext(ModalContext);

  function getCampaignData(campaigns: ICampaign[] | [] | undefined) {
    if (campaigns) {
      return campaigns.map((campaign) => {
        const votingPositions = campaign.votingPositions;
        const numCandidates = votingPositions.reduce((total, position) => {
          return total + position.candidates.length;
        }, 0);
        const numVotes = votingPositions.reduce((total, position) => {
          return (
            total +
            position.candidates.reduce((votesTotal, candidate) => {
              return votesTotal + candidate.votes;
            }, 0)
          );
        }, 0);
        return {
          name: campaign.name,
          id: campaign._id,
          startTime: campaign.startTime,
          endTime: campaign.endTime,
          numCandidates,
          numVotes,
        };
      });
    }
  }

  return (
    <>
      <div className="px-6">
        <Button
          onClick={() =>
            handleModal(
              <Campaign
                action={CREATE_CAMPAIGN}
                showSuccessMessage={showSuccessMessage}
              />
            )
          }
        >
          Create campaign
        </Button>
        <Table
          tableHeading="All Campaigns"
          data={data}
          summaryData={getCampaignData(data)}
        />
      </div>
    </>
  );
}

export default Campaigns;
