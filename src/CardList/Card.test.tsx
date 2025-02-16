import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from './Card';

describe('Card component', () => {
  it('renders the card with the correct name and type', () => {
    render(
      <MemoryRouter>
        <Card name="Antares" type="Nebula" uid="1" />
      </MemoryRouter>
    );

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Antares');

    const paragraph = screen.getByText(/This astronomical object is of type:/i);
    expect(paragraph).toHaveTextContent(
      'This astronomical object is of type: nebula'
    );
  });
});
