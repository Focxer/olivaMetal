import React, { useState } from 'react';

interface StarRatingProps {
  totalStars?: number;  // Número total de estrelas (default: 5)
  initialRating?: number;  // Avaliação inicial passada como prop
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars = 5, initialRating = 0 }) => {
  const [rating] = useState<number>(initialRating);  // Avaliação é apenas para visualização
  const [hover, setHover] = useState<number>(0);

  return (
    <div>
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            style={{
              color: starValue <= (hover || rating) ? '#ffc107' : '#e4e5e9',
              fontSize: '2rem',
            }}
            //onMouseEnter={() => setHover(starValue)}
            //onMouseLeave={() => setHover(0)}
          >
            &#9733;
          </span>
        );
      })}
      <p>Avaliação atual: {rating} estrelas</p>
    </div>
  );
};

export default StarRating;
