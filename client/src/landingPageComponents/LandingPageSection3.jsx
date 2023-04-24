import React, {useState} from "react";
import { faCaretRight, faCaretLeft,faCircle,
  faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const LandingPageSection3 = () => {

  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
       name: "Brazil",
    },
    {
      url: 'https://images.unsplash.com/photo-1543731068-7e0f5beff43a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      name: "Maldives",
    },
    {
      url: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: "Iceland",
    },
    {
      url: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      name: "Japan",
    },
    {
      url: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80',
      name: "Italy",
    },
    {
      url: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        name: "China",
    },
    {
      url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
       name: "India",
    },
    {
      url: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
       name: "Peru",
    },
    {
      url: 'https://images.unsplash.com/photo-1512813389649-acb9131ced20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
       name: "Mexico",
    },
    {
      url: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
       name: "Egypt",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[950px] h-screen lg:h-[780px] w-full py-10 px-2 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-cover duration-500 bg-center"
      >
        <div className=" w-full h-full flex items-center justify-center text-white text-4xl font-bold text-shadow-lg">
          {slides[currentIndex].name}
        </div>
      </div>
 
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer " onClick={prevSlide}>
        <FontAwesomeIcon icon={faCaretLeft} onClick={prevSlide} size="lg" />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={nextSlide}>
        <FontAwesomeIcon icon={faCaretRight} onClick={nextSlide} size="lg" />
      </div>
      <div className="flex justify-center space-x-2 py-2 bottom-4 absolute left-1/2 transform -translate-x-1/2">
        {slides.map((slide, slideIndex) => (
          <FontAwesomeIcon
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            icon={slideIndex === currentIndex ? faDotCircle : faCircle}
            className="text-xs text-light-blue cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default LandingPageSection3;
