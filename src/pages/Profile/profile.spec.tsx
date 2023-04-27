import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Profile from '.';
import { NativeBaseProvider } from 'native-base';
import { initialWindowMetrics } from '../../tests/utils';

const Providers: React.FC = ({ children }: any) => (
  <NativeBaseProvider initialWindowMetrics={initialWindowMetrics}>
    {children}
  </NativeBaseProvider>
);

describe('Profile', () => {
  it('should show correct user name and user company', () => {
    render(<Profile />, {
      wrapper: Providers,
    });

    expect(screen.getByText('Thiago Kachinsky')).toBeVisible();
    expect(screen.getByText('Gira')).toBeVisible();
  });

  it('should show correct user photo', () => {
    render(<Profile />, {
      wrapper: Providers,
    });

    const userImage = screen.getByTestId('user-photo');

    expect(userImage.props.alt).toBe('Profile image');
    expect(userImage.props.source.uri).toBe(
      'https://wallpaperaccess.com/full/317501.jpg'
    );
  });

  it('should show correct task resume', () => {
    render(<Profile />, {
      wrapper: Providers,
    });

    expect(screen.getByText('Resumo de tasks:')).toBeVisible();
    expect(screen.getByText('Tasks criadas')).toBeVisible();
    expect(screen.getByText('Tasks para hoje')).toBeVisible();
    expect(screen.getByText('Tasks essa semana')).toBeVisible();
    expect(screen.getByText('Tasks fáceis')).toBeVisible();
    expect(screen.getByText('Tasks médias')).toBeVisible();
    expect(screen.getByText('Tasks difíceis')).toBeVisible();
  });
});
