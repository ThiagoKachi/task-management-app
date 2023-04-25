import React from 'react';
import { Fab, Icon, Center } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type NavigationProps = {
  navigate: (screen: string) => void;
};

export default function AddTaskButton() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <Center>
      <Fab
        renderInPortal={false}
        shadow={3}
        size="xs"
        bgColor="primary_light"
        borderColor="primary_light"
        borderWidth="2px"
        padding="16px"
        icon={<Icon color="white" as={AntDesign} name="plus" size="lg" />}
        onPress={() => navigation.navigate('RegisterTask')}
      />
    </Center>
  );
}
