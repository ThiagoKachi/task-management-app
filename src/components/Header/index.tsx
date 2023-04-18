import React from 'react';
import { Flex, Image, Text } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';

export function Header() {
  return (
    <Flex
      py="80px"
      px="32px"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex direction="row" alignItems="center">
        <FontAwesome5 name="tasks" size={24} color="white" />
        <Text color="white" fontSize="18px" fontWeight="600" ml="8px">
          TaskManagement
        </Text>
      </Flex>
      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/61670495?v=4' }}
        alt="Profile image"
        size={12}
        borderRadius="50px"
        testID="profile-image"
      />
    </Flex>
  );
}
