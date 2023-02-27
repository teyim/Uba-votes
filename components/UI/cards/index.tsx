import { ICampaign } from 'api/types';
import Card from './card';

type CardsProps = {
  data: ICampaign[] | [] | undefined;
};

function Cards({ data }: CardsProps) {
  return (
    <>
      {data?.map((campaign) => (
        <Card
          id={campaign._id}
          key={campaign._id}
          department={campaign.allowedDepartment}
          school={campaign.allowedSchool}
          level={campaign.allowedLevel}
          desc={campaign.desc}
          name={campaign.name}
        />
      ))}
    </>
  );
}

export default Cards;
