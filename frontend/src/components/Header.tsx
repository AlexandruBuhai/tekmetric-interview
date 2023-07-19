import { useContext } from 'react';
import { FavoriteDogContext } from './FavoriteDogContext';

type HeaderProps = {
  onAddDogsClick: () => void;
  dogsPetted: number;
};

const Header = ({ onAddDogsClick, dogsPetted }: HeaderProps) => {
  // Get the favorite dog from the react context
  const [favoriteDog] = useContext(FavoriteDogContext);

  return (
    <header className="mx-auto mb-9 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-200 sm:text-5xl lg:text-6xl lg:leading-tight">
        Tekmetric Interview
      </h1>
      <span className="text-xl text-white">Dogs Petted {dogsPetted}</span>
      <span className="my-3 text-xl text-white ">
        Your favourite dog is&nbsp;
        <span className="text-xl font-bold text-gray-200">
          {favoriteDog?.name}
        </span>
      </span>
      <button
        className="max-w-xs bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
        onClick={onAddDogsClick}
      >
        Add 5 dogs
      </button>
    </header>
  );
};

export default Header;
