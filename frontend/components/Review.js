import React, { useState } from 'react';
import axios from 'axios';

const Review = () => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');

  const submitReview = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/reviews', { review, rating });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('An error occurred while submitting your review.');
    }

    setReview('');
    setRating(0);
  };

  return (
    <div>
      <form onSubmit={submitReview}>
        <label htmlFor="review">Review:</label>
        <textarea
          id="reviewForm"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        />

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="0"
          max="5"
          required
        />

        <button type="submit">Submit Review</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Review;