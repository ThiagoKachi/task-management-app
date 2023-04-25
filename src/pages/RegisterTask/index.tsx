import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
  TextArea,
  VStack,
  WarningOutlineIcon,
} from 'native-base';
import ButtonComponent from '../../components/Button';

export default function RegisterTask() {
  const [priority, setPriority] = useState('low');

  return (
    <Box flex="1" bgColor="primary" alignItems="center" pt="52px" px="16px">
      <Heading color="white" fontSize="24px" mt="16px">
        Nova task
      </Heading>

      <VStack w="90%" space={8}>
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
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
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
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Campo obrigatório
          </FormControl.ErrorMessage>
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

        <Button
          bgColor="secondary"
          borderRadius="8px"
          onPress={() => console.log('aqui')}
        >
          <Text fontSize="18px" fontWeight="600" color="white">
            Adicionar task
          </Text>
        </Button>
      </VStack>
    </Box>
  );
}
