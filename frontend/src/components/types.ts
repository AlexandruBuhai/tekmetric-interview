type Dog = {
  id: number;
  name: string;
  bred_for: string;
  life_span: string;
  temperament: string;
  weight: {
    imperial: string;
    metric: string;
  };
  image: {
    id: string;
    width: number;
    height: number;
    url: string;
  };
};

type DogLists = {
  beforePet: Array<Dog>;
  afterPet: Array<Dog>;
};

export type { Dog, DogLists };
