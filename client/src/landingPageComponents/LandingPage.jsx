import React, { useState, useEffect } from "react";
import LandingPageSection1 from "./LandingPageSection1";
import LandingPageSection2 from "./LandingPageSection2";

import { Parallax } from "react-parallax";

import { AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";

const LandingPage = () => {
  return (
    <main className="overflow-hidden bg-primary-color">
      <Navbar />
      <LandingPageSection1 />
      <LandingPageSection2 />
    </main>
  );
};

export default LandingPage;
