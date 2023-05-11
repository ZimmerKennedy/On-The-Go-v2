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
    <nav className="z-50 text-shadow-lg font-roboto backdrop-blur-sm bg-opacity-90 group transition flex flex-row justify-between w-full absolute top-0">
      <section
        className="h-24 w-24 bg-contain bg-center bg-no-repeat  cursor-pointer"
        style={{
          backgroundImage: `url('/on-the-go-logo-white.png')`,
        }}
        onClick={() => {
          navigate("/");
        }}
      ></section>
      <section className="nav__section ">
        <div
          className="nav__links"
          onClick={() => {
            navigate("/car-home");
          }}
        >
          Cars
        </div>

        <div
          className="nav__links"
          onClick={() => {
            navigate("/hotel-home");
          }}
        >
          Hotels
        </div>

        <div
          className="nav__links"
          onClick={() => {
            navigate("/flight-home");
          }}
        >
          Flights
        </div>
      </section>
      <section className="nav__section">
        <div
          className="nav__links"
          onClick={() => navigate("/login")}
        >
          Login
        </div>
      </section>




      <div
        className="xl:hidden flex items-center px-6 cursor-pointer"
        onClick={handleMenuToggle}
      >
        <FontAwesomeIcon icon={faBars} size="2xl" color="#E3E0DB" />
      </div>



      {menuOpen && (
        <div className="w-full h-screen absolute flex flex-col justify-evenly right-0 top-20 backdrop-blur-sm bg-opacity-90 bg-text-color text-primary-color text-4xl font-semibold font-tilt-warp z-50">
          <div
            className="cursor-pointer text-center"
            onClick={() => navigate("/car-home")}
          >
            Cars
          </div>
          <div
            className="cursor-pointer text-center"
            onClick={() => navigate("/hotel-home")}
          >
            Hotels
          </div>
          <div
            className="cursor-pointer text-center"
            onClick={() => navigate("/flight-home")}
          >
            Flights
          </div>
          <div
            className="mb-40 cursor-pointer text-center"
            onClick={() => navigate("/login")}
          >
            Login
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
