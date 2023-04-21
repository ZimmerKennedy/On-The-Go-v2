import React from "react";
import { Link } from "react-router-dom";

const Fallback = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="text-center">
        <h1 className="text-3xl font-medium">No Inventories</h1>
        <p className="text-gray-700">Please go back and retry your search</p>
        <Link to="/" className="mt-4 inline-block bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-full">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Fallback;