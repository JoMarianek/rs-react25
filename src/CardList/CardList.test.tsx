import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi, Mock } from 'vitest';

import CardList from './CardList';
import { fetchAstronomicalObjects } from '../services/ApiCall';

vi.mock('../services/ApiCall', () => ({
  fetchAstronomicalObjects: vi.fn(),
}));

vi.mock('./Card', () => ({
  default: ({ name }: { name: string }) => <div data-testid="card">{name}</div>,
}));

test('renders 2 Card items', async () => {
  (fetchAstronomicalObjects as Mock).mockResolvedValue([
    { name: 'Betelgeuse', astronomicalObjectType: 'planet', uid: '0' },
    { name: 'Antares', astronomicalObjectType: 'nebula', uid: '1' },
  ]);

  render(
    <MemoryRouter>
      <CardList searchTerm="" />
    </MemoryRouter>
  );
  const cards = await screen.getAllByRole('listitem');
  expect(cards.length).toBe(2);
});
