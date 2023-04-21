import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { slideAnimation, fadeAnimation } from "../config/motion";
import LoadingPage from "../LoadingPage";
import {useInView} from "react-intersection-observer"
const LandingPageSection1 = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    threshold: 0.3,
  })
  const [loading, setLoading] = useState(true);

  const imageUrls = [
    "/assets/tryImg5.jpg",
    "/assets/tryCar3.jpg",
    "/assets/tryPlane4.jpg",
    "/assets/tryHotel2.jpg",
  ];

  const loadAllImages = async (urls) => {
    const imagePromises = urls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(url);
        img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
      });
    });

    await Promise.all(imagePromises);
    setLoading(false);
  };

  useEffect(() => {
    loadAllImages(imageUrls);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <AnimatePresence>
      <section ref={ref}className="w-screen h-screen">
      {inView &&(
        <>
        <motion.div
        
        {...fadeAnimation}
        className="flex flex-col items-center justify-center pt-20 lg:py-40"
        >
        <div className="text-4xl lg:text-9xl font-roboto font-extrabold text-white text-shadow-lg tracking-wider border-white border-b">
          Travel with Ease.
        </div>
        <div className="text-2xl lg:text-5xl font-light text-gray-300 text-shadow-lg tracking-wider">
          Discover Your Options
        </div>
      </motion.div>
      <motion.div
      
      {...slideAnimation("right")}
      className="flex flex-col lg:flex-row w-full  items-center justify-center"
      >
        <div
          className="w-1/2 h-1/3 lg:py-4 relative group cursor-pointer"
          onClick={() => {
            navigate("/car-home");
          }}
          >
          <div
            className=" w-full h-40 lg:h-64 bg-no-repeat bg-contain bg-center transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: `url('${imageUrls[1]}')`,
            }}
            ></div>
          <div className="absolute bottom-0 left-1/2 h-0 w-0 bg-white group-hover:w-[56%] group-hover:h-0.5 transition-all duration-300 ease-in-out transform -translate-x-1/2"></div>
          <div className="w-full text-shadow-lg text-white lg:text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            Find Your Drive
            <FontAwesomeIcon icon={faAnglesRight} className="pl-2" />
          </div>
        </div>
        <div
          className="w-1/2 h-1/3 lg:py-4 relative group cursor-pointer"
          onClick={() => {
            navigate("/hotel-home");
          }}
          >
          <div
            className="w-full h-40 lg:h-64 bg-no-repeat bg-contain bg-center transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: `url('${imageUrls[3]}')`,
            }}
            ></div>
          <div className="absolute bottom-0 left-1/2 h-0 w-0 bg-white group-hover:w-[56%] group-hover:h-0.5 transition-all duration-300 ease-in-out transform -translate-x-1/2"></div>
          <div className="w-full text-shadow-lg text-white lg:text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            Book Your Stay
            <FontAwesomeIcon icon={faAnglesRight} className="pl-2" />
          </div>
        </div>
        <div
          className="w-1/2 h-1/3 lg:py-4 relative group cursor-pointer"
          onClick={() => {
            navigate("/flight-home");
          }}
          >
          <div
            className="w-full h-40 lg:h-64 bg-no-repeat bg-contain bg-center transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: `url('${imageUrls[2]}')`,
            }}
            ></div>
          <div className="absolute bottom-0 left-1/2 h-0 w-0 bg-white group-hover:w-[56%] group-hover:h-0.5 transition-all duration-300 ease-in-out transform -translate-x-1/2"></div>
          <div className=" w-full text-shadow-lg text-white lg:text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            Secure Your Flight
            <FontAwesomeIcon icon={faAnglesRight} className="pl-2" />
          </div>
        </div>
      </motion.div>
        </>
        )}
        </section>
    </AnimatePresence>
  );
};

export default LandingPageSection1;
