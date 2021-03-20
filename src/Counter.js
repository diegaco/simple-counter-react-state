import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const setDocumentTitle = count => {
  document.title = `Counter: ${count}`;
}

const Counter = ({ max, step }) => {
  const [ count, setCount ] = useLocalStorage(5, 'count');

  const increment = () => {
    setCount(count => (count + step <= max) ? count + step : count);
  }

  const decrement = () => {
    setCount(count => (count - step >= 0) ? count - step : count);
  }

  const reset = () => setCount(0);

  useEffect(() => {
    setDocumentTitle(count);
  }, [count]);

  return (
    <div className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

export default Counter;

