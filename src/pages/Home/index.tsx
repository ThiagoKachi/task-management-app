import React, { useState } from 'react';
import { Box, Flex, Heading } from 'native-base';
import { Header } from '../../components/Header';
import { TabList } from '../../components/TabList';

export default function Home() {
  const [tab, setTab] = useState(1);

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

      <Flex
        direction="row"
        justifyContent="space-between"
        borderBottomWidth="1px"
        borderBottomStyle="solid"
        borderBottomColor="secondary"
        mt="32px"
      >
        <TabList title="Todos" setTab={setTab} tab={1} isActive={tab === 1} />
        <TabList title="Hoje" setTab={setTab} tab={2} isActive={tab === 2} />
        <TabList title="Amanhã" setTab={setTab} tab={3} isActive={tab === 3} />
      </Flex>
    </Box>
  );
}
