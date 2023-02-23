import { authApi } from 'api/authApi';
import { GenericResponse, ICampaign, ILoginResponse, IUser } from 'api/types';
import { RegisterInput, LoginInput } from 'types';
import { storage } from '../utils/storage';

export const signUp = async (user: RegisterInput) => {
  const response = await authApi.post<GenericResponse>('voter/register', user);
  return response.data;
};

export const login = async (user: LoginInput) => {
  const response = await authApi.post<ILoginResponse>('voter/login', user);
  handleUserResponse(response.data);
  return response.data;
};

export const getCampaigns = async () => {
  const response = await authApi.get<ICampaign[] | []>('campaigns');
  return response.data;
};

function handleUserResponse(data: ILoginResponse) {
  console.log(data.user);
  storage.setUser(data.user);
}

export function logoutFn() {
  storage.clearUser();
}
