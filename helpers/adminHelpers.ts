import { adminAxiosConfig } from 'axiosConfig/adminAxiosConfig';
import { adminLoginInput } from 'types';
import { ICampaign } from './types';

export const login = async (user: adminLoginInput) => {
  const response = await adminAxiosConfig.post<{ token: string }>(
    'admin/login',
    user
  );
  return response.data;
};

export const getAllCampaigns = async () => {
  const response = await adminAxiosConfig.get<ICampaign[] | []>(
    `campaigns/`
  );
  return response.data;
};
