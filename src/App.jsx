import React from 'react';
import List from './List';
import './App.css';

function App() {
  const items = [
    { text: 'Item 1' },
    { text: 'Item 2' },
    { text: 'Item 3' },
    { text: 'Item 4' },
    { text: 'Item 5' }
  ];

  return (
    <div className="container">
      <h1>List of Items</h1>
      <List items={items} />
    </div>
  );
}

export default App;
