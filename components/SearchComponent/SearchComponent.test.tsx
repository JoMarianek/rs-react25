import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

import SearchComponent from './SearchComponent';

describe('SearchComponent', () => {
  const onSearchMock = vi.fn();

  beforeEach(() => {
    localStorage.clear();
    onSearchMock.mockClear();
  });

  it('renders input and button, uodates value, and calls onSearch with trimmed input', () => {
    render(<SearchComponent onSearch={onSearchMock} />);

    const input = screen.getByPlaceholderText('Search...') as HTMLInputElement;
    const button = screen.getByRole('button', { name: /Search/i });

    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: ' hello ' } });
    expect(input.value).toBe(' hello ');

    fireEvent.click(button);

    expect(onSearchMock).toHaveBeenCalledWith('hello');
    expect(localStorage.getItem('starTrek_searchTerm')).toBe('hello');
  });
});
