import React, { useState } from 'react';
import { Box, FlatList, Flex, Heading } from 'native-base';

import { Header } from '../../components/Header';
import { Tab } from '../../components/Tab';
import { Card } from '../../components/Card';
import AddTaskButton from '../../components/AddTaskButton';

export default function Home() {
  const [tab, setTab] = useState(1);

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
  ];

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
        my="32px"
        mb="8px"
      >
        <Tab title="Todos" setTab={setTab} tab={1} isActive={tab === 1} />
        <Tab title="Hoje" setTab={setTab} tab={2} isActive={tab === 2} />
        <Tab title="Amanhã" setTab={setTab} tab={3} isActive={tab === 3} />
      </Flex>

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Card title={item.title} priority="high" date="16 Abril" />
        )}
        contentContainerStyle={{ paddingBottom: 32, gap: 16 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
      />

      <AddTaskButton />
    </Box>
  );
}
