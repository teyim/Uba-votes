import { persist, devtools } from 'zustand/middleware';
import { create } from 'zustand';
import { IUser } from 'helpers/types';

type UserState = {
  user: IUser | null;
  setUser: (user: IUser) => void;
  clearUser: () => void;
};

type AdminState = {
  adminToken: string | null;
  setAdminToken: (token: string) => void;
  clearAdminToken: () => void;
};

export const useUserStore = create<UserState>()(
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

export const useAdminStore = create<AdminState>()(
  devtools(
    persist(
      (set) => ({
        adminToken: null,
        setAdminToken: (token: string) => set(() => ({ adminToken: token })),
        clearAdminToken: () => set(() => ({ adminToken: null })),
      }),
      {
        name: 'adminToken',
      }
    )
  )
);
