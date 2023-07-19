import '@testing-library/jest-dom';

import { screen, render } from '@testing-library/react';
import Header from './Header';
import { FavoriteDogContext } from './FavoriteDogContext';
import type { Dog } from './types';

const DOG_MOCK: Dog = {
  weight: {
    imperial: '50 - 70',
    metric: '23 - 32',
  },
  bred_for: 'Coursing hares',
  id: 127,
  name: 'Greyhound',
  life_span: '10 - 13 years',
  temperament:
    'Affectionate, Athletic, Gentle, Intelligent, Quiet, Even Tempered',
  image: {
    id: 'ryNYMx94X',
    width: 1024,
    height: 681,
    url: 'https://cdn2.thedogapi.com/images/ryNYMx94X.jpg',
  },
};

function renderWithContext() {
  return render(
    <FavoriteDogContext.Provider value={[DOG_MOCK, (dog: Dog) => {}]}>
      <Header onAddDogsClick={() => {}} dogsPetted={0} />
    </FavoriteDogContext.Provider>
  );
}

describe('Header component', () => {
  it('should render a header', () => {
    render(<Header onAddDogsClick={() => {}} dogsPetted={0} />);
    const title = screen.getByText('Tekmetric Interview');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Tekmetric Interview');
    const button = screen.getByText('Add 5 dogs');
    expect(button).toBeInTheDocument();
    const dogsPetted = screen.getByText('Dogs Petted 0');
    expect(dogsPetted).toBeInTheDocument();
  });

  it('should render a header with context', () => {
    renderWithContext();
    const favoriteDog = screen.getByText('Your favourite dog is');
    expect(favoriteDog).toBeInTheDocument();
    const grayHound = screen.getByText('Greyhound');
    expect(grayHound).toBeInTheDocument();
    expect(grayHound).toHaveClass('text-xl font-bold text-gray-200');
  });
});
