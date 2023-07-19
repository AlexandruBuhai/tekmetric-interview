import { addElementToList, removeElementFromList } from './listOperations';

describe('addToList', () => {
  it('should add an item to the list', () => {
    const list = [1, 2, 3];
    const result = addElementToList(list, 1, 4);
    expect(result).toEqual([1, 4, 2, 3]);
  });
  it('should add an item to the list even if the index is over the limit', () => {
    const list = [1, 2, 3];
    const result = addElementToList(list, 5, 5);
    expect(result).toEqual([1, 2, 3, 5]);
  });
});

describe('removeFromList', () => {
  it('should remove an item from the list', () => {
    const list = [1, 2, 3];
    const [removedItem, result] = removeElementFromList(list, 1);
    expect(result).toEqual([1, 3]);
    expect(removedItem).toEqual(2);
  });
  it('should remove an item from the list even if the index is over the limit', () => {
    const list = [1, 2, 3];
    const [removedItem, result] = removeElementFromList(list, 5);
    expect(result).toEqual([1, 2, 3]);
    expect(removedItem).toEqual(undefined);
  });
  it('should remove an item from the list even if the index is negative', () => {
    const list = [1, 2, 3];
    const [removedItem, result] = removeElementFromList(list, -1);
    expect(result).toEqual([1, 2]);
    expect(removedItem).toEqual(3);
  });
  it('should not break when removing an item if the list is empty', () => {
    const list: Array<number> = [];
    const [removedItem, result] = removeElementFromList(list, 0);
    expect(result).toEqual([]);
    expect(removedItem).toEqual(undefined);
  });
});
