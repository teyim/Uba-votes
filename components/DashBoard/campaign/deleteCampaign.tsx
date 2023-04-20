import Button from '@components/UI/button';
import React from 'react';
import { useContext } from 'react';
import { ModalContext } from 'context/modalContext';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { deleteCampaign } from 'helpers/adminHelpers';
import { IoMdClose } from 'react-icons/io';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';

type DeleteCampaignProps = {
  id: string;
};
function DeleteCampaign({ id }: DeleteCampaignProps) {
  const { handleModal } = useContext(ModalContext);

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation((campaignId: string) =>
    deleteCampaign(campaignId)
  );

  const campaignDeleteHandler = () => {
    mutate(id, {
      onSuccess(data) {
        queryClient.invalidateQueries(['allCampaigns']);
        handleModal();
      },
      onError(error: any) {
        if (Array.isArray((error as any).response.data.error)) {
          (error as any).response.data.error.forEach((el: any) =>
            toast.error(el?.message)
          );
        } else {
          toast.error(error?.response?.statusText);
        }
      },
    });
  };

  return (
    <div>
      <Toaster />
      <IoMdClose
        className="h-5 w-5 absolute right-5 top-5 text-red-500 cursor-pointer "
        onClick={() => handleModal()}
      />
      <h1 className="text-red-500  text-2xl text-center font-semibold">
        Warning
      </h1>
      <h1 className="tex-lg text-gray-700 text-center mt-2">
        Deleting this campaign will permanently clear all its data, and cannot
        be recovered.are you sure you want to delete the campaign?
      </h1>
      {!isLoading ? (
        <div className="mt-5 flex justify-evenly">
          <Button
            onClick={() => handleModal()}
            style="border-indigo-500 bg-indigo-500 font-semibold hover:bg-indigo-600"
          >
            Cancel
          </Button>
          <Button
            onClick={() => campaignDeleteHandler()}
            style="border-red-400 bg-red-400 hover:bg-red-500 px-4 font-semibold"
          >
            Yes
          </Button>
        </div>
      ) : (
        <h4 className="text-red-500 font-semibold text-center mt-5">
          Deleting Campaign
        </h4>
      )}
    </div>
  );
}

export default DeleteCampaign;
