import React, { useState, createContext } from 'react';
import type { Dog } from './types';

const FavoriteDogContext: React.Context<[Dog | null, (dog: Dog) => void]> =
  createContext<[Dog | null, (dog: Dog) => void]>([null, () => {}]);

const FavoriteDogContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favoriteDog, setFavoriteDog] = useState<Dog | null>(null);

  const setYourFavoriteDog = (dog: Dog) => {
    setFavoriteDog(dog);
  };
  return (
    <FavoriteDogContext.Provider value={[favoriteDog, setYourFavoriteDog]}>
      {children}
    </FavoriteDogContext.Provider>
  );
};

export default FavoriteDogContextProvider;
export { FavoriteDogContext };
