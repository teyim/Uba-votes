import React, { ReactNode } from 'react';
import { useContext } from 'react';
import { ModalContext } from 'context/modalContext';
import CreateCampaign from './createCampaign';
import UpdateCampaign from './updateCampaign';
import { UPDATE_CAMPAIGN, CREATE_CAMPAIGN } from 'data/constants';

type CampaignProps = {
  action: string;
  showSuccessMessage: (message: string) => void;
};

function Campaign({ action, showSuccessMessage }: CampaignProps) {
  return (
    <div className=" w-screen h-screen mx-auto z-30 top-0 fixed flex justify-center content-center items-center ">
      <div className="absolute bg-black top-30 w-screen h-screen opacity-30"></div>
      <div className="z-40  shadow-md relative w-full md:w-2/3 2xl:w-2/4 max-w-2/3  h-[80%] md:h[90%] flex flex-col ring-1 rounded-md ring-gray-600 py-8 px-6 overflow-y-scroll bg-white">
        {action === CREATE_CAMPAIGN && (
          <CreateCampaign showSuccessMessage={showSuccessMessage} />
        )}
        {action === UPDATE_CAMPAIGN && <UpdateCampaign />}
      </div>
    </div>
  );
}

export default Campaign;
