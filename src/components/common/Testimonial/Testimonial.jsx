import React, { useState } from "react";
import Slider from "react-slick";
import "./Testimonial.css";
import author from "../../../assets/author-1-1.png"
import { FaStar } from "react-icons/fa";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
    <div className="testi_container-area">
      <div className="testi_container ">
        <div className="row g-3 d-flex flex-wrap align-items-center" >
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="testi_container-left-side">
              <div>
                <span className="as_subtitle">OUR TESTIMONIALS</span>
                <h4 className="as_title">What Our Trusties Tell About Us</h4>
              </div>
              <div className="as_text mt-4">
                <p>
                  Charity is the act of extending kindness unconditionally, a
                  conscious act made by the heart without expecting anything in return.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-6 col-md-6">
            <Slider {...settings}>
              {Array(3).fill(0).map((_, index) => (
                <div
                  key={index}
                  className={`testi-item ${index === activeSlide ? "active-item" : ""}`}
                >
                  <div className="test-item-header">
                    <img src={author} alt="Author" />
                  </div>
                  <div className={`test-item-content ${index === activeSlide ? "active" : ""}`}>
                    <div className="quote-icon-wrapper">
                      <div className="quote-icon my-3">
                        <BiSolidQuoteAltRight size={20} />
                      </div>
                    </div>
                    <div className="d-flex flex-column gap-3">
                      <div className="d-flex flex-row gap-1">
                        {Array(5).fill(0).map((_, starIndex) => (
                          <FaStar key={starIndex} color="#fe7f4c" />
                        ))}
                      </div>
                      <div>
                        <p>
                          We can help with both your work and personal life tasks,
                          letting you focus on what’s most important. There are many
                          variations of passages of Lorem Ipsum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="testi-item-footer">
                    <h4>Gimmy Alia</h4>
                    <span>Donor of Charity</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
