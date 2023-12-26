import React, { useState } from 'react';
import Visualization from '../components/Visualization';

const BubbleSort = () => {
  const [inputNumbers, setInputNumbers] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  const handleInputChange = (event) => {
    setInputNumbers(event.target.value);
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const bubbleSort = async () => {
    setIsSorting(true);
    const arr = inputNumbers.split(',').map(Number);
    const indices = [];

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        indices.push(j);
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
        setNumbers([...arr]);
        await delay(500); 
      }
      indices.push(arr.length - 1 - i);
      setSortedIndices([...indices]);
    }
    setIsSorting(false);
  };

  return (
    <div>
      <h1 style={{ marginLeft: '680px', marginBottom: '24px', fontSize: '40px' }}>Bubble Sort App</h1>
      <div style={{ marginLeft: '600px' }}>
        <label style={{ marginBottom: '12px', fontSize: '32px' }}>
          Enter Numbers:-
          <input
            type="text"
            value={inputNumbers}
            onChange={handleInputChange}
            style={{ marginLeft: '40px', padding: '5px', borderRadius: '3px', border: '1px solid' }}
          />
        </label>
      </div>
      <button style={{ marginLeft: '720px', marginTop: '12px' }} onClick={bubbleSort} disabled={isSorting}>
        {isSorting ? 'Sorting...' : 'Sort Numbers'}
      </button>
      <Visualization numbers={numbers} sortedIndices={sortedIndices} />
    </div>
  );
};

export default BubbleSort;