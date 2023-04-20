import React, { ReactNode } from 'react';
import { useContext } from 'react';
import { ModalContext } from 'context/modalContext';
import CreateCampaign from './createCampaign';
import UpdateCampaign from './updateCampaign';
import {
  UPDATE_CAMPAIGN,
  CREATE_CAMPAIGN,
  DELETE_CAMPAIGN,
} from 'data/constants';
import DeleteCampaign from './deleteCampaign';

type CampaignProps = {
  action: string;
  showSuccessMessage?: (message: string) => void;
  campaignId?: string;
};

function Campaign({ action, showSuccessMessage, campaignId }: CampaignProps) {
  return (
    <div className=" w-screen h-screen mx-auto z-30 top-0 fixed flex justify-center content-center items-center ">
      <div className="absolute bg-black top-30 w-screen h-screen opacity-30"></div>
      <div
        className={` ${
          action === DELETE_CAMPAIGN
            ? 'md:w-[400px] md:h-[300px]'
            : 'md:w-2/3 2xl:w-2/4 overflow-y-scroll'
        } z-40  shadow-md relative w-full  max-w-2/3  h-[80%] md:h[90%] flex flex-col ring-1 rounded-md ring-gray-600 py-8 px-6  bg-white`}
      >
        {action === CREATE_CAMPAIGN && showSuccessMessage && (
          <CreateCampaign showSuccessMessage={showSuccessMessage} />
        )}
        {action === UPDATE_CAMPAIGN && <UpdateCampaign />}
        {action === DELETE_CAMPAIGN && campaignId && (
          <DeleteCampaign id={campaignId} />
        )}
      </div>
    </div>
  );
}

export default Campaign;
