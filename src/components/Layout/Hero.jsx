import React, { useState, useEffect } from "react";
// 1. Import the image at the top
import heroImage from "../../assets/handsome-smiling-asian-man-black-tshirt-pointing-fingers-up-looking-banner-pleased-yellow-back.jpg";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // const slides = [
  //   {
  //     src: "\assets\handsome-smiling-asian-man-black-tshirt-pointing-fingers-up-looking-banner-pleased-yellow-back.jpg",
  //     alt: "Slide 1",
  //   },
  //   {
  //     src: "/assets/handsome-smiling-asian-man-black-tshirt-pointing-fingers-up-looking-banner-pleased-yellow-back.jpg",
  //     alt: "Slide 2",
  //   },
  //   {
  //     src: "frontend/markrin/src/assets/handsome-smiling-asian-man-black-tshirt-pointing-fingers-up-looking-banner-pleased-yellow-back.jpg",
  //     alt: "Slide 3",
  //   },
  //   {
  //     src: "frontend/markrin/src/assets/handsome-smiling-asian-man-black-tshirt-pointing-fingers-up-looking-banner-pleased-yellow-back.jpg",
  //     alt: "Slide 4",
  //   },
  //   {
  //     src: "frontend/markrin/src/assets/handsome-smiling-asian-man-black-tshirt-pointing-fingers-up-looking-banner-pleased-yellow-back.jpg",
  //     alt: "Slide 5",
  //   },
  // ];

  // 2. Use the imported variable in your array
  const slides = [
    { src: heroImage, alt: "Slide 1" },
    { src: heroImage, alt: "Slide 2" },
    { src: heroImage, alt: "Slide 3" },
    { src: heroImage, alt: "Slide 4" },
    { src: heroImage, alt: "Slide 5" },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Optional: Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full ">
      {/* Carousel wrapper */}
      <div className="relative md:h-96 h-56 overflow-hidden rounded-lg md:h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out absolute inset-0 transition-opacity ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.src}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={slide.alt}
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        onClick={prevSlide}
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 5 7 7-7 7"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
