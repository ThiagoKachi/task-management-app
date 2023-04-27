import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import {
  Box,
  Flex,
  FormControl,
  Heading,
  Input,
  TextArea,
  VStack,
  WarningOutlineIcon,
} from 'native-base';
import ButtonComponent from '../../components/Button';
import ButtonLoginForm from '../../components/LoginForm/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';

export default function RegisterTask() {
  const [priority, setPriority] = useState('low');
  const [date, setDate] = useState(new Date());

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Box h="100%" bgColor="primary" alignItems="center" pt="15%" px="16px">
        <Heading color="white" fontSize="24px" mt="16px">
          Nova task
        </Heading>

        <VStack w="90%" space={6}>
          <FormControl isInvalid={false} mt="32px">
            <FormControl.Label>Título</FormControl.Label>
            <Input
              placeholder="Digite o título da task"
              p="16px"
              fontSize="16px"
              color="white"
              borderWidth="0"
              borderRadius="8px"
              fontWeight="500"
              bgColor="primary_light"
              autoCorrect={false}
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Campo obrigatório
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl isInvalid={false}>
            <FormControl.Label>Descrição</FormControl.Label>
            <TextArea
              placeholder="Digite uma breve descrição da task"
              p="16px"
              h="132px"
              fontSize="16px"
              color="white"
              fontWeight="500"
              borderWidth="0"
              borderRadius="8px"
              bgColor="primary_light"
              autoCompleteType={'off'}
              autoCorrect={false}
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Campo obrigatório
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl isInvalid={false}>
            <FormControl.Label>Data máxima</FormControl.Label>
            <Flex
              w="100%"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                is24Hour={true}
                locale="pt-br"
                onChange={onChange}
                style={{ marginLeft: -14, width: 200 }}
              />

              <AntDesign name="arrowright" color="white" size={24} />

              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="time"
                is24Hour={true}
                locale="pt-br"
                onChange={onChange}
              />
            </Flex>
          </FormControl>

          <FormControl isInvalid={false}>
            <FormControl.Label>Prioridade</FormControl.Label>
            <Flex
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              bgColor="primary_light"
              p="4px"
              borderRadius="8px"
            >
              <ButtonComponent
                text="Baixa"
                setPriority={setPriority}
                priority="low"
                isSelected={priority === 'low'}
              />
              <ButtonComponent
                text="Médio"
                setPriority={setPriority}
                priority="medium"
                isSelected={priority === 'medium'}
              />
              <ButtonComponent
                text="Alta"
                setPriority={setPriority}
                priority="high"
                isSelected={priority === 'high'}
              />
            </Flex>
          </FormControl>

          <ButtonLoginForm
            btnText="Adicionar task"
            onpress={() => console.log('teste')}
            showIcon={false}
            w="100%"
            mt="8px"
          />
        </VStack>
      </Box>
    </TouchableWithoutFeedback>
  );
}
