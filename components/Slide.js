/** @format */

import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import CallToAction from './CallToAction';

function Slide({ image }) {
  return (
    <Box>
      <Box
        position="absolute"
        h="100vh"
        w="100vw"
        bgColor="gray.900"
        style={{ filter: 'opacity(0.4)' }}
        id="filter"
      ></Box>
      <Image src={image} h="100vh" w="100%" mx="auto" objectFit="cover" />
      <CallToAction />
    </Box>
  );
}

export default Slide;
