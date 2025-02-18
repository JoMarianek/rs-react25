import { renderHook, act } from '@testing-library/react';
import { vi, describe, it, expect, Mock } from 'vitest';
import { useCloseDetailedCard } from './useCloseDetailedCard';
import { useSearchParams } from 'react-router-dom';

vi.mock('react-router-dom', () => ({
  useSearchParams: vi.fn(),
}));

describe('useCloseDetailedCard', () => {
  it('does nothing when "details" is absent and removes "details" when present', () => {
    const fakeSearchParams1 = new URLSearchParams();
    const setSearchParamsMock1 = vi.fn();
    (useSearchParams as unknown as Mock).mockReturnValue([
      fakeSearchParams1,
      setSearchParamsMock1,
    ]);

    const { result, unmount } = renderHook(() => useCloseDetailedCard());
    act(() => {
      result.current();
    });
    expect(setSearchParamsMock1).not.toHaveBeenCalled();
    unmount();

    const fakeSearchParams2 = new URLSearchParams('details=abc&other=123');
    const setSearchParamsMock2 = vi.fn();
    (useSearchParams as unknown as Mock).mockReturnValue([
      fakeSearchParams2,
      setSearchParamsMock2,
    ]);

    const { result: result2 } = renderHook(() => useCloseDetailedCard());
    act(() => {
      result2.current();
    });

    expect(setSearchParamsMock2).toHaveBeenCalledTimes(1);
    const newParams = setSearchParamsMock2.mock.calls[0][0] as URLSearchParams;
    expect(newParams.has('details')).toBe(false);
    expect(newParams.get('other')).toBe('123');
  });
});
