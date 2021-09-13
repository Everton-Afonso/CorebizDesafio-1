import React, { useEffect, useState, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "./styles.css";

const SliderLayout = () => {
  const [data, setData] = useState([]);
  const bannerCarousel = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/static/banner.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    bannerCarousel.current.scrollLeft -= bannerCarousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    bannerCarousel.current.scrollLeft += bannerCarousel.current.offsetWidth;
  };

  if (!data || !data.length) {
    return null;
  }

  return (
    <section>
      <section className="banner">
        <section className="banner-container">
          <section className="banner-carousel" ref={bannerCarousel}>
            {data.map((item) => {
              const { id, title, subtitle, image } = item;

              return (
                <section className="banner-item" key={id}>
                  <div className="banner-image">
                    <img src={image} alt="Banner" />
                  </div>

                  <div className="banner-info">
                    <span className="banner-name">{title}</span>
                    <span className="banner-name">{subtitle}</span>
                  </div>
                </section>
              );
            })}
          </section>
        </section>

        <section className="buttons-banner">
          <button onClick={handleLeftClick}>
            <IoIosArrowBack className="banner-icon" />
          </button>

          <button onClick={handleRightClick}>
            <IoIosArrowForward className="banner-icon" />
          </button>
        </section>
      </section>
    </section>
  );
};

export default SliderLayout;
