/** @format */

import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import ImageCard from './ImageCard';
function SpeakerCard({ speaker }) {
  return (
    <Flex
      direction="column"
      maxW="300px"
      rounded="md"
      bgColor="white"
      fontWeight="bold"
      color="black"
      my="4"
      mx="2"
    >
      <NextLink href="#">
        <ImageCard image={speaker.image} />
      </NextLink>
      <Flex
        direction="column"
        p="8"
        border="1px lightgray solid"
        borderBottomRadius="md"
        minH="220px"
        justify="start"
      >
        <NextLink href="#">
          <Text fontSize="xl" _hover={{ color: 'orange.300' }} cursor="pointer">
            {speaker.name}
          </Text>
        </NextLink>
        <Text
          textTransform="uppercase"
          letterSpacing="1px"
          fontSize="10px"
          color="gray.600"
          mb="3"
          fontWeight="normal"
        >
          {speaker.role}
        </Text>
        <Text fontSize="sm">{speaker.company}</Text>
        <Text textTransform="lowercase" fontWeight="normal" fontSize="xs" color="gray.400" my="2">
          {speaker.email}
        </Text>
      </Flex>
    </Flex>
  );
}

export default SpeakerCard;
