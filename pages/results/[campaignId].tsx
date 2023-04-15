import { useResultQuery } from 'hooks/userHooks';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import ComponentState from '@components/Layout/componentState';
import Image from 'next/image';
import { campaignResult } from 'helpers/types';
import { useLayoutEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';
const Results: NextPage = () => {
  const router = useRouter();

  const id = router.query.campaignId as string;

  const { data, isLoading, error, isError } = useResultQuery(id as string);

  if (isError) {
    toast.error(error?.response?.data);
  }

  return isLoading ? (
    <ComponentState currentComponent="Campaign Results" isLoading={isLoading} />
  ) : (
    <>
      <Toaster />
      <section className="my-5 px-8 py-4 flex flex-col items-center ">
        <Link passHref href="/campaigns">
          <a className="p-1 px-3 rounded-md border-2 border-gray-700 flex justify-center align-middle my-4 hover:bg-gray-700 hover:text-white">
            <BiArrowBack className="my-auto mx-2" />
            Back
          </a>
        </Link>
        <h2 className="text-violet-500 font-unbounded text-2xl font-semibold">
          Campaign Results
        </h2>
        <div className="md:w-1/5 my-10">
          {data?.map((votingPosition: campaignResult) => (
            <div
              key={votingPosition._id}
              className="p-3 bg-gray-100 border-gray-400  my-2 flex flex-col justify-center content-center text-center"
            >
              <h1 className="my-4 text-xl text-violet-600 font-bold">
                {votingPosition.positionName}
              </h1>
              <div>
                <Image
                  src={votingPosition.candidateImg}
                  layout="fixed"
                  width={70}
                  height={70}
                  alt="user image"
                  className="rounded-full"
                />
              </div>
              <span className="text-xl font-bold mt-2 uppercase">
                {votingPosition.candidateName}
              </span>
              <span>
                votes
                <span className="text-violet-600 mx-2">
                  {votingPosition.votes}
                </span>
              </span>
              <div className="font-light underline cursor-pointer hover:font-normal">
                View Info
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Results;
