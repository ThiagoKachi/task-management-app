import React from 'react';
import { Button, Text } from 'native-base';

interface ButtonComponentProps {
  text: string;
  priority: string;
  setPriority: (priority: string) => void;
  isSelected: boolean;
}

export default function ButtonComponent({
  text,
  priority,
  setPriority,
  isSelected,
}: ButtonComponentProps) {
  return (
    <Button
      bgColor={isSelected ? 'secondary' : 'primary_light'}
      w="31%"
      p="10px"
      borderRadius="8px"
      onPress={() => setPriority(priority)}
    >
      <Text fontSize="16px" fontWeight="semibold" color="white">
        {text}
      </Text>
    </Button>
  );
}
