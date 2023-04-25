import React from 'react';
import { Box, Flex, Text } from 'native-base';
import { ProfileImage } from '../ProfileImage';
import { AntDesign } from '@expo/vector-icons';
import { decodePriority } from '../../utils/decodePriority';

interface CardProps {
  title: string;
  date: string;
  priority: string;
}

export function Card({ title, priority, date }: CardProps) {
  return (
    <Box
      mt="16px"
      w="100%"
      bgColor={priority === 'high' ? 'secondary' : 'primary_light'}
      borderRadius="16px"
      py="16px"
      px="24px"
    >
      <Flex direction="row" alignItems="center" justifyContent="space-between">
        <Box py="4px" px="24px" bgColor="white" borderRadius="2xl">
          <Text fontWeight="600" color="gray.600">
            {decodePriority(priority)}
          </Text>
        </Box>
        <ProfileImage />
      </Flex>

      <Text color="white" fontWeight="600" fontSize="20px" mt="8px">
        {title}
      </Text>

      <Flex direction="row" alignItems="center" mt="16px">
        <AntDesign name="calendar" size={20} color="white" />
        <Text color="white" ml="8px" fontWeight="600">
          {date}
        </Text>
      </Flex>
    </Box>
  );
}
