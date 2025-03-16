import React from "react";
import "./common.css";
import { FaRegComments } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Tags = () => {
  return (
    <div className="tags-widget">
      <h3 className="sw-title">Tags</h3>
      <div className="tags-widget-content">
        <div className="tags-cloud">
            <Link className="tag">Fundraising</Link>
            <Link className="tag">Kids</Link>
            <Link className="tag">Food</Link>
        </div>
      </div>
    </div>
  );
};
export default Tags;
