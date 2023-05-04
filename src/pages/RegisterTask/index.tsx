import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback, Button } from 'react-native';
import {
  Box,
  Divider,
  Flex,
  FormControl,
  Heading,
  Input,
  TextArea,
  VStack,
  WarningOutlineIcon,
  Button as ButtonNativeBase,
  Text,
} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  title: z.string().min(3, 'O título deve ter no mínimo 3 caracteres'),
  description: z.string().min(5, 'A descrição deve ter no mínimo 5 caracteres'),
  priority: z.enum(['low', 'medium', 'high']),
});

type FormProps = z.infer<typeof schema>;

export default function RegisterTask() {
  const [date, setDate] = useState(new Date());

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      description: '',
      priority: 'low',
    },
  });

  const onChangeDate = (event: object, selectedDate: Date | undefined) => {
    const currentDate = selectedDate;
    setDate(currentDate as Date);
  };

  function onSubmit(data: FormProps) {
    console.log({ ...data, date }, 'Deu certo!');
  }

  function handleSetPriority(
    priority: 'low' | 'medium' | 'high',
    onChange: (priority: 'low' | 'medium' | 'high') => void
  ) {
    onChange(priority);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Box flex="1" bgColor="primary" alignItems="center" pt="15%" px="16px">
        <Heading color="white" fontSize="24px" mt="16px">
          Nova task
        </Heading>

        <VStack w="90%" space={6}>
          <FormControl isInvalid={!!errors.title?.message} mt="32px">
            <FormControl.Label>Título</FormControl.Label>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
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
                  onChangeText={(text) => onChange(text)}
                  value={value}
                />
              )}
              name="title"
              defaultValue=""
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              {errors.title?.message}
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.description}>
            <FormControl.Label>Descrição</FormControl.Label>
            <Controller
              name="description"
              control={control}
              render={({ field: { onChange, value } }) => (
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
                  onChangeText={(val) => onChange(val)}
                  value={value}
                />
              )}
              defaultValue=""
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              {errors.description?.message}
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl>
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
                onChange={onChangeDate}
                themeVariant="dark"
                style={{
                  marginLeft: -22,
                  width: 200,
                }}
              />

              <AntDesign name="arrowright" color="white" size={24} />

              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="time"
                is24Hour={true}
                locale="pt-br"
                themeVariant="dark"
                onChange={onChangeDate}
              />
            </Flex>
          </FormControl>

          <FormControl isInvalid={!!errors.priority}>
            <FormControl.Label>Prioridade</FormControl.Label>
            <Controller
              name="priority"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Flex
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  bgColor="primary_light"
                  p="4px"
                  borderRadius="8px"
                >
                  <ButtonNativeBase
                    bgColor={value === 'low' ? 'secondary' : 'primary_light'}
                    w="31%"
                    p="10px"
                    borderRadius="8px"
                    onPress={() => handleSetPriority('low', onChange)}
                  >
                    <Text fontSize="16px" fontWeight="semibold" color="white">
                      Baixa
                    </Text>
                  </ButtonNativeBase>

                  <Divider orientation="vertical" h="60%" bg="gray.500" />

                  <ButtonNativeBase
                    bgColor={value === 'medium' ? 'secondary' : 'primary_light'}
                    w="31%"
                    p="10px"
                    borderRadius="8px"
                    onPress={() => handleSetPriority('medium', onChange)}
                  >
                    <Text fontSize="16px" fontWeight="semibold" color="white">
                      Médio
                    </Text>
                  </ButtonNativeBase>

                  <Divider orientation="vertical" h="60%" bg="gray.500" />

                  <ButtonNativeBase
                    bgColor={value === 'high' ? 'secondary' : 'primary_light'}
                    w="31%"
                    p="10px"
                    borderRadius="8px"
                    onPress={() => handleSetPriority('high', onChange)}
                  >
                    <Text fontSize="16px" fontWeight="semibold" color="white">
                      Alta
                    </Text>
                  </ButtonNativeBase>
                </Flex>
              )}
            />
          </FormControl>

          <Box bgColor="secondary" mt="8px" p="8px" borderRadius="8px">
            <Button
              title="Adicionar task"
              onPress={handleSubmit(onSubmit)}
              color="white"
            />
          </Box>
        </VStack>
      </Box>
    </TouchableWithoutFeedback>
  );
}
