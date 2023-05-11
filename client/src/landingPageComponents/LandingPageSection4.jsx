import React from "react";
import TransitioningBorder from "./TransitioningBorder";
import { AnimatePresence, motion } from "framer-motion";
import { slideAnimation, headContainerAnimation, fadeAnimation, borderAnimation } from "../config/motion";
import { useInView } from "react-intersection-observer";


const LandingPageSection4 = () => {
  const [ref, inView] = useInView({
    threshold: 0.2, 
  });
  return (
    <main ref={ref}className=" w-full px-10 lg:px-20 mx-auto h-screen min-h-screen pt-40 relative flex flex-col">
    {inView &&(

        <section class="grid grid-cols-2 gap-8">
        <div className="h-40 w-full text-text-color text-lg md:text-3xl font-roboto">WHY WE DO IT BETTER</div>
        <div className="h-40 w-full text-text-color text-xs md:text-3xl font-roboto">
        On The Go comprised of a dedicated and highly experienced team of enthusiastic travel experts. Committed to providing comprehensive travel services for destinations across the globe. 
        </div>
        <div class="h-40 w-full border-text-color font-bruno-ace-sc text-sm lg:text-2xl lg:tracking-wide text-text-color lg:py-4 px-4 lg:px-8 relative">
          <span className="absolute left-0 top-0 lg:text-xl font-bruno-ace-sc">1</span>
          International physical office network
          <motion.hr {...borderAnimation} className="my-6 border-t-2 z-[-1] w-full" />
        </div>
        <div class="h-40 w-full border-text-color font-bruno-ace-sc text-sm lg:text-2xl lg:tracking-wide text-text-color lg:py-4 px-4 lg:px-8 relative">
          <span className="absolute left-0 top-0 lg:text-xl font-bruno-ace-sc">2</span>
         24/7 support all year round
          <motion.hr {...borderAnimation} className="my-6 border-t-2 z-[-1] w-full" />
        </div>
        <div class="h-40 w-full border-text-color font-bruno-ace-sc text-sm lg:text-2xl lg:tracking-wide text-text-color lg:py-4 px-4 lg:px-8 relative">
          <span className="absolute left-0 top-0 lg:text-xl font-bruno-ace-sc">3</span> Global availability &
          supplier management
          <motion.hr {...borderAnimation} className="my-6 border-t-2 z-[-1] w-full" />
        </div>
        <div class="h-40 w-full border-text-color font-bruno-ace-sc text-sm lg:text-2xl lg:tracking-wide text-text-color lg:py-4 px-4 lg:px-8 relative">
          <span className="absolute left-0 top-0 lg:text-xl font-bruno-ace-sc">4</span> Tailor-made travel
          service
          <motion.hr {...borderAnimation} className="my-6 border-t-2 z-[-1] w-full" />
        </div>
        <div class="h-40 w-full border-text-color font-bruno-ace-sc text-sm lg:text-2xl lg:tracking-wide text-text-color lg:py-4 px-4 lg:px-8 relative">
          <span className="absolute left-0 top-0 lg:text-xl font-bruno-ace-sc">5</span> Cost control
          Management
          <motion.hr {...borderAnimation} className="my-6 border-t-2 z-[-1] w-full" />
        </div>
        <div class="h-40 w-full border-text-color font-bruno-ace-sc text-sm lg:text-2xl lg:tracking-wide text-text-color lg:py-4 px-4 lg:px-8 relative">
          <span className="absolute left-0 top-0 lg:text-xl font-bruno-ace-sc">6</span> New digital travel
          management platform
          <motion.hr {...borderAnimation} className="my-6 border-t-2 z-[-1] w-full" />
        </div>
      </section>
    )}
    </main>
  );
};

export default LandingPageSection4;
