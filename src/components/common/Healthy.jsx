import React from "react";
import "./common.css";
import logo from "/alfaa-logo.png";
import { Link } from "react-router-dom";
const Healthy = () => {
  return (
    
    <div className="event-details-item2">
      <div className="ed-item2-logo">
        <img src={logo} alt="" />
      </div>
      <div className="ed-item2-text">
        <h4>Healthy People Better in The World</h4>
        <span>$6,790 of $10,000 raised</span>
      </div>
      <div>
        <Link to="/donate" className="donate-outline-btn">Donate Now</Link>
      </div>
    </div>
  );
};
export default Healthy;
