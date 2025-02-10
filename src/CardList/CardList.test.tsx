import '@testing-library/jest-dom';
import { expect, it, describe, vi, Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import CardList from './CardList';
import { fetchAstronomicalObjects } from '../services/ApiCall';

vi.mock('../services/ApiCall', () => ({
  fetchAstronomicalObjects: vi.fn(),
}));

vi.mock('./Card', () => ({
  default: ({ name }: { name: string }) => <div data-testid="card">{name}</div>,
}));

describe('CardList', () => {
  it('renders 2 Card items', async () => {
    const mockData = [
      { name: 'Betelgeuse', astronomicalObjectType: 'planet', uid: '0' },
      { name: 'Antares', astronomicalObjectType: 'nebula', uid: '1' },
    ];

    (fetchAstronomicalObjects as unknown as Mock).mockResolvedValue(mockData);

    render(
      <MemoryRouter>
        <CardList searchTerm="" />
      </MemoryRouter>
    );
    const cards = await screen.findAllByTestId('card');
    expect(cards.length).toBe(2);
  });
});
