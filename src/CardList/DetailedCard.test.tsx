import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi, Mock } from 'vitest';

import DetailedCard from './DetailedCard';
import { useGetSingleAstronomicalObjQuery } from '../services/apiSlice';

vi.mock('../services/apiSlice', () => ({
  useGetSingleAstronomicalObjQuery: vi.fn(),
}));

vi.mock('../hooks/useCloseDetailedCard', () => ({
  useCloseDetailedCard: vi.fn().mockReturnValue(() => {}),
}));

describe('DetailedCard -displays data correctly', () => {
  it('renders the data when the query is successful', () => {
    (useGetSingleAstronomicalObjQuery as unknown as Mock).mockReturnValue({
      data: {
        name: 'Betelgeuse',
        astronomicalObjectType: 'STAR',
        location: { name: 'Orion', astronomicalObjectType: 'CONSTELLATION' },
      },
      isFetching: false,
      isSuccess: true,
      isError: false,
      error: null,
    });

    render(
      <MemoryRouter initialEntries={['/?details=123']}>
        <DetailedCard />
      </MemoryRouter>
    );

    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toHaveTextContent('Betelgeuse');

    const detailText = screen.getByText(
      /This STAR is located in the Orion, which is of type CONSTELLATION/i
    );
    expect(detailText).toBeInTheDocument();
  });
});
