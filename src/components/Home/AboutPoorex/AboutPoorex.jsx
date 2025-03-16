import React, { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import img1 from "../../../assets/g6.jpg";
import "./AboutPoorex.css";

const AboutPoorex = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  const handleVideoOpen = () => {
    setShowVideo(true);
  };

  const handleVideoClose = () => {
    setShowVideo(false);
  };

  return (
    <div className="container about_poorex my-5">
      <div className="about_poorex_left animated tpfadeInDown">
        <div className="about_section_title mt-5">
          <h4 className="as_title">About Alfaa</h4>
        </div>
        <div className="about_section_title">
          <div className="as_text">
            <p>
              ALFAA is Assisted Living for Adults. The primary to create
              Autistic objective of ALFAA good quality living was conditions and
              related facilities for adults with Autism in India.
            </p>
          </div>
          <div className="as_bottom ">
            <div className="btn donate-btn ">
              <Link className="text-decoration" to="/aboutus">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="about_poorex_right animated fadeInRight ">
        <div className="col-sm-10 apr-main-img">
          <img src={img1} alt=""  className="about-image" />
          {/* <div className="apr-thumbnil-img col-sm-12 ">
            <img
            src="https://html.hixstudio.net/poorex-prev/assets/img/about/about-1.png"
            alt=""
          />
          </div>
          <div className="video_icon" onClick={handleVideoOpen}>
            <div className="play_icon">
              <FaPlay size={25} />
            </div>
          </div> */}
        </div>
      </div>

      {showVideo && (
        <div className="video-overlay">
          <div className="video-container">
            <iframe
              width="100%"
              height="100%"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <button className="close-video" onClick={handleVideoClose}>
            <FaTimes size={25} />
          </button>
        </div>
      )}
    </div>
  );
};

export default AboutPoorex;
