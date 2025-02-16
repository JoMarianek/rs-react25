import '@testing-library/jest-dom';
import { expect, it, describe, vi, Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import CardList from './CardList';
import { fetchAstronomicalObjects } from '../services/ApiCall';
import { Provider } from 'react-redux';
import { store } from '../app/store';

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
      <Provider store={store}>
        <MemoryRouter>
          <CardList searchTerm="" />
        </MemoryRouter>
      </Provider>
    );
    const cards = await screen.findAllByTestId('card');
    expect(cards.length).toBe(8);
  });
});
