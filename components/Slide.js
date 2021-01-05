/** @format */

import React from 'react';
import { Box, Flex, Heading, Button, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import imageUrlFor from 'utils/imageUrlFor';
import { FaCalendarCheck, FaRegBuilding, FaMapMarkerAlt } from 'react-icons/fa';
function Slide({ image, conf }) {
  const router = useRouter();
  const imgUrl = imageUrlFor(image).ignoreImageParams();
  const confDate = new Date(conf.startingDate).toLocaleDateString('en-EN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <Box>
      <Flex
        direction="column"
        justify="center"
        align="center"
        textAlign="center"
        height="100vh"
        w="100%"
        color="white"
        zIndex="5"
        textTransform="capitalize"
        bgImage={`url(${imgUrl})`}
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        style={{ boxShadow: 'inset 0 0 0 100vw rgba(0,0,0,0.6)' }}
      >
        <Heading
          mb="8"
          fontSize={{ base: '34px', md: '44px', lg: '56px' }}
          w={{ base: '200px', md: '600px' }}
        >
          next js conference
        </Heading>
        <Flex mb="8" color="gray.100" cursor="pointer" direction={{ base: 'column', md: 'row' }}>
          <Flex p="4" justify="center" align="center" _hover={{ color: 'orange.400' }}>
            <Flex align="center">
              <FaCalendarCheck />
              <Text p="2">{confDate}</Text>
            </Flex>
          </Flex>
          <Flex p="4" justify="center" align="center" _hover={{ color: 'orange.400' }}>
            <Flex align="center">
              <FaMapMarkerAlt />
              <Text p="2">{conf.city}</Text>
            </Flex>
          </Flex>
          <Flex p="4" justify="center" align="center" _hover={{ color: 'orange.400' }}>
            <Flex align="center">
              <FaRegBuilding />
              <Text p="2">{conf.conferenceBuilding}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Button size="md" colorScheme="orange" onClick={() => router.push('/ticket')}>
          Buy Ticket Now
        </Button>
      </Flex>
    </Box>
  );
}

export default Slide;
