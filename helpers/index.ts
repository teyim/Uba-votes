import { authApi } from 'api/authApi';
import {
  campaignResult,
  GenericResponse,
  ICampaign,
  ILoginResponse,
  IUser,
} from 'helpers/types';
import { RegisterInput, LoginInput, VoteInput } from 'types';

export const signUp = async (user: RegisterInput) => {
  const response = await authApi.post<GenericResponse>('voter/register', user);
  return response.data;
};

export const login = async (user: LoginInput) => {
  const response = await authApi.post<ILoginResponse>('voter/login', user);
  return response.data;
};

export const getCampaigns = async () => {
  const response = await authApi.get<ICampaign[] | []>('campaigns');
  return response.data;
};

export const vote = async (voteData: VoteInput) => {
  const response = await authApi.post<IUser>('vote', voteData);
  return response.data;
};

export const getCampaignResults = async (campaignId: string) => {
  console.log(campaignId);
  const response = await authApi.get<campaignResult[]>(
    `campaigns/${campaignId}/result`
  );
  return response.data;
};
