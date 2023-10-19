// frontend/components/Filter.js

// This file contains the Filter component

import React, { useState } from 'react';

const Filter = () => {
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

  return (
    <div>
      <h2>Filter</h2>
      <label>
        Trust Score:
        <input type='number' value={trustScore} onChange={handleTrustScoreChange} />
      </label>
      <label>
        Public Stance:
        <input type='text' value={publicStance} onChange={handlePublicStanceChange} />
      </label>
      <label>
        Review Count:
        <input type='number' value={reviewCount} onChange={handleReviewCountChange} />
      </label>
    </div>
  );
};

export default Filter;