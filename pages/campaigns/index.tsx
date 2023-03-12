import { NextPage } from 'next';
import Cards from '@components/UI/cards';
import { useCampaignQuery } from 'hooks';
import ComponentState from '@components/Layout/componentState';
import toast, { Toaster } from 'react-hot-toast';

const Campaigns: NextPage = () => {
  const { data, isLoading, error, isError } = useCampaignQuery();
  if (isError) {
    toast.error(error?.response?.data);
  }
  return (
    <>
      <Toaster />
      <section className="my-5 px-8 py-4 flex flex-col items-center ">
        <h2 className="text-violet-500 font-unbounded text-2xl font-semibold">
          Ongoing Campaigns
        </h2>
        <div className="md:w-1/2 my-10">
          {isLoading ? (
            <ComponentState
              currentComponent="Campaigns"
              isLoading={isLoading}
            />
          ) : (
            <Cards data={data} />
          )}
        </div>
      </section>
    </>
  );
};

export default Campaigns;
