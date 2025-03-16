
import React, { useEffect, useState } from "react";
import HeroSection from "../common/HeroSection";
import "./Blog.css";
import { Link } from "react-router-dom";
import { AiOutlineTag, AiOutlineClose } from "react-icons/ai";
import { FaLongArrowAltRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RiPlayReverseLargeFill } from "react-icons/ri";
import { RiPlayLargeFill } from "react-icons/ri";
const Blog = () => {
  const blogs = [
    {
      id: 1,
      image:
        "https://html.hixstudio.net/poorex-prev/assets/img/blog/blog-2-1.jpg",
      tag: "FOOD",
      title: "Our Donation is Hope For Poor Childrens.",
      date: "OCTOBER 24, 2022",
    },
    {
      id: 2,
      image:
        "https://html.hixstudio.net/poorex-prev/assets/img/blog/blog-2-2.jpg",
      tag: "FOOD",
      title: "Our Donation is Hope For Poor Childrens.",
      date: "OCTOBER 24, 2022",
    },
    {
      id: 3,
      image:
        "https://html.hixstudio.net/poorex-prev/assets/img/blog/blog-2-1.jpg",
      tag: "FOOD",
      title: "Our Donation is Hope For Poor Childrens.",
      date: "OCTOBER 24, 2022",
    },
    {
      id: 4,
      image:
        "https://html.hixstudio.net/poorex-prev/assets/img/blog/blog-2-2.jpg",
      tag: "FOOD",
      title: "Our Donation is Hope For Poor Childrens.",
      date: "OCTOBER 24, 2022",
    },
    {
      id: 5,
      image:
        "https://html.hixstudio.net/poorex-prev/assets/img/blog/blog-2-1.jpg",
      tag: "FOOD",
      title: "Our Donation is Hope For Poor Childrens.",
      date: "OCTOBER 24, 2022",
    },
    {
      id: 6,
      image:
        "https://html.hixstudio.net/poorex-prev/assets/img/blog/blog-2-2.jpg",
      tag: "FOOD",
      title: "Our Donation is Hope For Poor Childrens.",
      date: "OCTOBER 24, 2022",
    },
  ];

  const [selectedBlogIndex, setSelectedBlogIndex] = useState(null);

  const handleOpen = (index) => {
    setSelectedBlogIndex(index);
  };

  const handleClose = () => {
    setSelectedBlogIndex(null);
  };

  const handlePrev = () => {
    setSelectedBlogIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : blogs.length - 1
    );
  };

  const handleNext = () => {
    setSelectedBlogIndex((prevIndex) =>
      prevIndex < blogs.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HeroSection subHead="Home / Blog" mainHead="Blog" />
      <div className="blog-area my-5">
        <div className="container blog-area-container">
          <div className="row">
            {blogs.map((blog, index) => (
              <div
                key={blog.id}
                className="col-xl-4 col-lg-6 col-md-6 col-sm-12 animated tpfadeUp blog-card-item"
              >
                <div className="blog-item">
                  <div className="blog-item-thumb">
                    <img src={blog.image} alt="" />
                    <div className="blog-icon">
                      <Link
                        className="plus-symbol"
                        onClick={() => handleOpen(index)}
                      >
                        +
                      </Link>
                    </div>
                  </div>
                  <div className="blog-item-content">
                    <div className="blog-tag mb-3">
                      <AiOutlineTag size={20} /> <span>{blog.tag}</span>
                    </div>
                    <Link className="blog-link">{blog.title}</Link>
                    <div>
                      <span className="blog-meta">{blog.date}</span>
                    </div>
                    <Link to="/blogdetails">
                      <div className="read-more-link">
                        <span>
                          Read More <FaLongArrowAltRight />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedBlogIndex !== null && (
        <div className="image-viewer-overlay">
          <div className="image-viewer-content">
            <button className="image-viewer-close" onClick={handleClose}>
              <AiOutlineClose size={24} />
            </button>
            <div className="d-flex flex-row justify-content-between">
              <button
                className="image-viewer-arrow image-viewer-arrow-left"
                onClick={handlePrev}
              >
                <RiPlayReverseLargeFill size={24}/>
              </button>
              <img
                src={blogs[selectedBlogIndex].image}
                alt=""
                className="image-viewer-image"
              />
              <button
                className="image-viewer-arrow image-viewer-arrow-right"
                onClick={handleNext}
              >
                <RiPlayLargeFill size={24}/>
              </button>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
