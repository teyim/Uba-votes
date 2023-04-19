/* eslint-disable react-hooks/exhaustive-deps */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from 'HOC/layout';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect } from 'react';
import { useUserStore } from 'utils/storage';
import { useRouter } from 'next/router';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import 'react-datetime-picker/dist/DateTimePicker.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      retry: 1,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const { user } = useUserStore((state) => ({
    user: state.user,
  }));

  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/campaigns' && !user) {
      router.replace('/');
    }
    if (
      (router.pathname === '/login' && user) ||
      (router.pathname === '/signup' && user)
    ) {
      router.replace('/campaigns');
    }
  }, [user, router.pathname]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
