import React, { useState, useEffect } from "react";

const ReviewFilter = ({ onFilter }) => {
  const reviewLevels = ["5+", "6+", "7+", "8+", "9+"];
  const [selectedLevels, setSelectedLevels] = useState([]);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedLevels((prevState) => [...prevState, value]);
    } else {
      setSelectedLevels((prevState) => prevState.filter((level) => level !== value));
    }
  };

  useEffect(() => {
    onFilter("reviewRating", selectedLevels.join(","));
  }, [selectedLevels]);

  return (
    <div className="flex flex-col gap-2">
      {reviewLevels.map((level, index) => (
        <label key={index} className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox"
            value={level}
            checked={selectedLevels.includes(level)}
            onChange={handleChange}
          />
          <span className="ml-2">{level}</span>
        </label>
      ))}
    </div>
  );
};

export default ReviewFilter;