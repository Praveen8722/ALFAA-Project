import React from "react";
import "./LandingSection.css";

import { Link } from "react-router-dom";

import { FaBookAtlas} from "react-icons/fa6";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { FaHandsHoldingChild } from "react-icons/fa6";


const LandingSection = () => {

  return (
    <>
      <div className="hero_section">
        <div className="container">
          <div className="hero_section_content ">
            <div className="animated fadeInLeft header-content">
              <h2 className="text-center">
                Assisted Living for Autistic Adults
              </h2>
            </div>
            <div className="more-btn">
              <div className=" animated tpfadeUp btn donate-btn">
                <Link className="text-decoration" to="/about">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------   Charity Cards --------------*/}
      <div className="charity-cards-area">
        <div className="container charity_cards">
          <div className="d-flex justify-content-center">
            <div className="row g-3 justify-content-center">
              <div className="col-md-4">
                <div className="card h-100">
                  <div className="card-body charity_card">
                    <div className="d-flex justify-content-between align-items-center gap-5">
                      <h4 className="card-title mb-0">We Find & Fund</h4>
                      <div className="icon-container">
                      <FaCircleDollarToSlot size={32}/>
                      </div>
                    </div>
                    <p className="card-text mt-2">
                      Charity is the act of extending love and kindness to
                      others.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100">
                  <div className="card-body charity_card">
                    <div className="d-flex justify-content-between align-items-center gap-5">
                      <h4 className="card-title mb-0">
                      We Educate
                      </h4>
                      <div className="icon-container">
                        <FaBookAtlas size={32} />
                      </div>
                    </div>
                    <p className="card-text mt-2">
                      Charity is the act of extending love and kindness to
                      others.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100">
                  <div className="card-body charity_card">
                    <div className="d-flex justify-content-between align-items-center gap-5">
                      <h4 className="card-title mb-0">We Provide Care</h4>
                      <div className="icon-container">
                      <FaHandsHoldingChild  size={32}/>
                      </div>
                    </div>
                    <p className="card-text mt-2">
                      Charity is the act of extending love and kindness to
                      others.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingSection;
