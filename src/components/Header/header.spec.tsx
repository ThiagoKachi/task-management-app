import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Header } from '.';
import { NativeBaseProvider } from 'native-base';
import { initialWindowMetrics } from '../../tests/utils';

const Providers: React.FC = ({ children }: any) => (
  <NativeBaseProvider initialWindowMetrics={initialWindowMetrics}>
    {children}
  </NativeBaseProvider>
);

describe('Header', () => {
  it('should render logo text', () => {
    render(<Header />, {
      wrapper: Providers,
    });

    expect(screen.getByText(/taskmanagement/i)).toBeVisible();
  });

  it('should show user profile image', async () => {
    render(<Header />, {
      wrapper: Providers,
    });

    const image = screen.getByTestId('profile-image') as HTMLImageElement;

    expect(image).toBeVisible();
  });
});
