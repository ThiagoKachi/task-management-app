import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import ButtonLoginForm from '.';
import { NativeBaseProvider } from 'native-base';
import { initialWindowMetrics } from '../../../tests/utils';

const Providers: React.FC = ({ children }: any) => (
  <NativeBaseProvider initialWindowMetrics={initialWindowMetrics}>
    {children}
  </NativeBaseProvider>
);

describe('ButtonLoginForm component', () => {
  const mockFn = jest.fn();
  it('should be able to render a button', () => {
    render(<ButtonLoginForm btnText="Login" icon="github" onpress={mockFn} />, {
      wrapper: Providers,
    });

    expect(screen.getByText('Login')).toBeVisible();
  });

  it('should execute a function when button is clicked', () => {
    const mockFn = jest.fn();
    render(<ButtonLoginForm btnText="Login" icon="github" onpress={mockFn} />, {
      wrapper: Providers,
    });

    const button = screen.getAllByTestId('button-login-form')[0];
    fireEvent.press(button);

    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
