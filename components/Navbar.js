/** @format */

import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  List,
  Text,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';
//TODO : REFACTOR THIS NAVBAR, IT NEEDS TO BE MORE CLEAN
function Navbar({ transparent }) {
  const [navbar, setNavbar] = useState(false);
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleToggle = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
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
    <>
      <Flex
        as="nav"
        position="fixed"
        top="0"
        left="0"
        color={navbar ? 'gray.100' : 'white'}
        // bgColor={navbar ? 'gray.900' : click ? 'gray.900' : 'transparent'}
        bgColor={{
          base: transparent
            ? navbar
              ? 'gray.900'
              : click
              ? 'gray.900'
              : 'transparent'
            : 'gray.900',
        }}
        bgGradient={transparent ? (navbar ? 'gray.500' : 'linear(to-b, black, transparent)') : ''}
        h={navbar ? '80px' : '80px'}
        w="100%"
        zIndex="200"
        fontWeight="bold"
        justify="space-between"
        align="center"
        transition="ease-in height 0.3s"
        p="8"
        textTransform="capitalize"
      >
        <NextLink href="/">
          <HStack spacing="8" cursor="pointer">
            <Image src="logo.svg" h="24px" />
            <Heading size="md" display={{ base: 'none', md: 'block' }}>
              next js conference | 2021
            </Heading>
          </HStack>
        </NextLink>
        <List
          flexDirection={{ base: 'column', md: 'row' }}
          align="end"
          transition="ease-in 0.3s all"
          display={{ base: click ? 'flex' : 'none', md: 'flex' }}
          position={{ base: 'absolute', md: 'relative' }}
          top="0"
          right="0"
          py={{ base: '100px', md: '0' }}
          bgColor={{ base: navbar ? 'gray.900' : click ? 'gray.900' : 'transparent' }}
          w={{ base: '100vw', md: 'auto' }}
          justify="center"
          align="center"
          transition="all ease 0.1s"
        >
          <ListItem
            ml="4"
            onClick={closeMobileMenu}
            _hover={{ background: 'orange.400' }}
            py="2"
            px="4"
            borderRadius={{ base: '0', md: 'sm' }}
          >
            <NextLink href="/location">Location</NextLink>
          </ListItem>
          <ListItem
            ml="4"
            onClick={closeMobileMenu}
            _hover={{ background: 'orange.400' }}
            py="2"
            px="4"
            borderRadius={{ base: '0', md: 'sm' }}
          >
            <NextLink href="/food">Food</NextLink>
          </ListItem>
          <ListItem
            ml="4"
            onClick={closeMobileMenu}
            _hover={{ background: 'orange.400' }}
            py="2"
            px="4"
            borderRadius={{ base: '0', md: 'sm' }}
          >
            <NextLink href="/speakers">Speakers</NextLink>
            {/* {dropdown && <Dropdown />} */}
          </ListItem>
          <ListItem
            ml="4"
            onClick={closeMobileMenu}
            _hover={{ background: 'orange.400' }}
            py="2"
            px="4"
            borderRadius={{ base: '0', md: 'sm' }}
          >
            <NextLink href="/schedule">Schedule</NextLink>
          </ListItem>
        </List>
        {!click ? (
          <Image
            src="square-white.svg"
            h="32px"
            onClick={handleToggle}
            className="navbar-btn"
            display={{ base: 'block', md: 'none' }}
            zIndex="100"
          />
        ) : (
          <Image
            src="close-white.svg"
            h="32px"
            onClick={handleToggle}
            className="navbar-btn"
            display={{ base: 'block', md: 'none' }}
            zIndex="100"
          />
        )}
      </Flex>
    </>
  );
}

export default Navbar;
