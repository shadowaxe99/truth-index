import React, { useState } from 'react';

const Review = () => {
  const [review, setReview] = useState('');

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  return (
    <div>
      <h2>Review</h2>
      <textarea value={review} onChange={handleReviewChange} />
    </div>
  );
};

export default Review;