import React from 'react';
import { StatusBar } from 'react-native';
import { NativeBaseProvider, Text } from 'native-base';
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

      <Text>Open up App.js to start working on your app!</Text>
    </NativeBaseProvider>
  );
}
