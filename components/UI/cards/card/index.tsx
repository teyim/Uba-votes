import Link from 'next/link';
import { CardProps } from './types';

function Card({
  department,
  desc,
  level,
  name,
  school,
  id,
  disabled,
  hasVoted,
}: CardProps) {
  return (
    <div className="p-4 rounded-md shadow-md ring-1 ring-gray-500 my-6">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-lg font-semibold font-unbounded text-gray-800">
          {name}
        </h1>
        <h2 className="text-gray-700 my-1 text-lg font-bold">{desc}</h2>
        <div className="flex my-2">
          <div className="flex mx-1">
            <h3>School:</h3>
            <h3 className="font-semibold">{school}</h3>
          </div>
          <div className="flex mx-1">
            <h3>Department:</h3>
            <h3 className="font-semibold">{department}</h3>
          </div>
          <div className="flex mx-1">
            <h3>Level:</h3>
            <h3 className="font-semibold">{level}</h3>
          </div>
        </div>
        <div className="my-1">
          <h4>
            remaining time:<span className="text-green-600">23min</span>
          </h4>
        </div>
        {!disabled && !hasVoted && (
          <Link href={`/campaigns/${id}`}>
            <a className="py-2 px-4  hover:border-2 text-black block ring-2 ring-gray-700 hover:bg-violet-600 hover:text-white rounded-md text-lg font-semibold mx-auto my-4 disabled:bg-gray-500 disabled:text-black disabled:ring-0 disabled:border-0">
              View Campaign
            </a>
          </Link>
        )}
        {disabled && (
          <div className="text-red-600 font-medium">
            You are not Eligible to vote in this Campaign
          </div>
        )}
        {hasVoted && (
          <div className="text-violet-600 font-medium">
            You have already casted vote for this campaign, view results after
            campaign ends
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
