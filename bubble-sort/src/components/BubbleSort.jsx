import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setInputNumbers,
  setNumbers,
  setSortedIndices,
  setIsSorting,
  setComparingIndices,
  setSortOrder,
} from '../reducers/bubbleSortReducer';

const BubbleSort = () => {
  const dispatch = useDispatch();
  const { inputNumbers, isSorting, sortOrder, } = useSelector((state) => state.bubbleSort);
  const [elapsedTime, setElapsedTime] = useState(0);

  const handleInputChange = (event) => {
    dispatch(setInputNumbers(event.target.value));
  };

  const handleSortOrderChange = (event) => {
    dispatch(setSortOrder(event.target.value));
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const bubbleSort = async () => {
    dispatch(setIsSorting(true));
    const arr = inputNumbers.split(',').map(Number);
    const indices = [];
    const comparingIndices = [];

    const startTime = performance.now();

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        comparingIndices.push(j, j + 1);
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
        await delay(500);
        dispatch(setNumbers([...arr]));
        dispatch(setComparingIndices([...comparingIndices]));
        comparingIndices.splice(0, comparingIndices.length);
      }
      indices.push(arr.length - 1 - i);
      dispatch(setSortedIndices([...indices]));
    }

    if (sortOrder === 'ascending') {
      dispatch(setNumbers([...arr]));
    } else {
      dispatch(setNumbers([...arr].reverse()));
    }

    dispatch(setIsSorting(false));

    const endTime = performance.now();
    setElapsedTime(endTime - startTime);
  };

  return (
    <div>
      <h1 style={{ marginLeft: '636px', marginBottom: '24px', fontSize: '40px' }}>Bubble Sort App</h1>
      <div style={{ marginLeft: '600px' }}>
        <label style={{ marginBottom: '12px', fontSize: '24px' }}>
          Enter Numbers:-
          <input
            type="text"
            value={inputNumbers}
            onChange={handleInputChange}
            style={{ marginLeft: '40px', padding: '5px', borderRadius: '3px', border: '1px solid', }} />
        </label>
        <label style={{ marginTop: '12px', marginBottom: '12px', fontSize: '24px', display: 'flex' }}>
          Sort Order:-
          <select
            value={sortOrder}
            onChange={handleSortOrderChange}
            style={{ marginLeft: '20px', padding: '5px', borderRadius: '3px', border: '1px solid', }} >
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </label>
      </div>
      <button style={{ marginLeft: '720px', marginTop: '12px' }} onClick={bubbleSort} disabled={isSorting}>
        {isSorting ? 'Sorting...' : 'Sort Numbers'}
      </button>
      <div style={{ marginLeft: '600px', marginTop: '24px', fontSize: '20px' }}>
        {elapsedTime > 0 && `Elapsed Time: ${elapsedTime.toFixed(2)} milliseconds`}
      </div>
    </div>
  );
};

export default BubbleSort;
