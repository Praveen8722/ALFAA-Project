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
import { CgAsterisk } from "react-icons/cg";
const DonateNow = () => {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '19a4a8c0-40cc-4f60-89bc-047cb376e3a4');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
      setTimeout(() => {
        setResult('');
      }, 2000);
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };
  const getResultStyle = () => {
    if (result === 'Sending....') {
      return { color: '#FE7F4C' };
    } else if (result === 'Form Submitted Successfully') {
      return { color: 'green' };
    } else {
      return {};
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HeroSection subHead="Home / Donations" mainHead="Donate Now" />
      <div className="donation-details-area py-5">
        <div className="container dd-container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="evet-details-left-box">
                <div className="ed-thumb position-relative py-0">
                  <img src={event1} alt="" className="img-fluid" />
                  <div className="ed-thumb-text d-none d-md-block">
                    <span>Health</span>
                  </div>
                </div>

                <div
                  className="dd-progress-container col-xl-11"
                  style={{ width: "96%" }}
                >
                  <div className="d-flex flex-row align-items-center justify-content-between">
                    <div className="dd-progress-item d-flex flex-column gap-2 col-xl-12 col-lg-11">
                      <div style={{ float: "right" }}>
                        <span className="dd-progress-count">80%</span>
                      </div>

                      <div
                        className="progress"
                        style={{
                          marginBlockStart: "0px",
                          marginBottom: "10px",
                        }}
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
                  </div>
                </div>
              </div>
              <div className="personal-information-box">
                <h4 className="ed-title">Donation Form</h4>
                <span>Fields marked with an <CgAsterisk color="#e80000"/> are required</span>
                <form id="contact-form" onSubmit={onSubmit} className="mt-5">
                  <div class="row">
                    <div class="col-xl-10 mb-5">
                      <div class="tp-donation-details__input">
                        <label>Name<sup><CgAsterisk color="#e80000"/></sup></label>
                        <input type="text" requuired/>
                      </div>
                    </div>

                    <div class="col-xl-10 mb-5">
                      <div class="tp-donation-details__input">
                        <label>City</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div class="col-xl-10 mb-5">
                      <div class="tp-donation-details__input">
                        <label>State</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-xl-10 mb-5">
                      <div className="tp-donation-details__input">
                        <label>Country</label>
                        <select>
                          <option>New York US</option>
                          <option>Berlin Germany</option>
                          <option>Paris France</option>
                          <option>Tokiyo Japan</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-xl-10 mb-5">
                      <div class="tp-donation-details__input">
                        <label>Phone Number<sup><CgAsterisk color="#e80000"/></sup></label>
                        <input type="text" required/>
                      </div>
                    </div>
                    <div class="col-xl-10 mb-5">
                      <div class="tp-donation-details__input">
                        <label>Enter Your Mail<sup><CgAsterisk color="#e80000"/></sup></label>
                        <input type="email" required/>
                      </div>
                    </div>

                    <div className="col-xl-10 mb-5">
                      <div className="tp-donation-details__input">
                        <label>Message</label>
                        <textarea
                          name="message"
                          placeholder="Write Your Message"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div class="postbox__comment-agree-2 pb-50">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label text-theme"
                          htmlFor="flexCheckDefault"
                        >
                          You are agree to terms
                        </label>
                      </div>
                    </div>
                    <div className="col-xl-4 my-5">
                    <div className="postbox__comment-btn">
                        <button type="submit" className="donate-btn border-0">
                          Submit 
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <span style={getResultStyle()} className='my-3'>{result}</span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="event-details-right-box">
                <div className="ed-author-info">
                  <div className="ed-author-thumb">
                    <img
                      src="https://html.hixstudio.net/poorex-prev/assets/img/donate/author-1-4.png"
                      alt=""
                    />
                  </div>
                  <div className="ed-author-text">
                    <h5>Kaira Beasley</h5>
                    <span>Host & Speaker</span>
                  </div>
                  <div className="ed-author-social-box"></div>
                </div>
                <div>
                  <Healthy />
                </div>
                <div>
                  <OurLatestPost />
                </div>
                <div>
                  <Tags />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DonateNow;
