import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { TaskResume } from '.';
import { NativeBaseProvider } from 'native-base';
import { initialWindowMetrics } from '../../tests/utils';

const Providers: React.FC = ({ children }: any) => (
  <NativeBaseProvider initialWindowMetrics={initialWindowMetrics}>
    {children}
  </NativeBaseProvider>
);

describe('TaskResume', () => {
  it('should show correct texts', () => {
    render(<TaskResume title="Tasks criadas" value={100} />, {
      wrapper: Providers,
    });

    expect(screen.getByText('Tasks criadas')).toBeVisible();
    expect(screen.getByText('100')).toBeVisible();
  });
});
