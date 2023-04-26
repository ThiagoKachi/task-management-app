import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { ProfileImage } from '.';
import { NativeBaseProvider } from 'native-base';
import { initialWindowMetrics } from '../../tests/utils';

const Providers: React.FC = ({ children }: any) => (
  <NativeBaseProvider initialWindowMetrics={initialWindowMetrics}>
    {children}
  </NativeBaseProvider>
);

describe('ProfileImage', () => {
  it('should render image with correct attributes', () => {
    render(<ProfileImage />, {
      wrapper: Providers,
    });

    const image = screen.getByTestId('profile-image');

    expect(image.props.alt).toBe('Profile image');
    expect(image.props.source.uri).toBe(
      'https://avatars.githubusercontent.com/u/61670495?v=4'
    );
  });
});
