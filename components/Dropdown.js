/** @format */

import { List, ListItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import NextLink from 'next/link';
const Speakers = [
  {
    title: 'osman',
    path: '/speakers/osman',
    className: 'dropdown-link',
  },
  {
    title: 'mehmet',
    path: '/speakers/mehmet',
    className: 'dropdown-link',
  },
  {
    title: 'celal',
    path: '/speakers/celal',
    className: 'dropdown-link',
  },
];

function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <List onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {Speakers.map((speaker) => (
          <ListItem key={speaker.path}>
            <NextLink href={speaker.path} onClick={() => setClick(false)}>
              {speaker.title}
            </NextLink>
          </ListItem>
        ))}
      </List>
      <style jsx>
        {`
          .dropdown-menu {
            width: 200px;
            position: absolute;
            top: 100px;
          }
          .dropdown-menu.clicked {
            display: none;
          }
        `}
      </style>
    </>
  );
}

export default Dropdown;
//TODO: ADD DROPDOWN TO NAVBAR
