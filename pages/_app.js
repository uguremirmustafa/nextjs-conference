/** @format */

import MainLayout from '@components/layouts/MainLayout';
import '@styles/globals.css';
import 'swiper/swiper-bundle.css';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '@styles/theme';
function Application({ Component, pageProps }) {
  const Layout = Component.Layout || MainLayout;

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default Application;
