import React from "react";
import { CarBooking } from "../index";
import Navbar from "../../Navbar";
import { AnimatePresence, motion } from "framer-motion";
import {
  slideAnimation,
} from "../../config/motion";

const CarHome = () => {
  return (
    <AnimatePresence>
      <main className="">
        <div
          className="absolute top-0 z-[-1] w-full h-[69.5%]  bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/car12.jpg')`,
          }}
        ></div>

        <Navbar />
        <motion.div {...slideAnimation("down")} className="mt-8 lg:mt-96 flex flex-col items-center justify-center">
          <div className="z-10 font-roboto font-bold text-white text-shadow-lg text-4xl lg:text-6xl">
            Find Your Drive
          </div>
          <CarBooking />
        </motion.div>
        <div
          className="absolute bottom-0 w-full bg-cover bg-center h-1/2 lg:h-[30.5%] z-[-1] bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/carKeys2.jpg')`,

            opacity: 1.1,
          }}
        ></div>
      </main>
    </AnimatePresence>
  );
};

export default CarHome;
