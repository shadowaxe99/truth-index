import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [trustScore, setTrustScore] = useState('');
  const [publicStance, setPublicStance] = useState('');
  const [reviewCount, setReviewCount] = useState('');

  const handleTrustScoreChange = (event) => {
    setTrustScore(event.target.value);
  };

  const handlePublicStanceChange = (event) => {
    setPublicStance(event.target.value);
  };

  const handleReviewCountChange = (event) => {
    setReviewCount(event.target.value);
  };

  const handleFilterChange = () => {
    onFilterChange({
      trustScore,
      publicStance,
      reviewCount,
    });
  };

  return (
    <div id="filterOptions">
      <label>
        Trust Score:
        <input type="number" value={trustScore} onChange={handleTrustScoreChange} />
      </label>
      <label>
        Public Stance:
        <input type="text" value={publicStance} onChange={handlePublicStanceChange} />
      </label>
      <label>
        Review Count:
        <input type="number" value={reviewCount} onChange={handleReviewCountChange} />
      </label>
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default Filter;