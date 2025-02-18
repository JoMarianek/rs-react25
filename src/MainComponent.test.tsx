import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import MainComponent from './MainComponent';

vi.mock('./Pagination/Pagination', () => ({
  __esModule: true,
  default: Object.assign(() => <div data-testid="pagination" />, {
    displayName: 'MockPagination',
  }),
}));

vi.mock('./CardList/CardList', () => ({
  __esModule: true,
  default: Object.assign(
    ({ searchTerm }: { searchTerm: string }) => (
      <div data-testid="card-list">{searchTerm}</div>
    ),
    { displayName: 'MockCardList' }
  ),
}));

vi.mock('./ToggleTheme/ToggleThemeButton', () => ({
  __esModule: true,
  default: Object.assign(
    () => <button data-testid="toggle-theme">Toggle</button>,
    { displayName: 'MockToggleThemeButton' }
  ),
}));

describe('MainComponent', () => {
  beforeEach(() => {
    localStorage.setItem('starTrek_searchTerm', 'testTerm');
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('render header and main content correctly', () => {
    render(
      <MemoryRouter>
        <MainComponent />
      </MemoryRouter>
    );

    expect(screen.getByTestId('toggle-theme')).toBeInTheDocument();

    expect(screen.getByTestId('card-list')).toHaveTextContent('testTerm');

    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });
});
