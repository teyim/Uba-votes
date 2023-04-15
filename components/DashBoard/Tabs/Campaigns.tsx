/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { FilteredCampaign } from 'types';
import Table from '../Table';

type CampaignTabProps = {
  data: () => FilteredCampaign[] | undefined;
};

function Campaigns({ data }: CampaignTabProps) {
  const filteredCampaigns = data();
  return (
    <>
      <div className="px-6">
        <Table tableHeading="All Campaigns" data={filteredCampaigns} />
      </div>
    </>
  );
}

export default Campaigns;
