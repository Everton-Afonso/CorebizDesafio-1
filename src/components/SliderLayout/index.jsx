import React, { useEffect, useState, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ImWhatsapp } from "react-icons/im";

import Stars from "../Stars";

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
        <section className="buttons">
          <button onClick={handleLeftClick}>
            <IoIosArrowBack className="buttons-icon" />
          </button>
        </section>

        <section className="slider-container">
          <section className="slider-carousel" ref={sliderCarousel}>
            {data.map((item) => {
              const { id, name, price, oldPrice, image } = item;
              const installment = (price / 9).toFixed(2);

              return (
                <section className="slider-item" key={id}>
                  <div className="slider-image">
                    <img src={image} alt="Shoe on sale" />
                  </div>

                  <div className="slider-info">
                    <span className="slider-name">{name.toUpperCase()}</span>
                    <Stars />
                    <span className="slider-old-price">de R$ {oldPrice}</span>
                    <span className="slider-price">por R$ {price}</span>
                    <span className="slider-installment">
                      ou em 9x de R$ {installment}
                    </span>
                  </div>

                  <div className="container-button">
                    <a href="/" className="button button--flex">
                      <ImWhatsapp />
                      COMPRAR
                    </a>
                  </div>
                </section>
              );
            })}
          </section>
        </section>

        <section className="buttons">
          <button onClick={handleRightClick}>
            <IoIosArrowForward className="buttons-icon" />
          </button>
        </section>
      </section>
    </section>
  );
};

export default SliderLayout;
