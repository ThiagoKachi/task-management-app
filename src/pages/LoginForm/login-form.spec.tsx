import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import LoginForm from '.';
import { NativeBaseProvider } from 'native-base';
import { initialWindowMetrics } from '../../tests/utils';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

const Providers: React.FC = ({ children }: any) => (
  <NativeBaseProvider initialWindowMetrics={initialWindowMetrics}>
    {children}
  </NativeBaseProvider>
);

describe('LoginForm', () => {
  it('should render heading text and logo', () => {
    render(<LoginForm />, {
      wrapper: Providers,
    });

    const logo = screen.getByTestId('app-logo');

    expect(screen.getByText('TaskManagement')).toBeVisible();
    expect(logo.props.alt).toBe('app-logo');
    expect(logo.props.source.uri).toBe(
      'https://cdn-icons-png.flaticon.com/512/6404/6404259.png'
    );
  });

  it('should render login buttons', () => {
    render(<LoginForm />, {
      wrapper: Providers,
    });

    expect(screen.getByText('Login com Github')).toBeVisible();
    expect(screen.getByText('Login com Google')).toBeVisible();
  });
});
