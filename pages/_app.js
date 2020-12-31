/** @format */

import MainLayout from '@components/layouts/MainLayout';
import '@styles/globals.css';
import 'swiper/swiper-bundle.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@styles/theme';
function Application({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}

export default Application;
