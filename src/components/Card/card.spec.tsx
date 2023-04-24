import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Card } from '.';
import { NativeBaseProvider } from 'native-base';
import { initialWindowMetrics } from '../../tests/utils';

const Providers: React.FC = ({ children }: any) => (
  <NativeBaseProvider initialWindowMetrics={initialWindowMetrics}>
    {children}
  </NativeBaseProvider>
);

const cardProps = {
  title: 'Task 1',
  date: '16 Abril',
  priority: 'medium',
};

describe('Card', () => {
  it('should render correct texts', () => {
    render(<Card {...cardProps} />, {
      wrapper: Providers,
    });

    expect(screen.getByText(/task 1/i)).toBeVisible();
    expect(screen.getByText(/Médio/i)).toBeVisible();
    expect(screen.getByText(/16 Abril/i)).toBeVisible();
  });
});
