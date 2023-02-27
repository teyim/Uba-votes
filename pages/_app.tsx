/* eslint-disable react-hooks/exhaustive-deps */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from 'HOC/layout';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState, useEffect } from 'react';
import { useStore } from 'utils/storage';
import { useRouter } from 'next/router';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      retry: 1,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const { user } = useStore((state) => ({
    user: state.user,
  }));

  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/campaigns' && !user) {
      router.replace('/');
    }
  }, [user]);
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
