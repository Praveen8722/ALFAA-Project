import React, { useRef } from "react";
import img1 from "../../../assets/donate-shape-1-2.png";
import img2 from "../../../assets/donate-shape-1-3.png";
import img3 from "../../../assets/donate-shape-1-4.png";
import "./HelpThePeople.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const HelpThePeople = () => {
  const sliderRef = useRef(null);
  const helpCards = [
    {
      image:
        "https://html.hixstudio.net/poorex-prev/assets/img/donate/donate-1-1.png",
      linkText: "Contribute Make For The Somalians happy",
      description:
        "Street children are poor or homeless children who live on the streets.",
      percentage: "42",
      raised: "4,407",
      overlayText: "SHELTER",
    },
    {
      image:
        "https://html.hixstudio.net/poorex-prev/assets/img/donate/donate-1-2.png",
      linkText: "Give African Child A Good Education",
      description:
        "Street children are poor or homeless children who live on the streets.",
      percentage: "64",
      raised: "6,790",
      overlayText: "CHARITY",
    },
    {
      image:
        "https://html.hixstudio.net/poorex-prev/assets/img/donate/donate-1-3.png",
      linkText: "Raise Fund For Clean & Healthy Food",
      description:
        "Street children are poor or homeless children who live on the streets.",
      percentage: "82",
      raised: "8,904",
      overlayText: "FOOD",
    },
    {
      image:
        "https://html.hixstudio.net/poorex-prev/assets/img/donate/donate-3-3.png",
      linkText: "Raise Fund For Clean & Healthy Food",
      description:
        "Street children are poor or homeless children who live on the streets.",
      percentage: "82",
      raised: "8,904",
      overlayText: "FOOD",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };
  return (
    <>
      <div className="helpthe-people-area bg-light">
        <div className="help-shape-1 d-none d-xxl-block">
          <img src={img1} alt="" />
        </div>
        <div className="help-shape-2 d-none d-xxl-block">
          <img src={img2} alt="" />
        </div>
        <div className="help-shape-3 d-none d-lg-block">
          <img src={img3} alt="" />
        </div>
        <div className="helpthe-people-content">
          <div className="container help_container mt-5">
            <div className="d-flex flex-column justify-content-between">
              <div>
                <span className="as_subtitle">HELP THE PEOPLE</span>
              </div>
              <div className="d-flex flex-row justify-content-between ">
                <h4 className="as_title">Our Popular Causes</h4>
                <div className="d-flex flex-row gap-5">
                  <div className="rounded-icon" onClick={handlePrev}>
                    <FaArrowLeftLong size={14} />
                  </div>
                  <div className="rounded-icon" onClick={handleNext}>
                    <FaArrowRightLong size={14} />
                  </div>
                </div>
              </div>
            </div>
            <div className="htp_container-cards mt-5">
              <Slider ref={sliderRef} {...settings}>
                {helpCards.map((helpCard, index) => (
                  <div key={index} className="card border-0">
                    <div className="card-img-wrapper">
                      <img
                        src={helpCard.image}
                        alt="Card image"
                        className="card-img-top"
                      />

                      <div class="tp-donate__thumb-shape">
                        <img
                          src="https://html.hixstudio.net/poorex-prev/assets/img/donate/donate-shape-1.png"
                          alt=""
                        />
                        <div class="tp-donate__thumb-text">
                          <span>{helpCard.overlayText}</span>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <a href="#" className="link-text">
                        <h5>{helpCard.linkText}</h5>
                      </a>
                      <p className="help-desc">{helpCard.description}</p>
                      <div>
                        <p style={{ textAlign: "right" }} className="percent">
                          <b>{helpCard.percentage}%</b>
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            style={{ width: `${helpCard.percentage}%` }}
                          ></div>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                          <div className="d-flex flex-row gap-1">
                            <span className="raised-text">Raised</span>
                            <span className="raised-count">
                              <b>${helpCard.raised}</b>
                            </span>
                          </div>
                          <div className="d-flex flex-row gap-1">
                            <span className="raised-text">Goal</span>
                            <span className="raised-count">
                              <b>$10.000</b>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-5">
                        <div className="d-inline-block help-donate-btn ">
                          <Link className="btn " to="/donate">
                            Donate Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HelpThePeople;
