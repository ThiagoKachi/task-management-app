import React from 'react';
import { Flex, Heading, Image, Stack } from 'native-base';
import { ButtonLoginForm } from '../../components/LoginForm/Button';

export default function LoginForm() {
  return (
    <Stack
      flex="1"
      alignItems="center"
      pt="100px"
      space="80px"
      bgColor="primary"
    >
      <Flex alignItems="center">
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/6404/6404259.png',
          }}
          alt="AQUI"
          size="2xl"
        />
        <Heading
          fontSize="32px"
          fontWeight="700"
          color="white"
          textAlign="center"
          mt="16px"
        >
          TaskManagement
        </Heading>
      </Flex>
      <Stack space="24px" w="100%" alignItems="center">
        <ButtonLoginForm btnText="Login com Github" icon="github" />
        <ButtonLoginForm btnText="Login com Google" icon="google" />
      </Stack>
    </Stack>
  );
}
