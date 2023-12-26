import React from 'react';

const Visualization = ({ numbers, sortedIndices, comparingIndices }) => {
  const renderNumbers = () => {
    return numbers&& numbers.map((num, index) => (
      <div
        key={index}
        style={{
          display: 'inline-block',
          margin: '0 5px',
          padding: '5px',
          border: '1px solid #ccc',
          backgroundColor: comparingIndices.includes(index) ? 'yellow' : sortedIndices.includes(index) ? 'lightgreen' : 'lightgreen',
        }}
      >
        {num}
      </div>
    ));
  };

  return (
    <div style={{ display: 'flex', marginLeft: '600px', marginTop: '20px' }}>
      {renderNumbers()}
    </div>
  );
};

export default Visualization;
