import React from "react";
import "./Layout.css";
import { IoIosMail } from "react-icons/io";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
const Footer = () => {
  return (
    <>
      <div className="footer_container text-white ">
        <div className="d-flex align-items-center justify-content-center container pt-5">
          <div className="footer_text_wrapper">
            <div className="d-flex flex-column animated tpfadeUp logo-address" style={{marginTop:'-100px'}}>
              <div className="logo-bg">
                {/* <img src="/alfaa-logo.png" alt="" /> */}
              </div>
              {/* <img
                src="/alfaa-logo.png"
                alt=""
                width="150px"
                height="150px"
                className="bg-white"
              /> */}
              <div>
                <h4>ALFAA Pilot Project</h4>
              </div>
              <div className="d-flex flex-row gap-2">
                <span>
                  <IoLocation />
                </span>
                <p>
                  No 9, Omega Avenu Mathrushree Layout,
                  <br /> MARAGONDANAHALLI MAIN ROAD,
                  <br /> TC Palya, KR Puram,Bangalore 560036
                  <br /> (Near Diamond PU College)
                </p>
              </div>
              <div className="d-flex flex-row gap-2">
                <span>
                  <IoIosMail />
                </span>
                <p>
                  <a href="mailto:rubysingh_india@yahoo.co.in">
                    rubysingh_india@yahoo.co.in
                  </a>
                </p>
              </div>
              <div className="d-flex flex-row gap-2">
                <span>
                  <CgProfile />
                </span>
                <p>
                  <b>Contact Name: </b> Ruby Singh
                </p>
              </div>

              <div className="d-flex flex-row gap-2">
                <span>
                  <LiaPhoneVolumeSolid />
                </span>
                <a href="tel: +91 9741418103"> +91 9741418103</a>
              </div>
            </div>
            <div className="d-flex flex-column animated tpfadeUp" style={{marginTop:'50px'}}>
              <div>
                <h4>ALFAA Office Address</h4>
              </div>
              <div className="d-flex flex-row gap-2">
                <span>
                  <IoLocation />
                </span>
                <p>
                3B, CASSIA COURT 91/1, 
                <br/>COLES ROAD, FRASER TOWN,
                <br/>BANGALORE, KARNATAKA-560005
                </p>
              </div>

              <div className="d-flex flex-row gap-2">
                <span>
                  <IoIosMail />
                </span>
                <p>
                  <a href="mailto:alfaa2010@gmail.com">
                  alfaa2010@gmail.com
                  </a>
                </p>
              </div>

              <div className="d-flex flex-row gap-2">
                <span>
                  <LiaPhoneVolumeSolid />
                </span>
                <a href="tel: +91 9741418103"> 080- 25567762</a>
              </div>
            </div>
            <div className="navigation-links animated tpfadeUp " style={{marginTop:'40px'}}>
              <h4>Navigation</h4>
              <ul>
                <li className="nav-item ">
                  <Link className="nav-link" to="/aboutus">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/donations">
                    Donations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/events">
                    Events
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blogs">
                    Blog
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" to="/contactus">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 animated tpfadeUp footer-donate" style={{marginTop:'30px'}}>
              <h4>
                We Work Together For a Beautiful World, Come Join Us Today!
              </h4>
              <div className="btn donate-btn ">
                <Link className="text-decoration" to="/donatenow">
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="last-footer">
        <div className="container d-flex flex-row justify-content-between  py-3">
          <p className="text-white">© Copyright 2024 by Alfaa.org</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
