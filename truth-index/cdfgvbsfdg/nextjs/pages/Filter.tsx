import React from 'react';

const Filter = ({ onFilter }) => {
  const handleFilterChange = (event) => {
    onFilter(event.target.value);
  };

  return (
    <div>
      <label>Filter:</label>
      <input type="text" onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;