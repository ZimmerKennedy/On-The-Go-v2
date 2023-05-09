import React, { useState } from "react";
import { DiagonalArrow } from "../config/svgs";
import { motion } from "framer-motion";
import TransitioningBorder from "./TransitioningBorder";
import { fadeAnimation } from "../config/motion";
const imageUrls = [
  {
    url: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
    name: "Hotel",
  },
  {
    url: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Car",
  },
  {
    url: "https://images.unsplash.com/photo-1592985684811-6c0f98adb014?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    name: "Flight",
  },
];

const LandingPageSection3 = () => {
  const [currentImageUrl, setCurrentImageUrl] = useState(
    "https://images.unsplash.com/photo-1592985684811-6c0f98adb014?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
  );
  const [activeBorder, setActiveBorder] = useState(null);

  const handleMouseEnter = (name) => {
    const imageUrl = imageUrls.find((image) => image.name === name);
    if (imageUrl) {
      setCurrentImageUrl(imageUrl.url);
      setActiveBorder(name);
    }
  };

  const imageVariants = {
    visible: {
      opacity: 1,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
    hidden: { opacity: 0 },
  };
  const handleBorderAnimateLeave = () => {
    setActiveBorder(null);
  };

  return (
    <main className=" w-full px-20 mx-auto h-screen min-h-screen pt-10 relative">
      <section className="flex flex-row h-full gap-x-10">
        <section className="basis-3/4 flex flex-col justify-center relative">
       <section className="text-right text-text-color font-medium text-2xl">OUR SERVICES</section>
          <TransitioningBorder />
          <div
            className=" services__title relative hover:opacity-10 hover:border-t-transparent cursor-pointer transition-all"
            onMouseEnter={() => handleMouseEnter("Flight")}
            onMouseLeave={handleBorderAnimateLeave}
          >
            Flight Bookings
            <span className="inline-block absolute right-0 bottom-5">
              <DiagonalArrow width={50} fill={"#E3E0DB"} />
            </span>
          </div>
          <TransitioningBorder isHovered={activeBorder === "Flight"} />
          <div
            className="  services__title relative  hover:opacity-10 cursor-pointer transition-all"
            onMouseEnter={() => handleMouseEnter("Car")}
            onMouseLeave={handleBorderAnimateLeave}
          >
            Car Rentals
            <span className="inline-block absolute right-0 bottom-5">
              <DiagonalArrow width={50} fill={"#E3E0DB"} />
            </span>
          </div>
          <TransitioningBorder isHovered={activeBorder === "Car"} />
          <div
            className=" services__title relative hover:opacity-10 cursor-pointer transition-all"
            onMouseEnter={() => handleMouseEnter("Hotel")}
            onMouseLeave={handleBorderAnimateLeave}
          >
            Hotel Bookings
            <span className="inline-block absolute right-0 bottom-5">
              <DiagonalArrow width={50} fill={"#E3E0DB"} />
            </span>
          </div>
          <TransitioningBorder isHovered={activeBorder === "Hotel"} />
        </section>
        <motion.section
          key={currentImageUrl}
          className="basis-1/4 relative mb-28 flex justify-center items-center"
          style={{
            backgroundImage: `url(${currentImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center, center",
          }}
          {...fadeAnimation}
        ></motion.section>
      </section>
    </main>
  );
};

export default LandingPageSection3;
