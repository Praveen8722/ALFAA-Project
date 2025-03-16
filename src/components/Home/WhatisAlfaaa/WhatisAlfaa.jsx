import React from "react";
import "./WhatisAlfaa.css";
import { BiDonateHeart } from "react-icons/bi";
import campus from "../../../assets/campus.png";
import { GrProjects } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { FaPlaceOfWorship } from "react-icons/fa";
const WhatisAlfaa = () => {
  return (
    <>
      <div className="whatis-alfaa-container container my-5">
        <h2 className=" mb-4">What is ALFAA?</h2>
        <p>
          Assisted Living For Autistic Adults (ALFAA) was founded in 2009 by a
          mother hounded by these worrying questions and sad state of facilities
          available in India.The primary objective of ALFAA was to create good
          quality living conditions and related facilities for adults with
          Autism in India
        </p>
        <div className="row my-5">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-5 ">
            <div className="d-flex flex-row ">
              <div className="wa-icon">
                <BiDonateHeart />
              </div>
              <div className="d-flex flex-column ">
                <h5 className="wa-count">40</h5>
                <p>Kids Helped</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-5">
            <div className="d-flex flex-row ">
              <div className="wa-icon">
                <FaPlaceOfWorship />
              </div>
              <div className="d-flex flex-column ">
                <h5 className="wa-count">2.25 Acres</h5>
                <p>Campus</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-5">
            <div className="d-flex flex-row ">
              <div className="wa-icon">
                <SlCalender />
              </div>
              <div className="d-flex flex-column ">
                <h5 className="wa-count">2011</h5>
                <p>Since</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-5">
            <div className="d-flex flex-row ">
              <div className="wa-icon">
                <GrProjects />
              </div>
              <div className="d-flex flex-column ">
                <h4 className="wa-count">30</h4>
                <p>Projects</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="d-flex flex-row justify-content-between align-items-center mt-5">
          <div className="d-flex flex-row ">
            <div className="wa-icon">
              <BiDonateHeart />
            </div>
            <div className="d-flex flex-column ">
              <h5 className="wa-count">40</h5>
              <p>Kids Helped</p>
            </div>
          </div>
          <div className="d-flex flex-row ">
            <div className="wa-icon">
              <BiDonateHeart />
            </div>
            <div className="d-flex flex-column ">
              <h5 className="wa-count">2.25 Acres</h5>
              <p>Campus</p>
            </div>
          </div>
          <div className="d-flex flex-row ">
            <div className="wa-icon">
              <BiDonateHeart />
            </div>
            <div className="d-flex flex-column ">
              <h5 className="wa-count">2011</h5>
              <p>Since</p>
            </div>
          </div>
          <div className="d-flex flex-row ">
            <div className="wa-icon">
              <BiDonateHeart />
            </div>
            <div className="d-flex flex-column ">
              <h4 className="wa-count">30</h4>
              <p>Projects</p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default WhatisAlfaa;
