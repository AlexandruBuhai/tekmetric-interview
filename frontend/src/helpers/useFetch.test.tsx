import { renderHook, waitFor } from '@testing-library/react';

import { useFetch } from './useFetch';

describe('testing useFetch', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return data, loading, and error from the dogs api', async () => {
    const result = await renderHook(() =>
      useFetch('https://api.thedogapi.com/v1/breeds?limit=10&page=0')
    );
    const { loading } = result.result.current;
    expect(loading).not.toBeFalsy();

    await waitFor(() => {
      const { data, loading, error } = result.result.current;
      expect(loading).toBeFalsy();

      expect(error).toBeNull();

      expect(data).not.toBeNull();
      expect(data.length).toBe(10);
    });
  });

  it('should return an error', async () => {
    // Mock the fetch to throw an error
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => {
          throw new Error('Testing the Error');
        },
      })
    ) as jest.Mock;

    const result = await renderHook(() =>
      useFetch('https://api.thedogapi.com/v1/breeds?limit=10&page=0')
    );
    await waitFor(() => {
      const { data, loading, error } = result.result.current;
      expect(loading).toBeFalsy();

      expect(data).toStrictEqual([]);

      expect(error).toBe('Testing the Error');
    });
  });
});
