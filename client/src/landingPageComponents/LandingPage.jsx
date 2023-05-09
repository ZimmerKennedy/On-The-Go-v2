import React, { useState, useEffect, useRef } from "react";
import LandingPageSection1 from "./LandingPageSection1";
import LandingPageSection2 from "./LandingPageSection2";

import { Parallax } from "react-parallax";

import { AnimatePresence, motion, useInView, useIsPresent, useAnimation } from "framer-motion";
import Navbar from "../Navbar";
import LandingPageSection3 from "./LandingPageSection3";
import LandingPageSection4 from "./LandingPageSection4";



const LandingPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControls = useAnimation();
  useEffect(() =>{
    if(isInView){
      mainControls.start("animate");
    }
  })
  return (
    <main className="overflow-hidden bg-primary-color" ref={ref}>
      <Navbar />
      <LandingPageSection1 />
      <LandingPageSection2 />
      <LandingPageSection3 />
      <LandingPageSection4 />
    </main>
  );
};

export default LandingPage;
