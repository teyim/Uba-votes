import Navbar from '@components/Layout/Navbar/navbar';
import SplashScreen from '@components/Layout/SplashScreen';
import { useStore } from 'utils/storage';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IUser } from 'api/types';
import { useEffect } from 'react';

type LayoutProps = {
  children: React.ReactNode;
};
function Layout({ children }: LayoutProps) {
  const [userData, setUserData] = useState<IUser | null>();
  const { user } = useStore((state) => ({
    user: state.user,
  }));

  useEffect(() => {
    setUserData(user);
  }, []);

  const router = useRouter();
  const showNav =
    router.pathname === '/' ||
    router.pathname === '/signup' ||
    router.pathname === '/login' ||
    router.pathname === '/admin'
      ? false
      : true;

  const showSplashScreen = router.pathname === '/campaigns' && !userData;

  return (
    <>
      {showSplashScreen ? (
        <SplashScreen />
      ) : (
        <section className="overflow-hidden font-roboto">
          {showNav && <Navbar />}
          <section>{children}</section>
        </section>
      )}
    </>
  );
}
export default Layout;
