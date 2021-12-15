import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

import { Toaster } from 'react-hot-toast';
import { makeServer } from '../services/mirage';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../services/queryClient'


if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </ChakraProvider>
    </QueryClientProvider>

  );
}

export default MyApp
