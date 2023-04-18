import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { TabList } from '.';
import { NativeBaseProvider } from 'native-base';
import { initialWindowMetrics } from '../../tests/utils';

const Providers: React.FC = ({ children }: any) => (
  <NativeBaseProvider initialWindowMetrics={initialWindowMetrics}>
    {children}
  </NativeBaseProvider>
);

describe('TabList', () => {
  it('should show tabs', () => {
    render(<TabList />, {
      wrapper: Providers,
    });

    expect(screen.getByText('Todos')).toBeVisible();
    expect(screen.getByText('Hoje')).toBeVisible();
    expect(screen.getByText('Amanhã')).toBeVisible();
  });

  fit('should change tab style when is clicked', () => {
    render(<TabList />, {
      wrapper: Providers,
    });

    const allBtn = screen.getByText('Todos');
    const todayBtn = screen.getByText('Hoje');
    const tomorrowBtn = screen.getByText('Amanhã');

    fireEvent.press(todayBtn);

    expect(todayBtn.props.style.color).not.toBe('#FFFFFF');
    expect(allBtn.props.style.color).toBe('#FFFFFF');
    expect(tomorrowBtn.props.style.color).toBe('#FFFFFF');
  });
});
