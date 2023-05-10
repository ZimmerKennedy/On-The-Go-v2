import React from "react";
import { DiagonalArrow } from "../config/svgs";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import { borderAnimation, fadeAnimation, headContainerAnimation, headTextAnimation, slideAnimation } from "../config/motion";
const LandingPageSection1 = () => {

  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  const navigate = useNavigate();
  return (
    <section ref={ref} className="w-full px-4 lg:px-20 mx-auto h-screen lg:min-h-screen">
      {inView && (
        <>
      <div className="absolute top-[50%] transform -translate-y-1/2 ">
        <motion.ul {...headTextAnimation} className="no__list ">
          <li className="title__large__mobile md:title__large title text-left tracking-tighter">
            ON BOARD
          </li>
          <li className="title__large title tracking-tighter">
            ON TIME. <span>ANYTIME.</span>
          </li>
          <li className="title__large title text-right tracking-tighter">
            WORLDWIDE.
          </li>
        </motion.ul>

        <motion.ul {...fadeAnimation} className="no__list">
          <li className="absolute bottom-0 lg:top-[48%] lg:left-[15%] animate__bounce w-72 h-72">
            <div className="cursor-pointer block m-auto  w-1/2 h-1/2 lg:w-full lg:h-full rounded-full backdrop-blur-sm border-2 font-bruno-ace-sc text-text-color text-3xl transition-all"
              onClick={() => navigate("/hotel-home")}
            >
              <div className="absolute grid place-content-center top-0 left-0 w-full h-full text-sm lg:text-3xl">Book Hotels</div>
            </div>
          </li>
          <li className="absolute top-50 left-[45%] lg:top-[-10%] lg:left-[48%] animate__bounce  w-72 h-72">
            <div className="cursor-pointer block m-auto w-1/2 h-1/2 lg:w-full lg:h-full rounded-full backdrop-blur-sm border-2 font-bruno-ace-sc text-text-color text-3xl transition-all"
              onClick={() => navigate("/car-home")}
              >
              <span className="absolute grid place-content-center top-0 left-0 w-full h-full text-sm lg:text-3xl">Rent Cars</span>
            </div>
          </li>
          <li className="absolute top-[150%] right-[40%] lg:top-[50%] lg:right-[5%] animate__bounce  w-72 h-72">
            <div className="cursor-pointer block m-auto w-1/2 h-1/2 lg:w-full lg:h-full rounded-full backdrop-blur-sm border-2 font-bruno-ace-sc text-text-color text-3xl transition-all"
              onClick={() => navigate("/flight-home")}
              >
              <span className="absolute grid place-content-center top-0 left-0 w-full h-full text-sm lg:text-3xl">Book Flights</span>
            </div>
          </li>
        </motion.ul>
      </div>
      <motion.div {...slideAnimation("up")} className="absolute bottom-5">
        <ul className="no__list flex flex-row justify-between w-full lg:w-[90vw] h-full text-text-color text-xl">
          <li className="flex flex-row text-sm lg:text-xl">MANILA <span className="diagonal__rotate"><DiagonalArrow fill={"#E3E0DB"} width={30} height={30}/></span></li>
          <li className="flex flex-row text-sm lg:text-xl">EGYPT <span className="diagonal__rotate"><DiagonalArrow fill={"#E3E0DB"} width={30} height={30}/></span></li>
          <li className="flex flex-row text-sm lg:text-xl">ROME <span className="diagonal__rotate"><DiagonalArrow fill={"#E3E0DB"} width={30} height={30}/></span></li>
          <li className="flex flex-row text-sm lg:text-xl">GREECE <span className="diagonal__rotate"><DiagonalArrow fill={"#E3E0DB"} width={30} height={30}/></span></li>
          <li className="flex flex-row text-sm lg:text-xl">BALI <span className="diagonal__rotate"><DiagonalArrow fill={"#E3E0DB"} width={30} height={30}/></span></li>
         
        </ul>
      </motion.div>
      </>
      )}
    </section>
  );
};

export default LandingPageSection1;
