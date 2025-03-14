import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { describe, it, expect } from 'vitest';
import selectedCardsReducer from '../app/slices/selectedCardsSlice';

import Card from './Card';

const store = configureStore({
  reducer: {
    selectedCards: selectedCardsReducer,
  },
});

const mockSetSearchParams = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useSearchParams: () => [new URLSearchParams(), mockSetSearchParams],
  };
});

describe('Card component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the card with the correct name and type', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Card name="Enterprise" type="Ship" uid="123" />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByRole('heading')).toHaveTextContent('Enterprise');
    expect(screen.getByText(/ship/i)).toBeInTheDocument();
  });

  it('updates URL params when card is clicked', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Card name="Enterprise" type="Ship" uid="123" />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByTestId('card-container'));

    expect(mockSetSearchParams).toHaveBeenCalledTimes(1);
    const newParams = new URLSearchParams();
    newParams.set('details', '123');
    expect(mockSetSearchParams).toHaveBeenCalledWith(newParams);
  });
});
