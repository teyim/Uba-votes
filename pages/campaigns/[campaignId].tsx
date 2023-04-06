/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRouter } from 'next/router';
import { ICampaign } from 'helpers/types';
import { useCampaignQuery } from 'hooks';
import ComponentState from '@components/Layout/componentState';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { vote } from 'helpers/userHelpers';
import { useUserStore } from 'utils/storage';
import { VoteInput } from 'types';
import toast, { Toaster } from 'react-hot-toast';

function SingleCampaign() {
  const router = useRouter();
  const id = router.query.campaignId;
  const { setUser, user } = useUserStore((state) => ({
    setUser: state.setUser,
    user: state.user,
  }));

  const {
    data,
    isLoading: campaignLoading,
    error,
    isError,
  } = useCampaignQuery(user?._id as string);
  const campaign = data?.find((campaign: ICampaign) => campaign._id === id);

  const { mutate, isLoading } = useMutation(
    (voteData: VoteInput) => vote(voteData),
    {
      onSuccess(data) {
        setUser(data);
        console.log(data);
      },
    }
  );

  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  function submitHandler(data: any) {
    const voteData: VoteInput = {
      voterId: user?._id as string,
      campaignId: campaign?._id as string,
      candidates: Object.values(data),
    };
    mutate(voteData, {
      onSuccess() {
        if (user?.votes) {
          router.replace('/campaigns');
        }
      },
      onError(error: any) {
        if (Array.isArray((error as any).response.data.error)) {
          (error as any).response.data.error.forEach((el: any) =>
            toast.error(el.message)
          );
        } else {
          toast.error(error.response.data);
        }
        console.log(error);
      },
    });
  }

  return campaignLoading ? (
    <ComponentState currentComponent="Campaign" isLoading={isLoading} />
  ) : (
    <>
      <section className="my-4 md:mx-6 flex justify-center">
        <Toaster />
        <div className="w-10/12 md:w-1/2 text-center">
          <h1 className="font-unbounded text-2xl text-violet-600 font-bold my-1">
            {campaign?.name}
          </h1>
          <h1 className="text-xl text-gray-700 font-semibold my-1 ">
            {campaign?.desc}
          </h1>
          <div className="my-2">
            <form onSubmit={handleSubmit(submitHandler)}>
              {campaign?.votingPositions?.map((votingPosition) => (
                <div key={votingPosition._id}>
                  <h1 className="mt-4 text-xl text-violet-600 font-bold">
                    {votingPosition.name}
                  </h1>
                  <div className="md:grid md:grid-cols-3 md:gap-3 w-full max-w-screen-sm  ">
                    {votingPosition.candidates.map((candidate) => (
                      <div className="my-2" key={candidate._id}>
                        <input
                          {...register(votingPosition.name)}
                          className="w-4 h-4 text-violet-600 bg-gray-100 border-gray-400 focus:ring-violet-500 focus:ring-0 my-2"
                          type="radio"
                          name={votingPosition.name}
                          value={candidate._id}
                          checked
                        />
                        <label
                          className="flex flex-col p-4 border-2 border-gray-500 rounded-md "
                          htmlFor="radio_3"
                        >
                          <div>
                            <Image
                              src={candidate.image}
                              layout="fixed"
                              width={70}
                              height={70}
                              alt="user image"
                              className="rounded-full"
                            />
                          </div>
                          <span className="text-xl font-bold mt-2 uppercase">
                            {candidate.fullName}
                          </span>
                          <span className="font-">{candidate.matricule}</span>
                          <span>
                            votes
                            <span
                              className={`${
                                candidate.votes === 0
                                  ? 'text-red-500'
                                  : 'text-green-600'
                              } mx-2`}
                            >
                              {candidate.votes}
                            </span>
                          </span>
                        </label>
                        <div className="font-light underline cursor-pointer hover:font-normal">
                          View Info
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <button
                type="submit"
                className="mt-8 py-2 px-4  hover:border-2 text-black block ring-2 ring-gray-700 hover:bg-violet-600 hover:text-white rounded-md text-lg font-semibold mx-auto my-4 disabled:bg-gray-500 disabled:text-black disabled:ring-0 disabled:border-0"
                disabled={isLoading ? true : false}
              >
                {isLoading ? 'Casting Vote' : 'Cast Vote'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleCampaign;
