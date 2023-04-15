import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { ButtonLoginForm } from '.';
import { NativeBaseProvider } from 'native-base';
import { initialWindowMetrics } from '../../../tests/utils';

const Providers: React.FC = ({ children }: any) => (
  <NativeBaseProvider initialWindowMetrics={initialWindowMetrics}>
    {children}
  </NativeBaseProvider>
);

describe('ButtonLoginForm component', () => {
  it('should be able to render a button', () => {
    render(<ButtonLoginForm btnText="Login" icon="github" />, {
      wrapper: Providers,
    });

    expect(screen.getByText('Login')).toBeVisible();
  });
});
