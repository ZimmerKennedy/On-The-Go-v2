import React from "react";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import { borderAnimation, fadeAnimation, headContainerAnimation, headTextAnimation, slideAnimation } from "../config/motion";
const LandingPageSection2 = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  return (
    <section ref={ref} className=" w-full lg:px-20 mx-auto h-full  lg:min-h-screen pt-32 lg:pt-44">
      {inView && (
        <>
          <motion.div {...fadeAnimation}className="text-text-color font-medium py-2 px-2 text-xl">
            HOW WE ACTIVATE
          </motion.div>
          <motion.div {...headContainerAnimation} className="flex flex-row justify-between items-start px-4 lg:px-0">
            <div className="font-bruno-ace-sc text-3xl lg:text-8xl w-[90vw] tracking-tighter font-medium text-text-color pb-4 lg:pb-16">
              STREAMLINED TICKET <span>MANAGEMENT SOLUTIONS</span>
            </div>
            <div className="justify-self-end border-2 rounded-r-full rounded-l-full px-4  lg:px-6 text-2xl text-text-color font-roboto">
              01
            </div>
          </motion.div>
          <motion.hr {...borderAnimation} className="mx-4 lg:mx-0 border-t-2 border-text-color"/>
          <motion.div {...slideAnimation("left")} className="mt-16 font-roboto text-text-color text-md lg:text-5xl font-500 w-[70vw] pl-4 lg:pl-0 lg:w-[39vw]">
            A multicultural Travel Management company with an international
            presence of 33+ years and specialization in the marine & corporate
            travel industry.
          </motion.div>
        </>
      )}
    </section>
  );
};

export default LandingPageSection2;
