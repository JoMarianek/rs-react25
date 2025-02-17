import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Pagination from './Pagination';
import { ITEMS_PER_PAGE } from '../config';

describe('Pagination component', () => {
  it('renders the correct number of page buttons wiht proper links', () => {
    render(
      <MemoryRouter>
        <Pagination />
      </MemoryRouter>
    );

    const totalElements = 24;
    const totalPages = Math.ceil(totalElements / ITEMS_PER_PAGE);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(totalPages);

    buttons.forEach((button, index) => {
      const pageNumber = index + 1;
      expect(button).toHaveTextContent(String(pageNumber));

      const link = button.closest('a');
      expect(link).toHaveAttribute('href', `/?page=${pageNumber}`);
    });
  });
});
