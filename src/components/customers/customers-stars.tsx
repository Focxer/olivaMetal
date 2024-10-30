import React from "react";

interface StarRatingProps {
  totalStars?: number; // Número total de estrelas (default: 5)
  initialRating: number; // Avaliação inicial passada como prop (obrigatório)
}

const StarRating: React.FC<StarRatingProps> = ({
  totalStars = 5,
  initialRating,
}) => {
  return (
    <div>
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            style={{
              color: starValue <= initialRating ? "#ffc107" : "#e4e5e9",
              fontSize: "2rem",
            }}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
