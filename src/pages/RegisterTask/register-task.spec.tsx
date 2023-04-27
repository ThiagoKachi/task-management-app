import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import RegisterTask from '.';
import { NativeBaseProvider } from 'native-base';
import { initialWindowMetrics } from '../../tests/utils';

const Providers: React.FC = ({ children }: any) => (
  <NativeBaseProvider initialWindowMetrics={initialWindowMetrics}>
    {children}
  </NativeBaseProvider>
);

describe('RegisterTask', () => {
  it('should render correct heading text', () => {
    render(<RegisterTask />, {
      wrapper: Providers,
    });

    expect(screen.getByText('Nova task')).toBeVisible();
  });

  it('should render title and description inputs', () => {
    render(<RegisterTask />, {
      wrapper: Providers,
    });

    const titleInput = screen.getByPlaceholderText('Digite o título da task');
    const descriptionInput = screen.getByPlaceholderText(
      'Digite uma breve descrição da task'
    );

    expect(titleInput).toBeVisible();
    expect(descriptionInput).toBeVisible();
  });

  it('should render date e time inputs', () => {
    render(<RegisterTask />, {
      wrapper: Providers,
    });

    const dateInput = screen.getAllByTestId('dateTimePicker');

    expect(dateInput[0]).toBeVisible();
    expect(dateInput[1]).toBeVisible();
  });

  it('should render priority buttons and change priority when clicked', () => {
    render(<RegisterTask />, {
      wrapper: Providers,
    });

    const lowPriorityButton = screen.getByRole('button', {
      name: /baixa/i,
    });
    const mediumPriorityButton = screen.getByRole('button', {
      name: /médio/i,
    });
    const highPriorityButton = screen.getByRole('button', {
      name: /alta/i,
    });

    expect(lowPriorityButton).toBeVisible();
    expect(mediumPriorityButton).toBeVisible();
    expect(highPriorityButton).toBeVisible();

    fireEvent.press(lowPriorityButton);
    expect(lowPriorityButton).not.toHaveStyle({ backgroundColor: '#FFFFFF' });
    expect(mediumPriorityButton).toHaveStyle({
      backgroundColor: 'primary_light',
    });
    expect(highPriorityButton).toHaveStyle({
      backgroundColor: 'primary_light',
    });

    fireEvent.press(mediumPriorityButton);
    expect(lowPriorityButton).toHaveStyle({ backgroundColor: 'primary_light' });
    expect(mediumPriorityButton).not.toHaveStyle({
      backgroundColor: '#FFFFFF',
    });
    expect(highPriorityButton).toHaveStyle({
      backgroundColor: 'primary_light',
    });

    fireEvent.press(highPriorityButton);
    expect(lowPriorityButton).toHaveStyle({ backgroundColor: 'primary_light' });
    expect(mediumPriorityButton).toHaveStyle({
      backgroundColor: 'primary_light',
    });
    expect(highPriorityButton).not.toHaveStyle({ backgroundColor: '#FFFFFF' });
  });

  it('should render submit button', () => {
    render(<RegisterTask />, {
      wrapper: Providers,
    });

    const submitButton = screen.getByRole('button', {
      name: /adicionar task/i,
    });

    expect(submitButton).toBeVisible();
  });
});
