const removeElementFromList = <ElementType>(
  list: Array<ElementType>,
  index: number
): [ElementType, Array<ElementType>] => {
  const newList = [...list];
  const [removedElement] = newList.splice(index, 1);
  return [removedElement, newList];
};

const addElementToList = <ElementType>(
  list: Array<ElementType>,
  index: number,
  element: ElementType
): Array<ElementType> => {
  const newList = [...list];
  newList.splice(index, 0, element);
  return newList;
};

export { removeElementFromList, addElementToList };
