import { ICampaign } from 'helpers/types';
import Card from './card';
import { useUserStore } from 'utils/storage';

type CardsProps = {
  data: ICampaign[] | [];
};

function Cards({ data }: CardsProps) {
  const { user } = useUserStore((state) => ({
    user: state.user,
  }));

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
          disabled={
            campaign.allowedSchool !== user?.school ||
            campaign.allowedDepartment !== user?.department ||
            campaign.allowedLevel !== user?.level
          }
          hasVoted={user?.votes?.find(
            (vote) => vote.campaignId === campaign._id
          )}
          voteEndTime={campaign.endTime}
          voteStartTime={campaign.startTime}
        />
      ))}
    </>
  );
}

export default Cards;
