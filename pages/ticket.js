/** @format */

import { Button, Flex, Text } from '@chakra-ui/react';
import PagesLayout from '@components/layouts/PagesLayout';
import Link from 'next/link';
import React from 'react';
import { FaRegSadCry } from 'react-icons/fa';
function Ticket() {
  return (
    <Flex justify="center" align="center" h="80vh" direction="column">
      <Text color="gray.200" my="4">
        <FaRegSadCry size="150px" />
      </Text>
      <Text>
        We are run out of tickets. You can find them on{' '}
        <Link href="https://www.biletix.com/anasayfa/TURKIYE/tr">Biletix</Link>
      </Text>
      <Button href="https://www.biletix.com/anasayfa/TURKIYE/tr" colorScheme="orange" my="4">
        Buy on Biletix
      </Button>
    </Flex>
  );
}

Ticket.Layout = PagesLayout;
export default Ticket;
