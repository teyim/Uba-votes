import { persist, devtools } from 'zustand/middleware';
import { create } from 'zustand';
import { IUser } from 'helpers/types';

type UserState = {
  user: IUser | null;
  setUser: (user: IUser) => void;
  clearUser: () => void;
};

export const useStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (userData: IUser) => set(() => ({ user: userData })),
        clearUser: () => set(() => ({ user: null })),
      }),
      {
        name: 'user',
      }
    )
  )
);
