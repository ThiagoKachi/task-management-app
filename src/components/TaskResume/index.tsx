import { AntDesign } from '@expo/vector-icons';
import { Box, Text } from 'native-base';
import React from 'react';

interface TaskResumeProps {
  title: string;
  value: number;
}

export function TaskResume({ title, value }: TaskResumeProps) {
  return (
    <Box
      w="100%"
      mt="5"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text color="white" fontSize="lg" fontWeight="500" w="55%">
        {title}
      </Text>
      <AntDesign name="arrowright" color="#14b8a6" size={18} />
      <Text color="white" fontSize="lg" fontWeight="500">
        {value}
      </Text>
    </Box>
  );
}
