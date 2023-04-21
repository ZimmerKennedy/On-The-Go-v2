import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CarUserInfo = () => {
  const navigate = useNavigate();
  const carUserData = useSelector((state) => state.userCarData);

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      <div className=" flex flex-col items-center justify-center m-h-screen w-full overflow-hidden">
        <section className="w-full h-1/2 flex flex-col lg:flex-row bg-center bg-cover items-center justify-center mt-2 lg:mt-0">
          <ul className="font-roboto  lg:font-bold text-2xl lg:text-3xl h-1/2 pl-7 lg:pl-0 tracking-wider">
            {carUserData.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="my-4">
                {highlight}
              </li>
            ))}
          </ul>

          <img
            src={carUserData.imageURL}
            alt={carUserData.description}
            className="w-full h-full object-cover lg:w-1/2 lg:h-full lg:object-contain "
            
          />
        </section>
        <section className="w-full justify-evenly items-center h-full flex">
          <div className=" font-mono text-xs lg:text-xl flex flex-col items-center">
            <p className="border-b border-light-blue ">Pickup</p>
            <p className="text-center pt-1">{carUserData.locationPickup}</p>
          </div>
          <div
            className="relative border-2 w-full lg:w-1/4 flex flex-col items-center justify-center text-sm lg:text-2xl p-4 border-light-blue rounded-md shadow-md font-mono cursor-pointer"
            style={{ boxShadow: "0 0 20px rgba(102, 126, 234, 0.5)" }}
            onClick={() => {
              navigate("/car-payment");
            }}
          >
            <p className="mt-4">{carUserData.description}</p>
            <p>{carUserData.transmission}</p>
            <p>{carUserData.passengers} Passengers</p>
            <p className="relative w-full text-center">
              {carUserData.bags} Bags
              <button className="hidden lg:block absolute right-0 group bg-light-blue hover:bg-opacity-5 text-white font-bold px-1 rounded shadow-md transition duration-200 ease-in-out ">
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-md lg:text-lg text-white group-hover:text-light-blue transition-colors duration-200 ease-in-out delay-100"
                  />
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-md lg:text-lg text-white group-hover:text-light-blue transition-colors duration-200 ease-in-out delay-200"
                  />
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-md lg:text-lg text-white group-hover:text-light-blue transition-colors duration-200 ease-in-out delay-300"
                  />
                </div>
              </button>
            </p>
            <p className="text-center">
              Rented for {carUserData.rentDays} Days
            </p>
            <p>Price per {carUserData.basePriceDescription}</p>
            <p>${carUserData.basePricePerDescription}</p>
            <p>Total ${carUserData.basePriceTotal}</p>

            <p
              className="absolute w-full h-full z-[-1] bg-no-repeat"
              style={{ backgroundImage: `url(${carUserData.companyLogo})` }}
            ></p>
          </div>
          <div className=" text-xs lg:text-xl flex flex-col items-center font-mono">
            <p className="border-b border-light-blue ">Dropoff</p>
            <p className="text-center pt-1">{carUserData.locationDropoff}</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CarUserInfo;
