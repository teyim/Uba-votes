import { ICampaign } from 'api/types';
import Card from './card';

function Cards(data: ICampaign[]) {
  return (
    <>
      {data.map((campaign) => (
        <Card
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
