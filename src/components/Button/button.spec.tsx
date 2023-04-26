import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import Button from '.';
import { NativeBaseProvider } from 'native-base';
import { initialWindowMetrics } from '../../tests/utils';

const Providers: React.FC = ({ children }: any) => (
  <NativeBaseProvider initialWindowMetrics={initialWindowMetrics}>
    {children}
  </NativeBaseProvider>
);

const buttonProps = {
  text: 'Baixa',
  priority: 'low',
  setPriority: jest.fn(),
  isSelected: false,
};

describe('Button', () => {
  it('should render correct texts and color', () => {
    render(<Button {...buttonProps} />, {
      wrapper: Providers,
    });

    const button = screen.getByRole('button', { name: /Baixa/i });

    expect(screen.getByText(/Baixa/i)).toBeVisible();
    expect(button.props.style.backgroundColor).toBe('primary_light');
  });

  it('should when click in button, call setPriority with correct values', () => {
    render(<Button {...buttonProps} />, {
      wrapper: Providers,
    });

    const button = screen.getByText(/Baixa/i);
    fireEvent.press(button);

    expect(buttonProps.setPriority).toHaveBeenCalled();
    expect(buttonProps.setPriority).toHaveBeenCalledTimes(1);
    expect(buttonProps.setPriority).toHaveBeenCalledWith('low');
  });

  it('should change button color when button is selected', () => {
    const buttonSelectedProps = {
      ...buttonProps,
      isSelected: true,
    };

    render(<Button {...buttonSelectedProps} />, {
      wrapper: Providers,
    });

    const button = screen.getByRole('button', { name: /Baixa/i });

    expect(button.props.style.backgroundColor).not.toBe('primary_light');
  });
});
