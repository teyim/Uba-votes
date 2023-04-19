import Navbar from '@components/Layout/Navbar/navbar';
import SplashScreen from '@components/Layout/SplashScreen';
import { useUserStore } from 'utils/storage';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IUser } from 'helpers/types';
import { useEffect, useLayoutEffect } from 'react';
import { ModalProvider } from 'context/modalContext';

type LayoutProps = {
  children: React.ReactNode;
};
function Layout({ children }: LayoutProps) {
  const [userData, setUserData] = useState<IUser | null>();

  const { user } = useUserStore((state) => ({
    user: state.user,
  }));

  const router = useRouter();

  useEffect(() => {
    setUserData(user);
  }, []);

  const showNav =
    router.pathname === '/' ||
    router.pathname === '/signup' ||
    router.pathname === '/login' ||
    router.pathname === '/admin' ||
    router.pathname === '/admin/dashboard'
      ? false
      : true;

  return (
    <>
      <ModalProvider>
        <section className="overflow-hidden font-roboto">
          {showNav && <Navbar />}
          <section>{children}</section>
        </section>
      </ModalProvider>
    </>
  );
}
export default Layout;
