/** @format */
import { Box, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

function EventMap() {
  const zorluPSM = [41.06721126540689, 29.01769857112217];
  const [viewport, setViewport] = useState({
    latitude: 41.06721126540689,
    longitude: 29.01769857112217,
    zoom: 12,
    width: '100%',
    height: 'calc(100vh - 80px)',
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={
        'pk.eyJ1IjoidWd1cmVtaXJtdXN0YWZhIiwiYSI6ImNramVneWFrcTA1enkyem83Y2pzZXF3MDYifQ.Mrq7wSl611z75-oQToYGEw'
      }
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
      mapStyle="mapbox://styles/uguremirmustafa/ckjeh9awien0119mqj59ftuh3"
    >
      <Marker key={'yolo'} latitude={zorluPSM[0]} longitude={zorluPSM[1]}>
        <Image
          src={'next.svg'}
          w={{ base: '80px', md: '128px' }}
          backgroundColor="black"
          py="2"
          px="4"
          borderRadius="md"
          border="4px solid #507c69"
          alt="nextjs logo"
        />

        {/* <Popup latitude={zorluPSM[0]} longitude={zorluPSM[1]} offsetLeft="2">
          Zorlu Center, Levazım Mah. Koru Sok. No:2/PSM/70 Zincirlikuyu, Beşiktaş / İstanbul
        </Popup> */}
      </Marker>
    </ReactMapGL>
  );
}

export default EventMap;
