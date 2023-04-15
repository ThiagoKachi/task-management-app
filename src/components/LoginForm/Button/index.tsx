import React from 'react';
import { Button, Text } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

interface ButtonLoginFormProps {
  icon: 'github' | 'google';
  btnText: string;
}

export function ButtonLoginForm({ btnText, icon }: ButtonLoginFormProps) {
  return (
    <Button
      w="80%"
      bgColor="secondary"
      py="16px"
      leftIcon={<AntDesign name={icon} size={32} color="white" />}
    >
      <Text fontSize="16px" fontWeight="600" color="white" ml="16px">
        {btnText}
      </Text>
    </Button>
  );
}
