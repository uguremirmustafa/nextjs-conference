/** @format */

import { Container, Flex, Heading } from '@chakra-ui/react';
import CountDown from '@components/CountDown';
import HeroSlider from '@components/HeroSwiper';
import SpeakerCard from '@components/SpeakerCard';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Container maxW="1024px" my="16">
        <Heading
          textAlign="center"
          fontSize="5xl"
          textDecoration="underline"
          mt="8"
          mb="4"
          _hover={{ color: 'orange.400' }}
        >
          Speakers
        </Heading>
        <Flex wrap="wrap" direction="row" justify="center">
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
        </Flex>
        <CountDown time="5000000" />
      </Container>
    </>
  );
}
