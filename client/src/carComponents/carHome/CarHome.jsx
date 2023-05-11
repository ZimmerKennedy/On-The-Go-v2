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
      <main>
        <Navbar />
        <div
          className="absolute top-0 z-[-1] w-full h-screen  bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1471479917193-f00955256257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80')`,
          }}
        ></div>

        <motion.div {...slideAnimation("down")} className="mt-8 lg:mt-96 flex flex-col items-center justify-center">
          <div className="z-10 font-roboto font-bold text-white text-shadow-lg text-4xl lg:text-6xl">
            Find Your Drive
          </div>
          <CarBooking />
        </motion.div>
      </main>
    </AnimatePresence>
  );
};

export default CarHome;
