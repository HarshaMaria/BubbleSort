import React, { useState } from 'react';
import Visualization from './Visualization';

const BubbleSort = () => {
  const [inputNumbers, setInputNumbers] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [comparingIndices, setComparingIndices] = useState([]);
  const [sortOrder, setSortOrder] = useState('ascending');

  const handleInputChange = (event) => {
    setInputNumbers(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const bubbleSort = async () => {
    setIsSorting(true);
    const arr = inputNumbers.split(',').map(Number);
    const indices = [];
    const comparingIndices = [];

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        comparingIndices.push(j, j + 1);
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
        await delay(500);
        setNumbers([...arr]);
        setComparingIndices([...comparingIndices]);
        comparingIndices.splice(0, comparingIndices.length);
      }
      indices.push(arr.length - 1 - i);
      setSortedIndices([...indices]);
    }

    if (sortOrder === 'ascending') {
      setNumbers([...arr]); 
    } else {
      setNumbers([...arr].reverse()); 
    }

    setIsSorting(false);
  };

  return (
    <div>
      <h1 style={{ marginLeft: '636px', marginBottom: '24px', fontSize: '40px' }}>Bubble Sort App</h1>
      <div style={{ marginLeft: '600px' }}>
        <label style={{ marginBottom: '12px', fontSize: '24px' }}>
          Enter Numbers:-
          <input type="text" value={inputNumbers} onChange={handleInputChange}
            style={{ marginLeft: '40px', padding: '5px', borderRadius: '3px', border: '1px solid' }} />
        </label>
        <label style={{ marginTop: '12px', marginBottom: '12px', fontSize: '24px', display: 'flex'}}>
          Sort Order:-
          <select value={sortOrder} onChange={handleSortOrderChange}
            style={{ marginLeft: '20px', padding: '5px', borderRadius: '3px', border: '1px solid' }}>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </label>
      </div>
      <button style={{ marginLeft: '720px', marginTop: '12px' }} onClick={bubbleSort} disabled={isSorting}>
        {isSorting ? 'Sorting...' : 'Sort Numbers'}
      </button>
      <Visualization numbers={numbers} sortedIndices={sortedIndices} comparingIndices={comparingIndices} />
    </div>
  );
};

export default BubbleSort;