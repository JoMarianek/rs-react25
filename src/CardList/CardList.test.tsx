import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi, Mock } from 'vitest';
import { useGetAstronomicalObjQuery } from '../services/apiSlice';

import CardList from './CardList';

vi.mock('../services/apiSlice', () => ({
  useGetAstronomicalObjQuery: vi.fn(),
}));

vi.mock('../hooks/useCloseDetailedCard', () => ({
  useCloseDetailedCard: vi.fn().mockReturnValue(() => {}),
}));

describe('CardList - displays filtered cards', () => {
  it('renders only the cards matching the search term when the query is successful', () => {
    (useGetAstronomicalObjQuery as unknown as Mock).mockReturnValue({
      data: [
        {
          uid: '1',
          name: 'Enterprise',
          astronomicalObjectType: 'Ship',
          location: { name: 'Earth', astronomicalObjectType: 'Planet' },
        },
        {
          uid: '2',
          name: 'Voyager',
          astronomicalObjectType: 'Planet',
          loaction: { name: 'Mars', astronomicalObjectType: 'Planet' },
        },
      ],
      isFetching: false,
      isSuccess: true,
      isError: false,
      error: null,
    });

    render(
      <MemoryRouter initialEntries={['/']}>
        <CardList searchTerm="enter" />
      </MemoryRouter>
    );

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Enterprise');

    expect(screen.queryByText('Voyager')).not.toBeInTheDocument();
  });
});
