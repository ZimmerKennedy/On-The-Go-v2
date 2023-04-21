import React, { useState, useEffect } from "react";
import LandingPageNavbar from "./landingPageComponents/LandingPageNavbar";
import LandingPageSection1 from "./landingPageComponents/LandingPageSection1";
import LoadingPage from "./LoadingPage";
import LandingPageSection2 from "./landingPageComponents/LandingPageSection2";
import { Parallax } from "react-parallax";

import { AnimatePresence } from "framer-motion";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  const imageUrls = [
    "/assets/tryImg5.jpg",
    "/assets/tryCar3.jpg",
    "/assets/tryPlane4.jpg",
    "/assets/tryHotel2.jpg",
  ];

  const loadAllImages = async (urls) => {
    const imagePromises = urls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(url);
        img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
      });
    });

    await Promise.all(imagePromises);
    setLoading(false);
  };

  useEffect(() => {
    loadAllImages(imageUrls);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <AnimatePresence>
      <main className="w-full h-full ">
        <Parallax
          bgImage={imageUrls[0]}
          blur={{ min: -5, max: 5 }}
          strength={200}
          bgImageStyle={{
            width: "100%",
            height: "100vh",
            backgroundSize: "cover",
          }}
        >
          <LandingPageNavbar />
          <section>
            <LandingPageSection1 />
          </section>
        </Parallax>
        <Parallax strength={100} blur={{ min: -5, max: 15 }}>
          <section>
            <LandingPageSection2 />
          </section>
        </Parallax>
      </main>
    </AnimatePresence>
  );
};

export default LandingPage;
