import { useEffect, useState } from 'react';

const useLocalStorage = (initialValue, key) => {
  const get = () => {
    const storage = localStorage.getItem(key);
    if (storage) return JSON.parse(storage).value;
    return initialValue;
  };

  const [value, setValue] = useState(get());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }));
  }, [key, value]);

  return [value, setValue];

};

export default useLocalStorage;