import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './AboutUs.css';

const BrandSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="brand-area my-5">
      <div className="container brand-area-container">
        <Slider {...settings}>
          <div>
            <img
              src="https://html.hixstudio.net/poorex-prev/assets/img/brand/brand-2-3.png"
              alt="Brand 1"
            />
          </div>
          <div>
            <img
              src="https://html.hixstudio.net/poorex-prev/assets/img/brand/brand-2-2.png"
              alt="Brand 2"
            />
          </div>
          <div>
            <img
              src="https://html.hixstudio.net/poorex-prev/assets/img/brand/brand-2-4.png"
              alt="Brand 3"
            />
          </div>
          <div>
            <img
              src="https://html.hixstudio.net/poorex-prev/assets/img/brand/brand-2-1.png"
              alt="Brand 4"
            />
          </div>
          <div>
            <img
              src="https://html.hixstudio.net/poorex-prev/assets/img/brand/brand-2-2.png"
              alt="Brand 5"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BrandSlider;
