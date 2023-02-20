import { authApi } from 'api/authApi';
import { GenericResponse, ICampaign, ILoginResponse } from 'api/types';
import { RegisterInput, LoginInput } from 'types';

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
