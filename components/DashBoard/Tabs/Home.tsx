import React from 'react';
import { MdCampaign } from 'react-icons/md';
import { BsPeopleFill } from 'react-icons/bs';
import { MdHowToVote } from 'react-icons/md';
import WelcomeBanner from '../WelcomeBanner';
import Table from '../Table';
import Button from '@components/UI/button';
import { ModalContext } from 'context/modalContext';
import { useContext } from 'react';

type HomeTabProps = {
  totalCampaigns: number;
  totalCandidates: number;
  totalVotes: number;
};

export default function Home({
  totalCampaigns,
  totalCandidates,
  totalVotes,
}: HomeTabProps) {
  const { handleModal } = useContext(ModalContext);
  const votingpositionTableHeadings = [];
  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <div className="flex justify-evenly">
          <div className="md:w-1/4 bg-white shadow-sm rounded-sm border border-gray-300 text-center p-2">
            <div className="rounded flex justify-center align-middle">
              <MdCampaign className="h-10 w-10 text-indigo-500" />
            </div>
            <h3 className="font-bold my-2 text-gray-700">Running Campaigns</h3>
            <h3 className="text-gray-500">{totalCampaigns}</h3>
          </div>
          <div className="md:w-1/4 border rounded-sm shadow-sm bg-white border-gray-300 text-center p-2">
            <div className="rounded flex justify-center align-middle">
              <BsPeopleFill className="h-10 w-10 text-indigo-500" />
            </div>
            <h3 className="font-bold my-2 text-gray-700">Candidates</h3>
            <h3 className="text-gray-500">{totalCandidates}</h3>
          </div>
          <div className="md:w-1/4 border rounded-sm shadow-sm bg-white border-gray-300 text-center p-2">
            <div className="rounded flex justify-center align-middle">
              <MdHowToVote className="h-10 w-10 text-indigo-500" />
            </div>
            <h3 className="font-bold my-2 text-gray-700">Total votes</h3>
            <h3 className="text-gray-500">{totalVotes / 2}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
