/** @format */

import React from 'react';
import { Box, Flex, Heading, HStack, Button, Text } from '@chakra-ui/react';

function Slide({ image }) {
  return (
    <Box>
      <Flex
        direction="column"
        justify="center"
        align="center"
        textAlign="center"
        height={{
          base: '70vh', // 0-48em
          md: '100vh', // 48em-80em,
        }}
        w="100%"
        color="white"
        zIndex="5"
        textTransform="capitalize"
        bgImage={`url(${image})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        style={{ boxShadow: 'inset 0 0 0 100vw rgba(0,0,0,0.5)' }}
      >
        <Heading mb="8" fontSize={{ base: '34px', md: '40px', lg: '56px' }}>
          next js conference
        </Heading>
        <HStack mb="8" spacing="4" color="gray.100" cursor="pointer">
          <Flex justify="center" align="center" _hover={{ color: 'orange.400' }}>
            <Text ml="2"> January 20, 2020</Text>
          </Flex>
          <Flex justify="center" align="center" _hover={{ color: 'orange.400' }}>
            <Text ml="2">Istanbul</Text>
          </Flex>
          <Flex justify="center" align="center" _hover={{ color: 'orange.400' }}>
            <Text ml="2">Zorlu PSM</Text>
          </Flex>
        </HStack>
        <Button size="lg" colorScheme="orange" onClick={() => router.push('/ticket')}>
          Buy Ticket Now
        </Button>
      </Flex>
    </Box>
  );
}

export default Slide;
