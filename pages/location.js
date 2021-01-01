/** @format */

import { Flex, Heading, Text, Link, Container } from '@chakra-ui/react';
import PagesLayout from '@components/layouts/PagesLayout';
import React from 'react';
import EventMap from '@components/EventMap';

function Location() {
  return (
    <Container maxW="1024px">
      <Flex direction="column" justify="center" align="center" textAlign="center">
        <Heading
          fontSize={{ base: 'xl', md: '3xl' }}
          p="8"
          maxW={{ base: '350px', md: '600px' }}
          w="100%"
        >
          The beautiful city{' '}
          <Text fontWeight="bold" textDecoration="underline" color="green.600">
            Istanbul
          </Text>{' '}
          is the location for this year's conference.
        </Heading>
        <Text p="4">
          You can find detailed info about the conference building{' '}
          <Link color="green.600" fontWeight="bold" href="https://www.zorlupsm.com/tr">
            Zorlu PSM
          </Link>{' '}
          from their website. The building is pinned on the map!
        </Text>
        <Text mb="8">
          Address: Zorlu Center, Levazım Mah. Koru Sok. No:2/PSM/70 Zincirlikuyu, Beşiktaş /
          İstanbul
        </Text>
      </Flex>
      <EventMap />
    </Container>
  );
}
Location.Layout = PagesLayout;
export default Location;
