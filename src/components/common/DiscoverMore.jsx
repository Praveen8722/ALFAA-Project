import React from "react";
import hands from "../../assets/volunteer.png";
import { Link } from "react-router-dom";
import "./common.css";
const DiscoverMore = () => {
  return (
    <div className="discover-more ">
      <div className="container discover-more-content ">
        <div className="d-flex flex-row justify-content-between align-content-center gap-5">
          <img
            src={hands}
            alt=""
            width="65px"
            height="65px"
            className="hands-icon"
          />
          <h4>Join your hand with us for a better life and future</h4>
        </div>
        <div className="btn donate-btn">
          <Link className="text-decoration" to="/about">
            Discover More
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DiscoverMore;
