import { IUser } from 'api/types';

export const storage = {
  getUser: () => JSON.parse(window.localStorage.getItem('userData') || 'null'),
  setUser: (data: IUser) =>
    window.localStorage.setItem('userData', JSON.stringify(data)),
  clearUser: () => window.localStorage.removeItem('userData'),
};
