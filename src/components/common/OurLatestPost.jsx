import React from "react";
import "./common.css";
import { FaRegComments } from "react-icons/fa6";
import { Link } from "react-router-dom";
const OurLatestPost = () => {
  return (
    <div className="sidebar-widget1">
      <h3 className="sw-title">Our Latest Post</h3>
      <div className="sw-content">
        <div className="sidebar-post">
            <div className="sidebar-post-content d-flex align-items-center mb-4">
                <div className="sidebar-post-content-thumb">
                    <Link>
                    <img src="https://html.hixstudio.net/poorex-prev/assets/img/blog/blog-details-sm-1-2.jpg" alt="" />
                    </Link>
                </div>
                <div className="spc-content">
                    <div className="spc-meta">
                        <span><FaRegComments/> 02 Comments</span>
                    </div>
                    <h3 className="spc-title">We Should Donate
                    For Indian’s Poor</h3>
                </div>
            </div>
            <div className="sidebar-post-content d-flex align-items-center mb-4">
                <div className="sidebar-post-content-thumb">
                    <Link>
                    <img src="https://html.hixstudio.net/poorex-prev/assets/img/blog/blog-details-sm-1-2.jpg" alt="" />
                    </Link>
                </div>
                <div className="spc-content">
                    <div className="spc-meta">
                        <span><FaRegComments/> 02 Comments</span>
                    </div>
                    <h3 className="spc-title">We Should Donate
                    For Indian’s Poor</h3>
                </div>
            </div>
            <div className="sidebar-post-content d-flex align-items-center mb-4">
                <div className="sidebar-post-content-thumb">
                    <Link>
                    <img src="https://html.hixstudio.net/poorex-prev/assets/img/blog/blog-details-sm-1-2.jpg" alt="" />
                    </Link>
                </div>
                <div className="spc-content">
                    <div className="spc-meta">
                        <span><FaRegComments/> 02 Comments</span>
                    </div>
                    <h3 className="spc-title">We Should Donate
                    For Indian’s Poor</h3>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default OurLatestPost;
