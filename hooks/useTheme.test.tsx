import { renderHook } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useTheme } from './useTheme';
import { ThemeContext, ThemeContextType } from '../contexts/ThemeContext';

describe('useTheme', () => {
  it('returns the context value provided by ThemeContext.Provider', () => {
    const customTheme: ThemeContextType = {
      theme: 'light',
      toggleTheme: () => {},
    };

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeContext.Provider value={customTheme}>
        {children}
      </ThemeContext.Provider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });
    expect(result.current).toEqual(customTheme);
  });
});
