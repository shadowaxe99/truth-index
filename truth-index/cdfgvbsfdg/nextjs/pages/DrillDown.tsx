import React from 'react';

const DrillDown = ({ onDrillDown }) => {
  const handleDrillDownChange = (event) => {
    onDrillDown(event.target.value);
  };

  return (
    <div>
      <label>Drill Down:</label>
      <input type="text" onChange={handleDrillDownChange} />
    </div>
  );
};

export default DrillDown;