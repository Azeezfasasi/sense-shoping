// import React from "react";
// import '../css/Hero.css';

// function Hero() {
//     return (
//         <>
//         <div className="carousel-inner">
//           <div className="carousel-item">
//             <i className="carousel-arrow-back fa-solid fa-chevron-left"></i>
//             <div className="hero-container">
//               {/* slide 1 */}
//               <div className="hero-row">
//                 <div className="hero-text">
//                   <div className="hero-title">SUMMER 2020</div>
//                     <div className="h-1-headline-6">NEW COLLECTION</div>
//                     <div className="hero-sub-title">
//                     We know how large objects will act,
//                     <br />
//                     but things on a small scale.
//                     </div>
//                     <div className="hero-cta">
//                       <a href="" className="hero-btn-wrapper">
//                         <div className="hero-link">SHOP NOW</div>
//                       </a>
//                     </div>
//                 </div>
//                 <div className="hero-col-md-4" />
//               </div>
//               {/* slide 2 */}
//               <div className="hero-row">
//                 <div className="hero-text">
//                   <div className="hero-title">SUMMER 2020</div>
//                     <div className="h-1-headline-6">NEW COLLECTION</div>
//                     <div className="hero-sub-title">
//                     We know how large objects will act,
//                     <br />
//                     but things on a small scale.
//                     </div>
//                     <div className="hero-cta">
//                       <a href="" className="hero-btn-wrapper">
//                         <div className="hero-link">SHOP NOW</div>
//                       </a>
//                     </div>
//                 </div>
//                 <div className="hero-col-md-4" />
//               </div>
//               <i className="carousel-arrow-forward fa-solid fa-chevron-right"></i>
//             </div>
//           </div>
//         </div>

//         </>
//     )
// }

// export default Hero;

import React, { useState } from "react";
import "../css/Hero.css";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slides, you can add more slides here
  const slides = [
    {
      title: "SUMMER 2020",
      headline: "NEW COLLECTION",
      subtitle: "We know how large objects will act,\nbut things on a small scale.",
      cta: "SHOP NOW",
    },
    {
      title: "WINTER 2020",
      headline: "EXCLUSIVE COLLECTION",
      subtitle: "Discover the beauty of winter fashion.",
      cta: "EXPLORE NOW",
    },
    // Add more slides as needed
  ];

  const totalSlides = slides.length;

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  return (
    <>
      <div className="carousel-inner">
        <div className="carousel-item">
          <i
            className="carousel-arrow-back fa-solid fa-chevron-left"
            onClick={prevSlide}
          ></i>
          <div className="hero-container">
            {/* Map through the slides */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`hero-row ${index === currentSlide ? "active" : ""}`}
                style={{ display: index === currentSlide ? "flex" : "none" }}
              >
                <div className="hero-text">
                  <div className="hero-title">{slide.title}</div>
                  <div className="h-1-headline-6">{slide.headline}</div>
                  <div className="hero-sub-title">
                    {slide.subtitle.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="hero-cta">
                    <a href="" className="hero-btn-wrapper">
                      <div className="hero-link">{slide.cta}</div>
                    </a>
                  </div>
                </div>
                <div className="hero-col-md-4" />
              </div>
            ))}
            <i
            className="carousel-arrow-forward fa-solid fa-chevron-right"
            onClick={nextSlide}
          ></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
