/** @format */

import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import faker, { random } from 'faker/locale/tr';
import NextLink from 'next/link';
function SpeakerCard() {
  const name = faker.name.findName();
  const jobTitle = faker.name.jobTitle();
  const image = faker.image.imageUrl();
  const email = faker.internet.email();
  const company = faker.company.companyName();
  console.log(jobTitle);
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
        <Image
          src={image}
          borderTopRadius="md"
          h="260px"
          objectFit="cover"
          transition="ease .3s all"
          _hover={{ opacity: '0.8' }}
          width="100%"
          cursor="pointer"
        />
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
            {name}
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
          {jobTitle}
        </Text>
        <Text fontSize="sm">{company}</Text>
        <Text textTransform="lowercase" fontWeight="normal" fontSize="xs" color="gray.400" my="2">
          {email}
        </Text>
      </Flex>
    </Flex>
  );
}

export default SpeakerCard;
