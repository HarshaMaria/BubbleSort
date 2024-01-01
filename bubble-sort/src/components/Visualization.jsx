import React from 'react';
import { useSelector } from 'react-redux';

const Visualization = () => {
  const { numbers, sortedIndices, comparingIndices } = useSelector(
    (state) => state.bubbleSort
  );

  const renderNumbers = () => {
    return (
      numbers &&
      numbers.map((num, index) => (
        <div
          key={index}
          style={{
            height: `${num * 20}px`,
            display: 'inline-block',
            margin: '0 5px',
            padding: '5px',
            border: '1px solid #ccc',
            backgroundColor: comparingIndices.includes(index)
              ? 'green'
              : sortedIndices.includes(index)
              ? 'orange'
              : 'orange',
          }}
        >
          {num}
        </div>
      ))
    );
  };

  return (
    <div style={{ display: 'flex', alignItems: 'end', marginLeft: '600px', marginTop: '20px' }}>
      {renderNumbers()}
    </div>
  );
};

export default Visualization;
