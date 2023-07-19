import { useState, useEffect } from 'react';
import { Dog } from '../components/types';

// Leaving this here as a talking point for the interview
// Deprecated, using fetch inside a callback instead
export const useFetch = (url: string) => {
  const [data, setData] = useState<Array<Dog>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();

      if (response.status !== 200) {
        setError('Error fetching data.');
      }
      setData(data);
      setLoading(false);
    };

    fetchData().catch((error) => {
      setError(error.message);
      setLoading(false);
    });
  }, [url]);

  return { data, loading, error };
};
