/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { FilteredCampaign } from 'types';
import Table from '../Table';
import Button from '@components/UI/button';
import { useContext } from 'react';
import { ModalContext } from 'context/modalContext';
import Campaign from '../campaign';
import { CREATE_CAMPAIGN, UPDATE_CAMPAIGN } from 'data/constants';

type CampaignTabProps = {
  data: () => FilteredCampaign[] | undefined;
  showSuccessMessage: (message: string) => void;
};

function Campaigns({ data, showSuccessMessage }: CampaignTabProps) {
  const { handleModal } = useContext(ModalContext);
  const filteredCampaigns = data();
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
        <Table tableHeading="All Campaigns" data={filteredCampaigns} />
      </div>
    </>
  );
}

export default Campaigns;
