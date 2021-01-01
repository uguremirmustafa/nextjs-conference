/** @format */

import React from 'react';
import { Box, Flex, Heading, HStack, Button, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

function Slide({ image }) {
  const router = useRouter();
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
        bgImage={`url(${image})`}
        bgPosition="center"
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
            <Text>January 20, 2020</Text>
          </Flex>
          <Flex p="4" justify="center" align="center" _hover={{ color: 'orange.400' }}>
            <Text>Istanbul</Text>
          </Flex>
          <Flex p="4" justify="center" align="center" _hover={{ color: 'orange.400' }}>
            <Text>Zorlu PSM</Text>
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
