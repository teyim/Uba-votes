/* eslint-disable react-hooks/exhaustive-deps */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from 'HOC/layout';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SplashScreen from '@components/Layout/SplashScreen';
import { useStore } from '../utils/storage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      retry: 1,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useStore((state) => ({
    user: state.user,
  }));

  useEffect(() => {
    setIsLoading(true);
    if (router.pathname === '/campaigns' && !user) {
      router.replace('/');
    }
    setIsLoading(false);
  }, [user]);

  return isLoading ? (
    <SplashScreen />
  ) : (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
