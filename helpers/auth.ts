import { authApi } from 'api/authApi';
import { GenericResponse } from 'api/types';
import { RegisterInput } from 'types';

export const signUp = async (user: RegisterInput) => {
  const response = await authApi.post<GenericResponse>('voter/register', user);
  return response.data;
};
