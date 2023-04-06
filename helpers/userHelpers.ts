import { userAxiosConfig } from 'axiosConfig/userAxiosConfig';
import {
  campaignResult,
  GenericResponse,
  ICampaign,
  ILoginResponse,
  IUser,
} from 'helpers/types';
import { RegisterInput, userLoginInput, VoteInput } from 'types';

export const signUp = async (user: RegisterInput) => {
  const response = await userAxiosConfig.post<GenericResponse>(
    'voter/register',
    user
  );
  return response.data;
};

export const login = async (user: userLoginInput) => {
  const response = await userAxiosConfig.post<ILoginResponse>(
    'voter/login',
    user
  );
  return response.data;
};

export const getCampaigns = async (userId: string) => {
  const response = await userAxiosConfig.get<ICampaign[] | []>(
    `campaigns/${userId}`
  );
  return response.data;
};

export const vote = async (voteData: VoteInput) => {
  const response = await userAxiosConfig.post<IUser>('vote', voteData);
  return response.data;
};

export const getCampaignResults = async (campaignId: string) => {
  console.log(campaignId);
  const response = await userAxiosConfig.get<campaignResult[]>(
    `campaigns/${campaignId}/result`
  );
  return response.data;
};
