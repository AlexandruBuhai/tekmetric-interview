import React, { useEffect, useState, useCallback, useRef } from 'react';
import {
  Container,
  Header,
  FavoriteDogContextProvider,
  type DogLists,
  type Dog,
} from './components';
import {
  addElementToList,
  removeElementFromList,
} from './helpers/listOperations';
import type { DropResult } from '@hello-pangea/dnd';
import { useFetch } from './helpers/useFetch';

const App = () => {
  const [dogsPetted, setDogsPetted] = useState<number>(0);

  const [dogs, setDogs] = useState<DogLists>({
    afterPet: [],
    beforePet: [],
  });
  const prevDogs = useRef(dogs);

  const [inital, setInitial] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [pageNumber, setPageNumber] = useState<number>(0);
  const { data, loading, dogError } = useFetch(
    `https://api.thedogapi.com/v1/breeds?limit=5&page=${pageNumber}`
  );

  const addDogs = async () => {
    const randNumber = Math.floor(Math.random() * (30 + 1));
    setPageNumber(randNumber);

    // const data = await fetchData(randNumber);

    // if (data) {
    //   const newDogs = [...dogs.beforePet, ...data];
    //   setDogs({
    //     afterPet: dogs.afterPet,
    //     beforePet: newDogs,
    //   });
    // }
  };

  console.log('dogs', dogs);
  console.log('prevDogs', prevDogs.current);
  console.log('data', data);
  useEffect(() => {
    if (
      !loading &&
      data?.length > 0     ) {
      setDogs({
        afterPet: prevDogs.current.afterPet,
        beforePet: [...prevDogs.current.beforePet, ...data],
      });
    }
  }, [data, loading]);

  useEffect(() => {
    if (prevDogs.current.beforePet.length !== dogs.beforePet.length) {
      prevDogs.current = dogs;
    }
  }, [dogs]);

  // const fetchData = useCallback(async (page: number) => {
  //   const response = await fetch(
  //     `https://api.thedogapi.com/v1/breeds?limit=5&page=${page}`
  //   );
  //   const data = await response.json();
  //   if (response.status !== 200) {
  //     setError('Error fetching data.');
  //   }
  //   return data as Array<Dog>;
  // }, []);

  // useEffect(() => {
  //   const fetchDogs = async () => {
  //     const data = await fetchData(Math.floor(Math.random() * (30 + 1)));
  //     if (data) {
  //       const newDogs = [...dogs.beforePet, ...data];
  //       setDogs({
  //         afterPet: dogs.afterPet,
  //         beforePet: newDogs,
  //       });
  //     }
  //   };
  //   if (inital) {
  //     fetchDogs();
  //     setInitial(false);
  //   }
  // }, [fetchData, inital, dogs]);

  const onDragEnd = (element: DropResult) => {
    // if the element is not dropped in a droppable area, do nothing
    if (!element.destination) {
      return;
    }

    const sourceColumnName = element.source.droppableId as
      | 'afterPet'
      | 'beforePet';
    const destinationColumnName = element.destination.droppableId as
      | 'afterPet'
      | 'beforePet';

    const shallowDogLists: DogLists = { ...dogs };

    const originalColumn = shallowDogLists[sourceColumnName];
    const [removedElement, newDogsColumn] = removeElementFromList(
      originalColumn,
      element.source.index
    );
    shallowDogLists[sourceColumnName] = newDogsColumn;

    const destinationList = shallowDogLists[destinationColumnName];
    shallowDogLists[destinationColumnName] = addElementToList(
      destinationList,
      element.destination.index,
      removedElement
    );

    setDogs(shallowDogLists);
    setDogsPetted(shallowDogLists.afterPet.length);
  };

  return (
    <FavoriteDogContextProvider>
      <div className="relative mx-[100px] flex min-h-screen flex-col justify-center py-6 sm:py-12">
        <div className="relative mx-auto max-h-fit min-w-full rounded-xl bg-gray-600 bg-opacity-50 px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:px-1">
          <Header onAddDogsClick={addDogs} dogsPetted={dogsPetted} />
          {error === null ? (
            <div className="flex max-w-full justify-center gap-[100px] overflow-scroll">
              <Container list={dogs} onDragEnd={onDragEnd} />
            </div>
          ) : (
            <div className="flex max-w-full justify-center gap-[100px]">
              <p className="text-center text-2xl text-white">{error}</p>
            </div>
          )}
        </div>
      </div>
    </FavoriteDogContextProvider>
  );
};

export default App;
