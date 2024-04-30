'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const QueryWrapper = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10 * 60 * 1000, // 10분
        cacheTime: 15 * 60 * 1000, // 15분
        refetchOnMount: false, // mount 시
        refetchOnReconnect: false, // 네트워크 재연결 시
        refetchOnWindowFocus: false, // 화면 focus 시
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryWrapper;
