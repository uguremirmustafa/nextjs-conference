/** @format */

import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import imageUrlFor from '../utils/imageUrlFor';
function ImageCard({ image }) {
  const imgUrl = imageUrlFor(image).ignoreImageParams().width(400);
  return (
    <Box>
      <Image
        src={imgUrl}
        borderTopRadius="md"
        w="100%"
        h="400px"
        objectFit="cover"
        objectPosition="top"
        transition="ease .3s all"
        _hover={{ opacity: '0.8' }}
        cursor="pointer"
      />
    </Box>
  );
}

export default ImageCard;
