import React, { useState, useEffect } from "react";
import CleanlinessFilter from "./CleanlinessFilter";
import StarFilter from "./StarFilter";
import ReviewFilter from "./ReviewFilter";

const HotelFilter = ({ hotels, onFilter }) => {
  const [isStarRatingOpen, setIsStarRatingOpen] = useState(false);
  const [isReviewRatingOpen, setIsReviewRatingOpen] = useState(false);
  const [isCleanlinessOpen, setIsCleanlinessOpen] = useState(false);

  const [filters, setFilters] = useState({
    starRating: "",
    reviewRating: "",
    cleanlinessRating: "",
  });
  const applyFilters = (currentFilters) => {
    if (
      currentFilters.starRating.length === 0 &&
      currentFilters.reviewRating.length === 0 &&
      currentFilters.cleanlinessRating.length === 0
    ) {
      return hotels;
    }
  
    return hotels.filter((item) => {
      return (
        (currentFilters.starRating.length === 0 || currentFilters.starRating.includes(item.starRating.toString())) &&
        (currentFilters.reviewRating === "" || item.reviewRating >= parseFloat(currentFilters.reviewRating)) &&
        (currentFilters.cleanlinessRating === "" ||
          item.cleanlinessRating.cleanliness_score >= parseFloat(currentFilters.cleanlinessRating))
      );
    });
  };

  const updateFilters = (name, value) => {
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    const filteredData = applyFilters(newFilters);
    onFilter(filteredData);
  };

const handleFilter = (name, value) => {
  updateFilters(name, value);
};



  return (
    <>
      <div className="relative mx-2">
        <button
          className="flex items-center justify-between w-full lg:p-3 px lg:text-lg text-md  text-navy-blue  border-b border-light-blue  "
          onClick={() => setIsStarRatingOpen(!isStarRatingOpen)}
        >
          <span>Stars</span>
          <span
            className={`transform transition-transform ${
              isStarRatingOpen ? "rotate-180" : ""
            }`}
          >
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M6.292 8.292a1 1 0 0 1 1.414 0L10 10.586l2.293-2.294a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        {isStarRatingOpen && (
          <section className="flex flex-col lg:p-3 bg-gray-100 z-10 mt-2 lg:mt-0 mb-0.5 absolute lg:relative">
            <StarFilter onFilter={handleFilter} />
          </section>
        )}
      </div>
      <div className="relative mx-2">
        <button
          className="flex items-center justify-between w-full lg:p-3 lg:text-lg text-md   text-navy-blue  border-b border-light-blue  "
          onClick={() => setIsCleanlinessOpen(!isCleanlinessOpen)}
        >
          <span>Cleanliness</span>
          <span
            className={`transform transition-transform ${
              isCleanlinessOpen ? "rotate-180" : ""
            }`}
          >
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M6.292 8.292a1 1 0 0 1 1.414 0L10 10.586l2.293-2.294a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        {isCleanlinessOpen && (
          <section className="flex flex-col p-3 mt-2 lg:mt-0 bg-gray-100 z-10 mb-0.5 absolute lg:relative">
            <CleanlinessFilter onFilter={handleFilter} />
          </section>
        )}
      </div>
      <div className="relative mx-2">
        <button
          className="flex items-center justify-between w-full lg:p-3 lg:text-lg text-md  text-navy-blue  border-b border-light-blue  "
          onClick={() => setIsReviewRatingOpen(!isReviewRatingOpen)}
        >
          <span>Review</span>
          <span
            className={`transform transition-transform ${
              isReviewRatingOpen ? "rotate-180" : ""
            }`}
          >
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M6.292 8.292a1 1 0 0 1 1.414 0L10 10.586l2.293-2.294a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        {isReviewRatingOpen && (
          <section className="flex flex-col mt-2  bg-gray-100 z-10 mb-0.5 absolute lg:relative">
            <ReviewFilter onFilter={handleFilter} />
          </section>
        )}
      </div>
      
    </>
  );
};

export default HotelFilter;
