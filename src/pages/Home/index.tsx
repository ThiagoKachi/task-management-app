import React from 'react';
import { Box } from 'native-base';
import { Header } from '../../components/Header';

export default function Home() {
  return (
    <Box backgroundColor="primary" flex="1">
      <Header />
    </Box>
  );
}
