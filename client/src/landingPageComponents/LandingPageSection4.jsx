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
    <main ref={ref}className=" w-full px-20 mx-auto h-screen min-h-screen pt-40 relative flex flex-col">
    {inView &&(

        <section class="grid grid-cols-2 gap-8">
        <div className="why__title">WHY WE DO IT BETTER</div>
        <div className="why__title">
        On The Go comprised of a dedicated and highly experienced team of enthusiastic travel experts. Committed to providing comprehensive travel services for destinations across the globe. 
        </div>
        <div class="why__description">
          <span className="why__description_num">1</span>
          International physical office network
          <motion.hr {...borderAnimation} className="my-6 border-t-2 z-[-1] w-full" />
        </div>
        <div class="why__description">
          <span className="why__description_num">2</span>
         24/7 support all year round
          <motion.hr {...borderAnimation} className="my-6 border-t-2 z-[-1] w-full" />
        </div>
        <div class="why__description">
          <span className="why__description_num">3</span> Global availability &
          supplier management
          <motion.hr {...borderAnimation} className="my-6 border-t-2 z-[-1] w-full" />
        </div>
        <div class="why__description">
          <span className="why__description_num">4</span> Tailor-made travel
          service
          <motion.hr {...borderAnimation} className="my-6 border-t-2 z-[-1] w-full" />
        </div>
        <div class="why__description">
          <span className="why__description_num">5</span> Cost control
          Management
          <motion.hr {...borderAnimation} className="my-6 border-t-2 z-[-1] w-full" />
        </div>
        <div class="why__description">
          <span className="why__description_num">6</span> New digital travel
          management platform
          <motion.hr {...borderAnimation} className="my-6 border-t-2 z-[-1] w-full" />
        </div>
      </section>
    )}
    </main>
  );
};

export default LandingPageSection4;
