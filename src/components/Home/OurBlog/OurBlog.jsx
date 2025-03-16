import React from "react";
import "./OurBlog.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import img1 from '../../../assets/b1.jpg'
import img2 from '../../../assets/b2.jpg'
import img3 from '../../../assets/b3.jpg'
const OurBlog = () => {

    const images = [
        { src: img1, text: 'Lorem ipsum dolor sit amet.'},
        { src: img2, text: "Lorem ipsum dolor sit amet." },
        { src: img3, text: "Lorem ipsum dolor sit amet." },
      ];
  return (
    <>
      <div className="about_section_title d-flex align-items-center justify-content-center flex-column mt-5">
        <span className="as_subtitle">OUR BLOG</span>
        <h4 className="as_title">Check Our Latest Blogs</h4>
      </div>
      <div className="container d-flex align-items-center justify-content-center blog-section-container my-5">
      <div className="row">
        {images.map((image, index) => (
          <div className="col-12 col-md-6 col-lg-4 gap-0 mb-4" key={index}>
            <div className="image-wrapper position-relative">
              <img src={image.src} alt={`Image ${index + 1}`} className="img-fluid" />
              <div className="text-overlay">
                <div className="d-flex flex-column gap-1">
                <h4><Link className="link-decoration-none">{image.text}</Link></h4>
                <span>OCTOBER 24, 2022</span>
                <Link className="link-decoration-none">Read More <FaArrowRightLong /></Link>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};
export default OurBlog;
