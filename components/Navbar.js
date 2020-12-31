/** @format */

import { Box, Flex, Heading, HStack, Image, Link, List, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 100) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      color={navbar ? 'gray.100' : 'white'}
      bgColor={navbar ? 'gray.900' : 'transparent'}
      bgGradient={navbar ? 'gray.500' : 'linear(to-b, black, transparent)'}
      h={navbar ? '80px' : '100px'}
      w="100%"
      zIndex="200"
      fontWeight="bold"
      justify="space-between"
      align="center"
      transition="ease-in all 0.3s"
      p="8"
      textTransform="capitalize"
    >
      <NextLink href="/">
        <HStack spacing="8" cursor="pointer">
          <Image src="logo.svg" h="24px" />
          <Heading size="md">next js conference | 2021</Heading>
        </HStack>
      </NextLink>

      <HStack spacing="8">
        <Link>
          <NextLink href="/location">Location</NextLink>
        </Link>
        <Link>
          <NextLink href="/food">Food</NextLink>
        </Link>
        <Link>
          <NextLink href="/speakers">Speakers</NextLink>
        </Link>
        <Link>
          <NextLink href="/schedule">Schedule</NextLink>
        </Link>
      </HStack>
    </Flex>
  );
}

export default Navbar;
