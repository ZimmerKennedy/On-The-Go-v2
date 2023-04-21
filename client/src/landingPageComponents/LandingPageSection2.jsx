import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { slideAnimation, headContainerAnimation, fadeAnimation } from "../config/motion";
import { useInView } from "react-intersection-observer";
import LandingPageSection3 from "./LandingPageSection3";

const LandingPageSection2 = () => {
  const [ref, inView] = useInView({
    threshold: 0.2, 
  });

  return (
    <AnimatePresence>
      <main ref={ref} className="w-full min-h-screen bg-white pt-28">
        {inView && (
          <>
            <motion.section
            
            {...fadeAnimation}
            className="flex flex-col items-center">
              <div
                
                className="tracking-widest text-lg lg:text-2xl italic text-shadow-default"
              >
                Travel Support
              </div>
              <div className=" text-xl font-roboto font-bold  sm:text-4xl lg:text-5xl mt-5 text-shadow-default text-slate-100 text-shadow-lg">
                Plan your next travel with confidence
              </div>
              <div
                
                {...slideAnimation("right")}
                className="text-sm sm:text-base lg:text-xl mt-5 text-navy-blue mx-2 text-shadow-default backdrop-blur-sm text-center"
              >
                Find help with booking and travel plans, see what to expect
                along the journey!
              </div>
            </motion.section>
            <section
              className="  flex flex-row lg:items-center justify-center w-full gap-14 lg:gap-0 "
            >
              <motion.div
               
               {...slideAnimation("left")} 
               className=" flex flex-col flex-wrap w-1/4 ">
                <div className="font-roboto text-2xl text-slate-300 font-semibold text-shadow-lg">
                  01
                </div>
                <div className="mb-7 font-inter-tight text-light-blue font-semibold ">
                  Travel hassle-free with On The Go! Book flights, hotels, and
                  rental cars in one place for your dream trip.
                </div>
                <div className="font-roboto text-2xl text-slate-300 font-semibold text-shadow-lg">
                  02
                </div>
                <div className="mb-7 font-inter-tight text-light-blue font-semibold">
                  Gain travel support and foresight! Our platform streamlines
                  bookings while providing valuable journey insights.
                </div>
                <div className="font-roboto text-2xl text-slate-300 font-semibold text-shadow-lg">
                  03
                </div>
                <div className="mb-7 font-inter-tight text-light-blue font-semibold">
                  Empower your travels! Receive booking assistance and
                  anticipate experiences for a memorable adventure.
                </div>
              </motion.div>

              <motion.div
               
               {...slideAnimation("right")}
              className="flex lg:flex-row relative flex-col justify-around">
                <img
                  src="/assets/window2.jpg"
                  className="w-36 h-42  rounded-t-full  overflow-hidden lg:-right-7 relative z-10 lg:mb-0 mt-10 "
                />
                <img
                  src="/assets/hotel-window.jpg"
                  className="w-36 h-42 rounded-t-full  overflow-hidden lg:-top-16 relative z-20 lg:mb-0 mt-10"
                />
                <img
                  src="/assets/car-window.jpg"
                  className="w-36 h-42 rounded-t-full  overflow-hidden lg:-left-7 relative z-30 lg:mb-0 mt-10 "
                />
              </motion.div>
            </section>
            
        <motion.section 
          {...fadeAnimation}
        className="flex w-full h-full justify-center items-center">
        <LandingPageSection3 />
        </motion.section>
          </>
        )}
      </main>
    </AnimatePresence>
  );
};

export default LandingPageSection2;
