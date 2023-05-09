import React from "react";
import TransitioningBorder from "./TransitioningBorder";
import { motion } from "framer-motion";
import { borderAnimation, fadeAnimation } from "../config/motion";
const LandingPageSection4 = () => {
  return (
    <main className=" w-full px-20 mx-auto h-screen min-h-screen pt-40 relative flex flex-col">
      <section class="grid grid-cols-2 gap-8">
        <div className="why__title">WHY WE DO IT BETTER</div>
        <div className="why__title">
          Antaeus Travel Group consists of a highly motivated and well
          experienced team of passionate travel advisors, providing you holistic
          travel services for almost any place in the world.
        </div>
        <div class="why__description">
          <span className="why__description_num">1</span>
          International physical office network
          
        </div>
        <div class="why__description">
          <span className="why__description_num">2</span>
          <p> 24/7 support all year round</p>
          <motion.hr {...borderAnimation} className="my-6 h-24 w-full !important" />
        </div>
        <div class="why__description">
          <span className="why__description_num">3</span> Global availability &
          supplier management
        </div>
        <div class="why__description">
          <span className="why__description_num">4</span> Tailor-made travel
          service
        </div>
        <div class="why__description">
          <span className="why__description_num">5</span> Cost control
          management{" "}
        </div>
        <div class="why__description">
          <span className="why__description_num">6</span> New digital travel
          management platform
        </div>
      </section>
    </main>
  );
};

export default LandingPageSection4;
