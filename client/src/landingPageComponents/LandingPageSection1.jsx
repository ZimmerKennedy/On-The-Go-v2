import React from "react";
import { DiagonalArrow } from "../config/svgs";
import { useNavigate } from "react-router-dom";
const LandingPageSection1 = () => {
  const navigate = useNavigate();
  return (
    <section className=" w-full px-20 mx-auto  min-h-screen">
      <div className="absolute top-[50%] transform -translate-y-1/2 ">
        <ul className="no__list ">
          <li className="title__large title text-left tracking-tighter">
            ON BOARD
          </li>
          <li className="title__large title tracking-tighter">
            ON TIME. <span>ANYTIME.</span>
          </li>
          <li className="title__large title text-right tracking-tighter">
            WORLDWIDE.
          </li>
        </ul>

        <ul className="no__list">
          <li className="absolute top-[48%] left-[15%] animate__bounce w-72 h-72">
            <div className="title__circle relative"
              onClick={() => navigate("/hotel-home")}
            >
              <div className="title__circle__desc">Book Hotels</div>
            </div>
          </li>
          <li className="absolute top-[-10%] left-[48%] animate__bounce  w-72 h-72">
            <div className="title__circle relative"
              onClick={() => navigate("/car-home")}
            >
              <span className="title__circle__desc">Rent Cars</span>
            </div>
          </li>
          <li className="absolute top-[50%] right-[5%] animate__bounce  w-72 h-72">
            <div className="title__circle relative"
              onClick={() => navigate("/flight-home")}
            >
              <span className="title__circle__desc">Book Flights</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="absolute bottom-5">
        <ul className="no__list flex flex-row justify-between w-[90vw] h-full text-text-color text-xl">
          <li className="flex flex-row">MANILA <span className="diagonal__rotate"><DiagonalArrow fill={"#E3E0DB"} width={30} height={30}/></span></li>
          <li className="flex flex-row">EGYPT <span className="diagonal__rotate"><DiagonalArrow fill={"#E3E0DB"} width={30} height={30}/></span></li>
          <li className="flex flex-row">ROME <span className="diagonal__rotate"><DiagonalArrow fill={"#E3E0DB"} width={30} height={30}/></span></li>
          <li className="flex flex-row">GREECE <span className="diagonal__rotate"><DiagonalArrow fill={"#E3E0DB"} width={30} height={30}/></span></li>
          <li className="flex flex-row">BALI <span className="diagonal__rotate"><DiagonalArrow fill={"#E3E0DB"} width={30} height={30}/></span></li>
         
        </ul>
      </div>
    </section>
  );
};

export default LandingPageSection1;
