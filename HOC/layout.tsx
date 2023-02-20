import Navbar from '@components/Layout/Navbar/navbar';
import { useRouter } from 'next/router';

type LayoutProps = {
  children: React.ReactNode;
};
function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const showNav =
    router.pathname === '/' ||
    router.pathname === '/signup' ||
    router.pathname === '/login' ||
    router.pathname === '/admin'
      ? false
      : true;
  return (
    <section className="overflow-hidden font-roboto">
      {showNav && <Navbar />}
      <section>{children}</section>
    </section>
  );
}
export default Layout;
