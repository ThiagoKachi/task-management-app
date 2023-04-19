import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'native-base';

interface TabListProps {
  tab: number;
  setTab: (tab: number) => void;
  title: string;
  isActive: boolean;
}

export function Tab({ setTab, tab, title, isActive }: TabListProps) {
  return (
    <TouchableOpacity onPress={() => setTab(tab)}>
      <Text
        color={isActive ? 'secondary' : 'white'}
        fontWeight="400"
        fontSize="24px"
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
