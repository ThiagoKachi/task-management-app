import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { Tab } from '.';
import { NativeBaseProvider } from 'native-base';
import { initialWindowMetrics } from '../../tests/utils';

const Providers: React.FC = ({ children }: any) => (
  <NativeBaseProvider initialWindowMetrics={initialWindowMetrics}>
    {children}
  </NativeBaseProvider>
);

const tabPropsMock = {
  tab: 1,
  setTab: jest.fn(),
  title: 'Todos',
  isActive: true,
};

describe('TabList', () => {
  it('should show tabs', () => {
    render(<Tab {...tabPropsMock} />, {
      wrapper: Providers,
    });

    expect(screen.getByText('Todos')).toBeVisible();
  });

  it('should change tab style when is clicked', () => {
    render(<Tab {...tabPropsMock} />, {
      wrapper: Providers,
    });

    const allBtn = screen.getByText('Todos');

    fireEvent.press(allBtn);

    expect(allBtn.props.style.color).not.toBe('#FFFFFF');
  });

  it('should change status when click in tab', () => {
    render(<Tab {...tabPropsMock} />, {
      wrapper: Providers,
    });

    const allBtn = screen.getByText('Todos');

    fireEvent.press(allBtn);

    expect(tabPropsMock.setTab).toHaveBeenCalled();
    expect(tabPropsMock.setTab).toHaveBeenCalledWith(1);
  });
});
