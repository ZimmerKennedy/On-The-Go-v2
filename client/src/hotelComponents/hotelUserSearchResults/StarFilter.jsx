import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const StarFilter = ({ onFilter }) => {
  const [checkedStars, setCheckedStars] = useState(new Set());

  const handleStarChange = (e) => {
    const star = e.target.value;
    const isChecked = e.target.checked;

    const newCheckedStars = new Set(checkedStars);

    if (isChecked) {
      newCheckedStars.add(star);
    } else {
      newCheckedStars.delete(star);
    }

    setCheckedStars(newCheckedStars);
    onFilter("starRating", Array.from(newCheckedStars));
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
        );
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStarHalfAlt}
            className="text-yellow-500"
          />
        );
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStarRegular} />);
      }
    }
    return stars;
  };

  return (
    <form className="flex flex-row lg:flex-col">
      {Array.from({ length: 5 }, (_, i) => i + 1)
        .reverse()
        .map((star) => (
          <label key={star} className="flex items-center">
            <input
              type="checkbox"
              value={star}
              onChange={handleStarChange}
              className="mx-2"
            />
            <span className="star-rating">{renderStars(star)}</span>
          </label>
        ))}
    </form>
  );
};

export default StarFilter;
