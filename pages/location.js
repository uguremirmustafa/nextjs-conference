/** @format */

import { Flex, Heading, Text, Link, Container } from '@chakra-ui/react';
import PagesLayout from '@components/layouts/PagesLayout';
import React from 'react';
import EventMap from '@components/EventMap';
import sanity from '../lib/sanity';

const queryConference = `*[_type == "conference"] {
  city,
  conferenceBuilding,
  address
}
`;
function Location({ conference }) {
  const conf = conference[0];
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
            {conf.city}
          </Text>{' '}
          is the location for this year's conference.
        </Heading>
        <Text p="4">
          You can find detailed info about the conference building{' '}
          <Link color="green.600" fontWeight="bold" href="https://www.zorlupsm.com/tr">
            {conf.conferenceBuilding}
          </Link>{' '}
          from their website. The building is pinned on the map!
        </Text>
        <Text mb="8">Address: {conf.address}</Text>
      </Flex>
      <EventMap />
    </Container>
  );
}
export const getStaticProps = async () => {
  const conference = await sanity.fetch(queryConference);
  return {
    props: { conference }, // will be passed to the page component as props
  };
};
Location.Layout = PagesLayout;
export default Location;
