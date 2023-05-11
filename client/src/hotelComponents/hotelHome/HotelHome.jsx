import React from 'react'
import HotelBooking from '../hotelBooking/HotelBooking'
import Navbar from "../../Navbar";
import { AnimatePresence, motion } from "framer-motion";
import {
  slideAnimation,
} from "../../config/motion";
const HotelHome = () => {
  return (
    <AnimatePresence>
      <main className="overflow-visible">
        <div
          className="absolute top-0 w-full h-screen  bg-cover bg-center z-[-5]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`,
          }}
        ></div>

        <Navbar />
        <motion.div {...slideAnimation("down")} className="mt-8 lg:mt-96 flex flex-col items-center justify-center">
          <div className="font-roboto font-bold text-white text-shadow-lg text-4xl lg:text-6xl  ">
            Book Your Stay
          </div>
          <HotelBooking />
        </motion.div>
        {/* <div
          className=" absolute bottom-0 w-full bg-cover bg-center h-1/2 lg:h-[70%] z-[-10] bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/hotelKeys2.jpg')`,

            opacity: 1.1,
          }}
        ></div> */}
      </main>
    </AnimatePresence>
  );
};
export default HotelHome