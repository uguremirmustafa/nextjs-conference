/** @format */

import PagesLayout from '@components/layouts/PagesLayout';
import React from 'react';
import { Text, Container, Heading, Grid, GridItem, Image, Flex } from '@chakra-ui/react';
import FoodTable from '@components/FoodTable';
import { foodImages } from 'lib/foodImages';

function Food() {
  return (
    <Container maxW="1024px">
      <Heading my="4">Meal Schedule for the Conference</Heading>
      <Grid
        templateColumns={{ base: '1fr', md: '2fr 1fr' }}
        templateRows={{ base: 'auto', md: '2fr 1fr' }}
        gap={4}
        h="800px"
      >
        <GridItem
          rowSpan={1}
          colSpan={1}
          minH={{ base: '400px' }}
          bgImage={`url(${foodImages[3].url})`}
          bgPosition="bottom"
          bgRepeat="no-repeat"
          bgSize="cover"
          style={{ boxShadow: 'inset 0 0 0 100vw rgba(255,255,255,0.9)' }}
          h="400px"
          w="100%"
          borderRadius="lg"
          padding="8"
        >
          <FoodTable />
        </GridItem>
        {foodImages.map((image) => (
          <GridItem
            bgImage={`url(${image.url})`}
            bgPosition="bottom"
            bgRepeat="no-repeat"
            bgSize="cover"
            style={{ boxShadow: 'inset 0 0 0 100vw rgba(0,0,0,0.4)' }}
            h="400px"
            w="100%"
            borderRadius="lg"
          >
            <Flex p="4" fontSize="2xl" fontWeight="bold" color="white">
              {image.alt}
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}
Food.Layout = PagesLayout;
export default Food;
