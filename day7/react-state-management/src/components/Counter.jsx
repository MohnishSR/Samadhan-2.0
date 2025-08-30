import { useState } from 'react';

function Counter() {
  // Initialize state for the counter
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  // Function to reset the counter
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h2>Counter</h2>
      <div className="counter-display">{count}</div>
      <div className="counter-controls">
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default Counter;