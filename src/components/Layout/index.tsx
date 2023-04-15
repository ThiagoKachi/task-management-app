import React from 'react';
import { Box, NativeBaseProvider } from 'native-base';
import { theme } from '../../styles/theme';
import { StatusBar } from 'react-native';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Box flex="1" bgColor="primary">
        {children}
      </Box>
    </NativeBaseProvider>
  );
}
