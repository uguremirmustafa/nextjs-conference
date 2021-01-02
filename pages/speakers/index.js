/** @format */

import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import PagesLayout from '@components/layouts/PagesLayout';
import SpeakerCard from '@components/SpeakerCard';
import sanity from '../../lib/sanity';

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
function Speakers({ speakers }) {
  console.log(speakers);

  return (
    <Container maxW="1024px">
      <Flex
        direction="column"
        justify="center"
        align="center"
        my="8"
        textAlign={{ base: 'start', md: 'center' }}
      >
        <Heading color="orange.400">This year's speaker list is awesome!</Heading>
        <Text fontSize="lg" my="2">
          You will learn a lot from them. You can reach them by email and social media addresses.
        </Text>
      </Flex>
      <Flex wrap="wrap" direction="row" justify="center">
        {speakers.map((speaker) => (
          <SpeakerCard speaker={speaker} />
        ))}
      </Flex>
    </Container>
  );
}
export const getStaticProps = async () => {
  const speakers = await sanity.fetch(querySpeakers);

  return {
    props: { speakers }, // will be passed to the page component as props
  };
};

Speakers.Layout = PagesLayout;
export default Speakers;
