import React, { useEffect, useState, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "./styles.css";

const SliderLayout = () => {
  const [data, setData] = useState([]);
  const sliderCarousel = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/static/shoes.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    sliderCarousel.current.scrollLeft -= sliderCarousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    sliderCarousel.current.scrollLeft += sliderCarousel.current.offsetWidth;
  };

  if (!data || !data.length) {
    return null;
  }

  return (
    <section>
      <section className="best-sellers">
        <h1>Mais vendidos</h1>
        <div></div>
      </section>

      <section className="slider">
        <section className="bottons">
          <button onClick={handleLeftClick}>
            <IoIosArrowBack className="bottons-icon" />
          </button>
        </section>

        <section className="slider-container">
          <section className="slider-carousel" ref={sliderCarousel}>
            {data.map((item) => {
              const { id, name, price, oldPrice, image } = item;

              return (
                <div className="slider-item" key={id}>
                  <div className="slider-image">
                    <img src={image} alt="Shoe" />
                  </div>

                  <div className="slider-info">
                    <span className="slider-name">{name}</span>
                    <span className="slider-old-price">R$ {oldPrice}</span>
                    <span className="slider-price">R$ {price}</span>
                  </div>
                </div>
              );
            })}
          </section>
        </section>

        <section className="bottons">
          <button onClick={handleRightClick}>
            <IoIosArrowForward className="bottons-icon" />
          </button>
        </section>
      </section>
    </section>
  );
};

export default SliderLayout;
