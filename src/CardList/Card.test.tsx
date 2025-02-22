import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from './Card';

const mockSetSearchParams = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useSearchParams: vi.fn(() => [
      new URLSearchParams(''),
      mockSetSearchParams,
    ]),
  };
});

describe('Card component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

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

  it('updates URL params when clicked', () => {
    render(
      <MemoryRouter>
        <Card name="Antares" type="Nebula" uid="STAR123" />
      </MemoryRouter>
    );

    const cardContainer = screen.getByTestId('card-container');
    fireEvent.click(cardContainer);

    expect(mockSetSearchParams).toHaveBeenCalledTimes(1);
    const newParams = new URLSearchParams();
    newParams.set('details', 'STAR123');
    expect(mockSetSearchParams).toHaveBeenCalledWith(newParams);
  });
});
