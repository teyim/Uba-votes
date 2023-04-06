import { adminAxiosConfig } from 'axiosConfig/adminAxiosConfig';
import { adminuserLoginInput } from 'types';

export const login = async (user: adminuserLoginInput) => {
  const response = await adminAxiosConfig.post<{ token: string }>(
    'admin/login',
    user
  );
  return response.data;
};
