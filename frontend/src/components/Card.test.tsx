import '@testing-library/jest-dom';

import { screen, render } from '@testing-library/react';
import Card from './Card';
import { type Dog } from './types';

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

describe('Card component', () => {
  it('should render a card', () => {
    render(<Card dogEntry={DOG_MOCK} />);
    const title = screen.getByText('Greyhound');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Greyhound');

    const lifeSpan = screen.getByText('10 - 13 years');
    expect(lifeSpan).toHaveTextContent('10 - 13 years');

    const button = screen.getByText('Favorite');
    expect(button).toBeInTheDocument();
  });
});
