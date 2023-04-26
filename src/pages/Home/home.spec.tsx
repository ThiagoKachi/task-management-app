import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import Home from '.';
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

describe('Home', () => {
  it('should render heading text', () => {
    render(<Home />, {
      wrapper: Providers,
    });

    expect(screen.getByText('Gerencie suas tasks ✏️')).toBeVisible();
  });

  it('should render tab options and change color when is clicked', () => {
    render(<Home />, {
      wrapper: Providers,
    });

    const tab1 = screen.getByText('Todos');
    const tab2 = screen.getByText('Hoje');
    const tab3 = screen.getByText('Amanhã');

    expect(tab1).not.toHaveStyle({ color: '#FFFFFF' });
    expect(tab2).toHaveStyle({ color: '#FFFFFF' });
    expect(tab3).toHaveStyle({ color: '#FFFFFF' });

    fireEvent.press(tab2);

    expect(tab2).not.toHaveStyle({ color: '#FFFFFF' });
    expect(tab1).toHaveStyle({ color: '#FFFFFF' });
    expect(tab3).toHaveStyle({ color: '#FFFFFF' });

    fireEvent.press(tab3);

    expect(tab3).not.toHaveStyle({ color: '#FFFFFF' });
    expect(tab1).toHaveStyle({ color: '#FFFFFF' });
    expect(tab2).toHaveStyle({ color: '#FFFFFF' });
  });

  it('should render card in screen', () => {
    render(<Home />, {
      wrapper: Providers,
    });

    const card = screen.getByText('First Item');

    expect(card).toBeVisible();
  });

  it('should render addtaskbutton in home', () => {
    render(<Home />, {
      wrapper: Providers,
    });

    expect(screen.getByTestId('add-task-button')).toBeVisible();
  });
});
