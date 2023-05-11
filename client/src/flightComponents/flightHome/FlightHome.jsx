import React, { useState } from "react";
import {  motion } from "framer-motion";
import Navbar from "../../Navbar";
import BookingBar from "../bookingBar/BookingBar";
import { slideAnimation } from "../../config/motion";
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <main>
      <Navbar isLoading={isLoading} className="z-40" />
      <div
        className=" overflow-auto lg:overflow-hidden absolute top-0 z-[-1] w-full h-[100%] lg:h-[69.5%] bg-center bg-cover"
        style={{
          backgroundImage: `url('/assets/tryPlane4.jpg')`,
        }}
      ></div>
      <motion.section {...slideAnimation("down")} className="flex flex-col items-center justify-center px-4 xl:mt-96">
        <div {...slideAnimation("down")} className="font-roboto font-bold text-white text-shadow-lg text-4xl mt-6 lg:text-5xl">
        Fly Beyond Limits
        </div>

        <BookingBar setIsLoading={setIsLoading} />
      </motion.section>
      <div
        className="absolute bottom-[-50%] lg:bottom-0 w-full bg-cover h-[50%] lg:h-[30.5%] z-[-1] bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/backgroundImg.jpg')`,
          
          backgroundPosition: '0'
        }}
      ></div>
    </main>
  );
};

export default Home;





