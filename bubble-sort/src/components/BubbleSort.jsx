import React, { useState } from 'react';
 
const BubbleSort = () => {
  const [inputNumbers, setInputNumbers] = useState('');
  const [numbers, setNumbers] = useState([]);
 
  const handleInputChange = (event) => {
    setInputNumbers(event.target.value);
  };
 
  const bubbleSort = () => {
 
    const arr = inputNumbers.split(',').map(Number);
 
 
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
 
    setNumbers(arr);
  };
 
  return (
    <div>
        <h1 style={{ marginLeft: '680px' ,marginBottom: '24px', fontSize: '40px' }}>  Bubble Sort App</h1>
      <div style={{ marginLeft: "600px" }}>
        <label style={{marginBottom: '12px', fontSize: '32px' }}>Enter Numbers:- 
          <input
            type="text"
            value={inputNumbers}
            onChange={handleInputChange} style={{ marginLeft: "40px", padding: '5px', borderRadius: '3px', border: '1px solid' }}
          />
        </label>
      </div>
      <button style={{ marginLeft: "720px", marginTop: '12px' }} onClick={bubbleSort}>
        Sort Numbers
      </button>
      <div style={{ display: "flex", marginLeft: "600px" }}>
        <h3>Sorted Numbers:- </h3>
        <p>{numbers.join(', ')}</p>
      </div>
    </div>
  );
};
 
export default BubbleSort;







// <label htmlFor='array'>Enter the array:- </label>
//         <input type='text'
//         id='array'
//         value={array}
//         onChange={(e) => setArray(e.target.value)} style={{ marginLeft: '10px', padding: '5px', borderRadius: '3px', border: '1px solid' }}
//         />