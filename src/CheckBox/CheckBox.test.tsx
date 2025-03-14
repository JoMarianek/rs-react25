import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

import selectedCardsReducer, {
  selectIsCardSelected,
} from '../app/slices/selectedCardsSlice';
import CheckBox from './CheckBox';

const mockApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getAstronomicalObj: builder.query({
      query: () => 'dummy',
    }),
    getSingleAstronomicalObj: builder.query({
      query: () => 'dummy',
    }),
  }),
});

const mockProps = {
  uid: 'test-123',
  name: 'Test Object',
  type: 'Planet',
};

const createTestStore = (
  preloadedState = { selectedCards: { selectedCards: [] } }
) => {
  return configureStore({
    reducer: {
      api: mockApi.reducer,
      selectedCards: selectedCardsReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(mockApi.middleware),
    preloadedState,
  });
};

describe('CheckBox', () => {
  it('dispatches addCard when unchecked checkbox is clicked', () => {
    const store = createTestStore();
    const { getByRole } = render(
      <Provider store={store}>
        <CheckBox {...mockProps} />
      </Provider>
    );

    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);

    const state = store.getState();
    expect(selectIsCardSelected(mockProps.uid)(state)).toBe(true);
  });
});
