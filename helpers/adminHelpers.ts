import { adminAxiosConfig } from 'axiosConfig/adminAxiosConfig';
import { CampaignInput, adminLoginInput } from 'types';
import { GenericResponse, ICampaign } from './types';

export const login = async (user: adminLoginInput) => {
  const response = await adminAxiosConfig.post<{ token: string }>(
    'admin/login',
    user
  );
  return response.data;
};

export const getAllCampaigns = async () => {
  const response = await adminAxiosConfig.get<ICampaign[] | []>(`campaigns/`);
  return response.data;
};

export const createCampaign = async (campaignData: CampaignInput) => {
  const response = await adminAxiosConfig.post<GenericResponse>(
    'campaigns/createCampaign',
    campaignData
  );
  return response.data;
};

export const deleteCampaign = async (campaignId: string) => {
  const response = await adminAxiosConfig.delete<ICampaign>(
    `campaigns/${campaignId}`
  );
  return response.data;
};
