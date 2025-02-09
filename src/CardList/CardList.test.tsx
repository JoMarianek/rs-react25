import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardList from './CardList';

test('renders 8 Card items', () => {
  render(
    <MemoryRouter>
      <CardList searchTerm="" />
    </MemoryRouter>
  );
  const cards = screen.getAllByRole('listitem');
  expect(cards.length).toBe(8);
});
