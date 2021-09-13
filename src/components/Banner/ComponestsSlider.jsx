import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Arrows({ prev, next }) {
  return (
    <div className="arrow">
      <span className="prev" onClick={prev}>
        <IoIosArrowBack />
      </span>

      <span className="next" onClick={next}>
        <IoIosArrowForward />
      </span>
    </div>
  );
}

function Dots({ activeIndex, onclick, sliderImage }) {
  return (
    <div className="all-dots">
      {sliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides activeSlider" : "inactive"}
        >
          <img className="slide-image" src={slide.image} alt="Banner" />

          <div className="banner-slide-info">
            <h2 className="slide-title">{slide.title}</h2>
            <p className="slide-subtilte">{slide.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export { Arrows, Dots, SliderContent };
