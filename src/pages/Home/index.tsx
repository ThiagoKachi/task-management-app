import React, { useState } from 'react';
import { Box, Flex, Heading } from 'native-base';

import { Header } from '../../components/Header';
import { Tab } from '../../components/Tab';
import { Card } from '../../components/Card';

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
        my="32px"
        mb="8px"
      >
        <Tab title="Todos" setTab={setTab} tab={1} isActive={tab === 1} />
        <Tab title="Hoje" setTab={setTab} tab={2} isActive={tab === 2} />
        <Tab title="Amanhã" setTab={setTab} tab={3} isActive={tab === 3} />
      </Flex>

      <Card title="Criar um novo projeto" priority="Médio" date="16 Abril" />
    </Box>
  );
}
