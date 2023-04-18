import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Flex, Text } from 'native-base';

export function TabList() {
  const [tab, setTab] = useState(1);

  return (
    <Flex
      direction="row"
      justifyContent="space-between"
      borderBottomWidth="1px"
      borderBottomStyle="solid"
      borderBottomColor="secondary"
      mt="32px"
    >
      <TouchableOpacity onPress={() => setTab(1)}>
        <Text
          color={tab === 1 ? 'secondary' : 'white'}
          fontWeight="400"
          fontSize="24px"
        >
          Todos
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTab(2)}>
        <Text
          color={tab === 2 ? 'secondary' : 'white'}
          fontWeight="400"
          fontSize="24px"
        >
          Hoje
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTab(3)}>
        <Text
          color={tab === 3 ? 'secondary' : 'white'}
          fontWeight="400"
          fontSize="24px"
        >
          Amanhã
        </Text>
      </TouchableOpacity>
    </Flex>
  );
}
