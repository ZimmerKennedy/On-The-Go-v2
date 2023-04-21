import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Button = ({handleSearchClick}) => {
  return (
    <section className="w-full flex items-center justify-center">
            <button
              onClick={handleSearchClick}
              className="group mb-4 ml-6 lg:ml-0 bg-light-blue hover:bg-opacity-5 text-white font-bold px-2 rounded shadow-md transition duration-200 ease-in-out  my-4"
            >
              <div className="flex">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className=" py-2 text-xl text-white group-hover:text-light-blue transition-colors duration-200 ease-in-out delay-100"
                />
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className=" py-2 text-xl text-white group-hover:text-light-blue transition-colors duration-200 ease-in-out delay-200"
                />
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className=" py-2 text-xl text-white group-hover:text-light-blue transition-colors duration-200 ease-in-out delay-300"
                />
              </div>
            </button>
          </section>
  )
}

export default Button