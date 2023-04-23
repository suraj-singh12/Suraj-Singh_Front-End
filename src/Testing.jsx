import React, { useState, memo } from 'react';

function Counter({ count }) {
  console.log('Counter rendered');
  return <div>{count}</div>;
}

const MemoizedCounter = memo(Counter);

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');

  function increment() {
    setValue('new value ' + Math.random().toFixed(2));
  }

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <MemoizedCounter count={count} />
      <p>{value}</p>
    </div>
  );
}

export default App;
