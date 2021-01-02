/** @format */

import { Container, Flex, Heading } from '@chakra-ui/react';
import CountDown from '@components/CountDown';
import HeroSlider from '@components/HeroSwiper';
import SpeakerCard from '@components/SpeakerCard';
import sanity from '../lib/sanity';

const querySpeakers = `*[_type == "speaker"] {
  _id,
  name,
  slug,
  bio,
  image,
  twitter,
  facebook,
  company,
  role,
  email,
}
`;
const queryConference = `*[_type == "conference"] {
  _id,
  name,
  startingDate,
  city,
  conferenceBuilding,
  heroImages,
}
`;
export default function Home({ speakers, conference }) {
  return (
    <>
      <HeroSlider conference={conference} />
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
          {speakers.map((speaker) => (
            <SpeakerCard speaker={speaker} />
          ))}
        </Flex>
        <CountDown time="5000000" />
      </Container>
    </>
  );
}
export const getStaticProps = async () => {
  const speakers = await sanity.fetch(querySpeakers);
  const conference = await sanity.fetch(queryConference);
  return {
    props: { speakers, conference }, // will be passed to the page component as props
  };
};
