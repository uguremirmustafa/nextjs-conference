/** @format */

import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Container,
  List,
  ListItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Heading,
} from '@chakra-ui/react';
function FoodTable() {
  return (
    <>
      <Box>
        <Tabs>
          <TabList justifyContent="center">
            <Tab>Friday</Tab>
            <Tab>Saturday</Tab>
            <Tab>Sunday</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Accordion>
                <AccordionItem>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Breakfast
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <List>
                      <ListItem fontWeight="bold" textDecoration="underline">
                        8.30 - 10.00
                      </ListItem>
                      <ListItem>Fried Patato</ListItem>
                      <ListItem>Boiled Egg</ListItem>
                      <ListItem>Jambon</ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Lunch
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <List>
                      <ListItem fontWeight="bold" textDecoration="underline">
                        12.30 - 14.00
                      </ListItem>
                      <ListItem>Somon Fume</ListItem>
                      <ListItem>Chicken Soup</ListItem>
                      <ListItem>Rice</ListItem>
                      <ListItem>Ice Cream and Baklava</ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Dinner
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <List>
                      <ListItem fontWeight="bold" textDecoration="underline">
                        18.30 - 20.00
                      </ListItem>
                      <ListItem>Somon Fume</ListItem>
                      <ListItem>Chicken Soup</ListItem>
                      <ListItem>Rice</ListItem>
                      <ListItem>Ice Cream and Baklava</ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </TabPanel>
            <TabPanel>
              <Accordion>
                <AccordionItem>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Breakfast
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <List>
                      <ListItem fontWeight="bold" textDecoration="underline">
                        8.30 - 10.00
                      </ListItem>
                      <ListItem>Fried Patato</ListItem>
                      <ListItem>Boiled Egg</ListItem>
                      <ListItem>Jambon</ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Lunch
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <List>
                      <ListItem fontWeight="bold" textDecoration="underline">
                        12.30 - 14.00
                      </ListItem>
                      <ListItem>Somon Fume</ListItem>
                      <ListItem>Chicken Soup</ListItem>
                      <ListItem>Rice</ListItem>
                      <ListItem>Ice Cream and Baklava</ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Dinner
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <List>
                      <ListItem fontWeight="bold" textDecoration="underline">
                        18.30 - 20.00
                      </ListItem>
                      <ListItem>Somon Fume</ListItem>
                      <ListItem>Chicken Soup</ListItem>
                      <ListItem>Rice</ListItem>
                      <ListItem>Ice Cream and Baklava</ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </TabPanel>
            <TabPanel>
              <Accordion>
                <AccordionItem>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Breakfast
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <List>
                      <ListItem fontWeight="bold" textDecoration="underline">
                        8.30 - 10.00
                      </ListItem>
                      <ListItem>Fried Patato</ListItem>
                      <ListItem>Boiled Egg</ListItem>
                      <ListItem>Jambon</ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Lunch
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <List>
                      <ListItem fontWeight="bold" textDecoration="underline">
                        12.30 - 14.00
                      </ListItem>
                      <ListItem>Somon Fume</ListItem>
                      <ListItem>Chicken Soup</ListItem>
                      <ListItem>Rice</ListItem>
                      <ListItem>Ice Cream and Baklava</ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Dinner
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <List>
                      <ListItem fontWeight="bold" textDecoration="underline">
                        18.30 - 20.00
                      </ListItem>
                      <ListItem>Somon Fume</ListItem>
                      <ListItem>Chicken Soup</ListItem>
                      <ListItem>Rice</ListItem>
                      <ListItem>Ice Cream and Baklava</ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

export default FoodTable;
