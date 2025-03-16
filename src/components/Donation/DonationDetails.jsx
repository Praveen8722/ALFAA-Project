import React, { useEffect } from "react";
import HeroSection from "../common/HeroSection";
import event1 from "../../assets/event-details-1-3.jpg";
import "./Donation.css";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import PostComment from "../common/PostComment";
import Healthy from "../common/Healthy";
import OurLatestPost from "../common/OurLatestPost";
import Tags from "../common/Tags";
const DonationDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HeroSection subHead="Home / Donations" mainHead="Donation Details" />
      <div className="donation-details-area py-5">
        <div className="container dd-container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="evet-details-left-box">
                <div className="ed-thumb position-relative ">
                  <img src={event1} alt="" className="img-fluid" />
                  <div className="ed-thumb-text d-none d-md-block">
                    <span>08 April</span>
                  </div>
                </div>
                <h4 className="ed-title">
                  Your Help Make Someone’s life Easier
                </h4>
                <div className="ed-text">
                  <p>
                    Curabitur luctus euismod metus, eu pellentesque mauris
                    tempus sit amet. Proin ante posuerelacus auctor, elementum
                    tempor tellus. Integer mattis justo eu enim tempus lacinia.
                    Fusce vitae enim diam. Ut commodo viverra magna non egestas.
                    Integer sodales massa at odio tristique volutpat. Proin
                    posuere odio maximus, eleifend felis sed, ultrices turpis.
                    Proin ultricies sodales nisl vel euismod. Praesent
                    vestibulum sem lorem, eget fermentum justo iaculis et.
                    Integer tellus dolor, venenatis vita tortor et,accumsan
                    laoreet sem. Sed laoreet rutrum ex, et efficitur
                  </p>
                </div>
                <div className="dd-progress-container">
                  <div className="d-flex flex-row align-items-center justify-content-between">
                    <div className="dd-progress-item d-flex flex-column gap-2 col-xl-6 col-lg-12">
                      <div style={{float:'right'}}><span className="dd-progress-count" >80%</span></div>

                      <div
                        className="progress"
                        style={{ marginBlockStart: "0px", marginBottom:'10px' }}
                      >
                        <div
                          className="progress-bar animated slideInLeft"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-row gap-1">
                          <span className="raised-text">Raised</span>
                          <span className="raised-count">
                            <b>$4,407</b>
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
                    <div className="btn donate-btn d-none d-xl-block">
                      <Link className="text-decoration" to="/donate">
                        Donate Now
                      </Link>
                    </div>
                  </div>
                </div>
                <h4 className="ed-title">Summery</h4>
                <div className="ed-text">
                  <p>
                    Curabitur luctus euismod metus, eu pellentesque mauris
                    tempus sit amet. Proin ante posuerelacus auctor, elementum
                    tempor tellus. Integer mattis justo eu enim tempus lacinia.
                    Fusce vitae enimcommodo viverra magna non egestas. Integer
                    sodales massa at odio
                  </p>
                </div>
                <div className="dd-register-thumb d-flex flex-row justify-content-between ">
                  <img
                    src="https://html.hixstudio.net/poorex-prev/assets/img/event/event-details-1-4.jpg"
                    alt=""
                    
                  />
                  <img
                    src="https://html.hixstudio.net/poorex-prev/assets/img/event/event-details-1-5.jpg"
                    alt=""
                    
                  />
                </div>
                <div className="dd-register-text">
                  <div className="dd-register-list">
                    <div className="d-flex-flex-column">
                      <div className="d-flex flex-row gap-2 ">
                        <div>
                          <TiTick className="register-tick" size={20}/>
                        </div>
                        <div>
                          <p className="register-list-p">Sed ut perspiciatis unde iste natus</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row gap-2 ">
                        <div>
                          <TiTick className="register-tick" size={20}/>
                        </div>
                        <div>
                          <p className="register-list-p">Sed ut perspiciatis unde iste natus</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row gap-2 ">
                        <div>
                          <TiTick className="register-tick" size={20}/>
                        </div>
                        <div>
                          <p className="register-list-p">Sed ut perspiciatis unde iste natus</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="ed-title">Recent Donors</h4>
                <div className="dd-donation-details gap-3">
                  <div className="dd-donation-details-item text-center ">
                    <img src="https://html.hixstudio.net/poorex-prev/assets/img/donate/author-1-1.png" alt="" />
                    <h5>Charlotte Ava</h5>
                    <span>$480</span>
                  </div>
                  <div className="dd-donation-details-item text-center ">
                    <img src="https://html.hixstudio.net/poorex-prev/assets/img/donate/author-1-1.png" alt="" />
                    <h5>Charlotte Ava</h5>
                    <span>$480</span>
                  </div>
                  <div className="dd-donation-details-item text-center">
                    <img src="https://html.hixstudio.net/poorex-prev/assets/img/donate/author-1-1.png" alt="" />
                    <h5>Charlotte Ava</h5>
                    <span>$480</span>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="event-details-right-box">
                <div className="ed-author-info">
                  <div className="ed-author-thumb">
                    <img src="https://html.hixstudio.net/poorex-prev/assets/img/donate/author-1-4.png" alt="" />
                  </div>
                  <div className="ed-author-text">
                    <h5>Kaira Beasley</h5>
                    <span>Host & Speaker</span>
                  </div>
                  <div className="ed-author-social-box"></div>
                </div>
                <div>
                  <Healthy/>
                </div>
                <div>
                  <OurLatestPost/>
                </div>
                <div>
                  <Tags/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PostComment/>
      </div>
      
    </>
  );
};
export default DonationDetails;
