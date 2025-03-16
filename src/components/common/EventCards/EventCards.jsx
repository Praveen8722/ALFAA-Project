import React from "react";
import { FaClock, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./EventCards.css";

const EventCard = ({ eventCards }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center my-5 event-area">
      <div className="row d-flex flex-row justify-content-center align-items-center">
        {eventCards.map((card, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 event-item"
          >
            <div className="card border-0 bg-white position-relative ">
              <div className="event-item_thumb ">
                <img
                  src={card.imgSrc}
                  className="card-img-top"
                  alt="Card Image"
                  style={{ borderRadius: "0px" }}
                />
                <div className="number-overlay">
                  <h4 className="m-0 text-white">{card.date}</h4>
                  <span className="text-white">{card.month}</span>
                </div>
              </div>
              <div className="card-body d-flex flex-column justify-content-between gap-3">
                <div className="card-subtitle d-flex flex-row justify-content-between">
                  <div className="time-location-icon gap-1">
                    <FaClock className="me-1" size={12} />
                    <span>4:30 am - 7:30 pm</span>
                  </div>
                  <div className="time-location-icon">
                    <FaMapMarkerAlt className="ms-3 me-1" size={12} />
                    <span>Watsica 24, USA</span>
                  </div>
                </div>
                <div>
                  <Link to="/eventdetails" className="text-decoration-none">
                    <h5 className="card-title card-title-h5">{card.header} </h5>
                  </Link>
                </div>
                <Link
                  to="/eventdetails"
                  className="mt-2 align-self-start read-more"
                >
                  Read More <FaArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCard;
