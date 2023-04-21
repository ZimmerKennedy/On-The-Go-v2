import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <main className="w-full flex items center justify-center pt-4">
    <nav className="z-50 backdrop-blur-sm bg-gray-300 bg-opacity-50 sticky group transition flex flex-row justify-between w-1/2 h-16 rounded-full">
      
      <div
        className="h-26 w-24 text-navy-blue bg-contain bg-center bg-no-repeat xl:ml-8 cursor-pointer"
        style={{
          backgroundImage: `url('/on-the-go-logo-navyBlue.png')`,
        }}
        onClick={() =>{
          navigate("/")
        }}
        ></div>
      <section className="hidden xl:flex flex-row p-4 text-xl font-semibold font-roboto group text-navy-blue">
        <div className="group">
          <div
            className="mx-4 relative bottom-border cursor-pointer"
            onClick={() => {
              navigate("/car-home");
            }}
            >
            Cars
          </div>
        </div>
        <div className="group">
          <div
            className="mx-4 relative bottom-border cursor-pointer"
            onClick={() => {
              navigate("/hotel-home");
            }}
            >
            Hotels
          </div>
        </div>
        <div className="group">
          <div
            className="mx-4 relative bottom-border cursor-pointer"
            onClick={() => {
              navigate("/flight-home");
            }}
            >
            Flights
          </div>
        </div>
      </section>
      <section className="hidden xl:flex group text-navy-blue">
        <div className="m-4 text-xl font-semibold font-roboto relative bottom-border cursor-pointer" onClick={() => navigate("/login")}>Login</div>
      </section>


      <div className="xl:hidden flex items-center px-6 cursor-pointer" onClick={handleMenuToggle}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </div>
      
     
    {menuOpen && (
        <div className="w-full h-screen absolute flex flex-col justify-evenly right-0 top-20 backdrop-blur-sm bg-opacity-90 bg-gray-200 text-navy-blue text-4xl font-semibold font-tilt-warp z-50">
          <div className="cursor-pointer text-center" onClick={() => navigate("/car-home")}>
            Cars
          </div>
          <div className="cursor-pointer text-center" onClick={() => navigate("/hotel-home")}>
            Hotels
          </div>
          <div className="cursor-pointer text-center" onClick={() => navigate("/flight-home")}>
            Flights
          </div>
          <div className="mb-40 cursor-pointer text-center" onClick={() => navigate("/login")}>Login</div>
        </div>
      )}
    </nav>
      </main>
  );
};

export default Navbar;