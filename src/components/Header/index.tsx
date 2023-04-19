import React from 'react';
import { Flex, Text } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { ProfileImage } from '../ProfileImage';

export function Header() {
  return (
    <Flex
      pt="80px"
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
      <ProfileImage />
    </Flex>
  );
}
