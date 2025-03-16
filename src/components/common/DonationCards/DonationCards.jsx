import React from "react";
import './DonationCards.css';
import { Link } from "react-router-dom";

const DonationCards = ({ helpCards }) => {
  return (
    <div className="help_container-cards mt-5">
      {helpCards.map((helpCard, index) => (
        <div key={index} className="card border-0 col-lg-3">
          <div className="card-img-wrapper">
            <img
              src={helpCard.image}
              alt="Card image"
              className="card-img-top"
            />
            <div className="tp-donate__thumb-shape">
              <img
                src={helpCard.shapeImage}
                alt="Shape"
              />
              <div className="tp-donate__thumb-text">
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
                    <b>$10,000</b>
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <div className="d-inline-block help-donate-btn">
                <Link className="btn" to="/donate">
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DonationCards;
