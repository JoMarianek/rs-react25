import { useEffect } from 'react';

export const useLocalStorage = (setter: (value: string) => void) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTerm = localStorage.getItem('starTrek_searchTerm') || '';
      setter(savedTerm);
    }
  }, [setter]);
};
