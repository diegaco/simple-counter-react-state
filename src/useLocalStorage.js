import { useEffect, useState } from 'react';

const useLocalStorage = (initialValue, key) => {
  const get = () => {
    const storage = localStorage.getItem(key);
    if (storage) return JSON.parse(storage);
    return initialValue;
  };

  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  });

  return [value, setValue];

};

export default useLocalStorage;