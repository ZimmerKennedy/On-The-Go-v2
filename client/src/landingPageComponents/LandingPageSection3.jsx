import React, { useState } from "react";
import { DiagonalArrow } from "../config/svgs";
import TransitioningBorder from "./TransitioningBorder";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { borderAnimation, fadeAnimation, headContainerAnimation, headTextAnimation, slideAnimation } from "../config/motion";
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
  const navigate = useNavigate();
  const [currentImageUrl, setCurrentImageUrl] = useState(
    "https://images.unsplash.com/photo-1592985684811-6c0f98adb014?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
  );
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  const [activeBorder, setActiveBorder] = useState(null);

  const handleMouseEnter = (name) => {
    const imageUrl = imageUrls.find((image) => image.name === name);
    if (imageUrl) {
      setCurrentImageUrl(imageUrl.url);
      setActiveBorder(name);
    }
  };
  const handleBorderAnimateLeave = () => {
    setActiveBorder(null);
  };

  return (
    <main ref={ref} className=" w-full lg:px-20 mx-auto h-full lg:min-h-screen pt-44 relative">
      {inView && (

        <div className="flex flex-col lg:flex-row h-full lg:gap-x-10 ">
        <section className="basis-3/4 flex flex-col justify-center relative ">
       <motion.section {...fadeAnimation} className="text-right text-text-color font-medium text-2xl pb-6 lg:pb-0">OUR SERVICES</motion.section>
          <TransitioningBorder />
          <motion.div
            onClick={() => navigate('/flight-home')}
            {...fadeAnimation}
            className=" text-2xl lg:text-8xl text-text-color py-10 font-bruno-ace-sc tracking-tight relative hover:opacity-10 hover:border-t-transparent cursor-pointer transition-all"
            onMouseEnter={() => handleMouseEnter("Flight")}
            onMouseLeave={handleBorderAnimateLeave}
            >
            Flight Bookings
            <span className="inline-block absolute right-0 bottom-5">
              <DiagonalArrow width={50} fill={"#E3E0DB"} />
            </span>
          </motion.div>
          <TransitioningBorder isHovered={activeBorder === "Flight"} />
          <motion.div
            onClick={() => navigate('/car-home')}
            {...fadeAnimation}
            className="  text-2xl lg:text-8xl text-text-color py-10 font-bruno-ace-sc tracking-tight relative  hover:opacity-10 cursor-pointer transition-all"
            onMouseEnter={() => handleMouseEnter("Car")}
            onMouseLeave={handleBorderAnimateLeave}
            >
            Car Rentals
            <span className="inline-block absolute right-0 bottom-5">
              <DiagonalArrow width={50} fill={"#E3E0DB"} />
            </span>
          </motion.div>
          <TransitioningBorder isHovered={activeBorder === "Car"} />
          <motion.div
            onClick={() => navigate('/hotel-home')}
             {...fadeAnimation}
            className=" text-2xl lg:text-8xl text-text-color py-10 font-bruno-ace-sc tracking-tight relative hover:opacity-10 cursor-pointer transition-all"
            onMouseEnter={() => handleMouseEnter("Hotel")}
            onMouseLeave={handleBorderAnimateLeave}
            >
            Hotel Bookings
            <span className="inline-block absolute right-0 bottom-5">
              <DiagonalArrow width={50} fill={"#E3E0DB"} />
            </span>
          </motion.div>
          <TransitioningBorder isHovered={activeBorder === "Hotel"} />
        </section>
        <motion.section
          key={currentImageUrl}
          className="hidden  basis-1/4 relative sm:flex justify-center items-center"
          style={{
            backgroundImage: `url(${currentImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center, center",
          }}
          {...slideAnimation("right")}
          ></motion.section>
      </div>
    )}
    </main>
  );
};

export default LandingPageSection3;
