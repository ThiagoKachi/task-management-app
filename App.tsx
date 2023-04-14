import React from 'react';
import { StatusBar } from 'react-native';
import { Box, NativeBaseProvider, Text } from 'native-base';
import { theme } from './src/styles/theme';
import {
  useFonts,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
} from '@expo-google-fonts/raleway';

export default function App() {
  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Box
        alignItems="center"
        justifyContent="center"
        flex="1"
        bgColor="primary"
      >
        <Box h="200px" w="200px" bgColor="secondary" mb="24px">
          <Text color="white" fontWeight="600" fontSize="24">
            Teste de fonte
          </Text>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}
