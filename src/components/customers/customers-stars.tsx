import React, { useState } from 'react';

interface StarRatingProps {
  totalStars?: number;  // Número total de estrelas (default: 5)
  onRatingChange?: (rating: number) => void;  // Callback opcional quando o rating é alterado
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars = 5, onRatingChange }) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const handleClick = (ratingValue: number) => {
    setRating(ratingValue);
    if (onRatingChange) {
      onRatingChange(ratingValue);
    }
  };

  return (
    <div>
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            style={{
              cursor: 'pointer',
              color: starValue <= (hover || rating) ? '#ffc107' : '#e4e5e9',
              fontSize: '2rem',
            }}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
