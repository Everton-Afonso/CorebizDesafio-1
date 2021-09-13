  
import React, { useEffect, useState } from "react";

import {Arrows, Dots, SliderContent } from "./ComponestsSlider";
import imageSlider from "./imageSlider";

import "./styles.css";

const len = imageSlider.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 50000000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="banner-container">
      <SliderContent activeIndex={activeIndex} sliderImage={imageSlider} />
      <Arrows
        prev={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        next={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={imageSlider}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;