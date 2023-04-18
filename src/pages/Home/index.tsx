import React from 'react';
import { Box, Heading } from 'native-base';
import { Header } from '../../components/Header';
import { TabList } from '../../components/TabList';

export default function Home() {
  return (
    <Box backgroundColor="primary" flex="1" px="32px">
      <Header />
      <Heading
        color="white"
        fontSize="48px"
        fontWeight="500"
        lineHeight="50px"
        mt="32px"
      >
        Gerencie suas tasks ✏️
      </Heading>

      <TabList />
    </Box>
  );
}
