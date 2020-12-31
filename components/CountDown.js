/** @format */
import { Box, Button, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Countdown from 'react-countdown';
import React from 'react';

function CountDown({ time }) {
  const router = useRouter();
  const timeLeft = parseInt(time);
  const Completionist = () => <Text>Sorry, you have missed the event! See you next year!</Text>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <Box textAlign="center">
          <Text fontSize="6xl" fontWeight="bold" textAlign="center" fontFamily="Monospace" pt="8">
            {hours}:{minutes}:{seconds}
          </Text>
          <Text fontSize="xl">left to the event, hurry up!</Text>
          <Button
            fontSize="20px"
            px="12"
            py="8"
            mt="4"
            colorScheme="orange"
            onClick={() => router.push('/ticket')}
          >
            Buy Ticket Now
          </Button>
        </Box>
      );
    }
  };

  return (
    <>
      <Countdown date={Date.now() + timeLeft} renderer={renderer} />
    </>
  );
}

export default CountDown;
