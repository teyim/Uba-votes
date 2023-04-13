import React from 'react';
import {MdCampaign} from 'react-icons/md'
import { BsPeopleFill } from 'react-icons/bs';
import { MdHowToVote } from 'react-icons/md';
import WelcomeBanner from '../WelcomeBanner';
import Table from '../Table';


export default function Home() {

  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <div className='flex justify-evenly'>
          <div className='md:w-1/4 border-2 rounded-sm shadow-sm bg-white text-center p-2'>
            <div className='rounded flex justify-center align-middle'>
            <MdCampaign className='h-10 w-10 text-indigo-500'/>
            </div>
            <h3 className='font-bold my-2'>Running Campaigns</h3>
            <h3 >1234</h3>
          </div>
          <div className='md:w-1/4 border-2 rounded-sm shadow-sm bg-white text-center p-2'>
            <div className='rounded flex justify-center align-middle'>
            <BsPeopleFill className='h-10 w-10 text-indigo-500'/>
            </div>
            <h3 className='font-bold my-2'>Candidates</h3>
            <h3 >1234</h3>
          </div>
          <div className='md:w-1/4 border-2 rounded-sm shadow-sm bg-white text-center p-2'>
            <div className='rounded flex justify-center align-middle'>
            <MdHowToVote className='h-10 w-10 text-indigo-500'/>
            </div>
            <h3 className='font-bold my-2'>Total votes</h3>
            <h3 >1234</h3>
          </div>
        </div>
       {/*table*/}
       <Table tableHeading="All Running Campaigns"/>
      </div>
    </div>
  );
}
