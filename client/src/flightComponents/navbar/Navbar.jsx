import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const handleSupportClick = () => {
    window.open("mailto:kennedyzimmer@yahoo.com");
  };

  return (
    <div className="z-20 flex flex-row items-center justify-between lg:justify-evenly px-4 py-4 sm:px-8 sm:space-x-8 lg:space-x-40  bg-opacity-30 bg-gray-50">
      <div>
        <img
          src="/logo.png"
          alt="Fly Logo"
          className="h-12 sm:h-20 cursor-pointer object-contain"
          onClick={() => {
            navigate("/home");
          }}
        />
      </div>
      <button
        className="block sm:hidden text-gray-800 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="6" width="16" height="2" />
          <rect x="4" y="11" width="16" height="2" />
          <rect x="4" y="16" width="16" height="2" />
        </svg>
      </button>
      <div className={`sm:flex ${isOpen ? "block" : "hidden"}`}>
        <ul className="lg:mr-0 flex flex-row  sm:items-center text-navy-blue font-extrabold text-xl cursor-pointer ">
          <li className="sm:mb-4 lg:mb-0 mr-8 hover:underline" onClick={handleSupportClick}>Support</li>
          <li
            className="hover:underline"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;