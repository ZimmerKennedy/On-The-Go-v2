import React from "react";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import { borderAnimation, fadeAnimation, headContainerAnimation, headTextAnimation, slideAnimation } from "../config/motion";
const LandingPageSection2 = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  return (
    <section ref={ref} className=" w-full px-20 mx-auto  min-h-screen pt-44">
      {inView && (
        <>
          <motion.div {...fadeAnimation}className="text-text-color font-medium py-2 px-2 text-xl">
            HOW WE ACTIVATE
          </motion.div>
          <motion.div {...headContainerAnimation} className="flex flex-row justify-between items-start">
            <div  className="font-bruno-ace-sc text-8xl w-[90vw] tracking-tighter font-medium text-text-color pb-16">
              STREAMLINED TICKET <span>MANAGEMENT SOLUTIONS</span>
            </div>
            <div className="justify-self-end border-2 rounded-r-full rounded-l-full py-4 px-6 text-2xl text-text-color font-roboto">
              01
            </div>
          </motion.div>
          <motion.hr {...borderAnimation} className="border-t-2 border-text-color"/>
          <motion.div {...slideAnimation("left")} className="mt-16 font-roboto text-text-color text-5xl font-500 w-[39vw]">
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
