import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const stars = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  const [hoverState, setHoverState] = useState(0);
  return (
    <div className="App">
      <h1>Star Rating</h1>
      <div className="flex-container">
        {stars.map((star) => (
          <Star
            key={star}
            starId={star}
            rating={hoverState || rating}
            onMouseEnter={() => setHoverState(star)}
            onMouseLeave={() => setHoverState(0)}
            onClick={() => setRating(star)}
          />
        ))}
      </div>
    </div>
  );
}

function Star({ starId, rating, onMouseEnter, onMouseLeave, onClick }) {
  let styleClass = "star-rating-blank";
  if (rating >= starId) {
    styleClass = "star-rating-filled";
  }
  return (
    <div
      className="star"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <svg
        height="55px"
        width="53px"
        viewBox="0 0 25 23"
        data-rating="1"
        className={styleClass}
      >
        <polygon
          stroke-width="0"
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
      </svg>
    </div>
  );
}
