import React from 'react';
import { Box, Center, Heading, Image, Text, VStack } from 'native-base';
import { TaskResume } from '../../components/TaskResume';

export default function Profile() {
  return (
    <Box h="100%" bgColor="primary" pt="30%" px="32px">
      <Center>
        <Image
          size={150}
          borderRadius={100}
          source={{
            uri: 'https://wallpaperaccess.com/full/317501.jpg',
          }}
          alt="Profile image"
          testID="user-photo"
        />
        <Text color="white" fontSize="3xl" fontWeight="500" mt="6">
          Thiago Kachinsky
        </Text>
        <Text color="white" fontSize="xl" fontWeight="500" mt="1">
          Gira
        </Text>

        <Box w="100%" alignItems="left" mt="32px">
          <Heading fontSize="18px" color="secondary" fontWeight="600">
            Resumo de tasks:
          </Heading>
          <VStack space="8px">
            <TaskResume title="Tasks criadas" value={100} />
            <TaskResume title="Tasks para hoje" value={100} />
            <TaskResume title="Tasks essa semana" value={100} />
            <TaskResume title="Tasks fáceis" value={100} />
            <TaskResume title="Tasks médias" value={100} />
            <TaskResume title="Tasks difíceis" value={100} />
          </VStack>
        </Box>
      </Center>
    </Box>
  );
}
