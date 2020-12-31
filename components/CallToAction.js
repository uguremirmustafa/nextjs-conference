/** @format */

import { Button, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';

function CallToAction() {
  const router = useRouter();
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      textAlign="center"
      p="16"
      color="white"
      maxW="1000px"
      position="absolute"
      zIndex="5"
      top="35vh"
      left="50vw"
      style={{ transform: 'translateX(-50%)' }}
      textTransform="capitalize"
    >
      <Heading size="4xl" mb="8">
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
      <Button
        fontSize="20px"
        px="12"
        py="8"
        colorScheme="orange"
        onClick={() => router.push('/ticket')}
      >
        Buy Ticket Now
      </Button>
    </Flex>
  );
}

export default CallToAction;
