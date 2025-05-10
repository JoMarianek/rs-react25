import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

import ToggleThemeButton from './ToggleThemeButton';

const mockToggleTheme = vi.fn();

vi.mock('../hooks/useTheme', () => ({
  useTheme: () => ({
    theme: 'dark',
    toggleTheme: mockToggleTheme,
  }),
}));

describe('ToggleThemeButton', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correct text based on theme and calls toggleTheme on click', () => {
    render(<ToggleThemeButton />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Light Mode');

    fireEvent.click(button);
    expect(mockToggleTheme).toHaveBeenCalled();
  });
});
