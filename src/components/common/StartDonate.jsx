import React from "react";
import img1 from "../../assets/cta-shape-1-1.png";
import img2 from "../../assets/cta-shape-1-2.png";
import { Link } from "react-router-dom";
import "./common.css";
const StartDonate = () => {
  return (
    <div className="start-donate-container">
      <div className="tp-cta-2__shape-1 d-none d-xl-block">
        <img src={img1} alt="" />
      </div>
      <div className="tp-cta-2__shape-2 d-none d-xl-block">
        <img src={img2} alt="" />
      </div>
      <div className="d-flex align-items-center justify-content-center flex-column gap-3">
        <span>LET'S START SOMETHING FOR THEM</span>
        <h4 className="text-white animated tpfadeUp">No One Has Ever Become Poor From Giving</h4>
        <div className="btn donate-btn animated tpfadeUp">
          <Link className="text-decoration" to="/donate">
            Start Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
};
export default StartDonate;
