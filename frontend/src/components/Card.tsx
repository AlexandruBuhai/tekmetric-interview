import { useContext } from 'react';
import type { Dog } from './types';
import { FavoriteDogContext } from './FavoriteDogContext';

type CardProps = {
  dogEntry: Dog;
  isDragging?: boolean;
};

const Card = ({ dogEntry, isDragging = false }: CardProps) => {
  const [, setFavoriteDog] = useContext(FavoriteDogContext);
  const handleFavoriteDog = () => {
    setFavoriteDog(dogEntry);
  };
  return (
    <div
      key={dogEntry.id}
      className={`${
        isDragging ? 'rotate-6' : ''
      } my-0.5 flex h-[150px] flex-row justify-start overflow-hidden rounded-xl
             border bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:shadow-slate-700/[.7]`}
    >
      <img
        className="mx-auto h-full w-[10rem] rounded-xl object-cover"
        src={dogEntry.image?.url}
        alt={dogEntry.name}
      />
      <div className="flex h-[100%] flex-col text-ellipsis p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {dogEntry.name}
        </h3>
        <span className="mt-1 text-gray-800 dark:text-gray-400 ">
          <strong>Life Span:</strong> {dogEntry.life_span}
        </span>
        <span className=" text-gray-800 dark:text-gray-400 ">
          <strong>Temperament:</strong> {dogEntry.temperament}
        </span>
      </div>
      <button
        type="button"
        className="my-auto mr-8 inline-flex h-[40%] items-center justify-center gap-2 rounded-md border-2 border-gray-200 px-4 py-[.688rem] text-sm font-semibold text-blue-500 transition-all hover:border-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-700 dark:hover:border-blue-500"
        onClick={handleFavoriteDog}
      >
        Favorite
      </button>
    </div>
  );
};

export default Card;
