import React, { useEffect } from "react";
import HeroSection from "../common/HeroSection";
import event1 from "../../assets/event-details-1-3.jpg";
import "../Donation/Donation.css";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import PostComment from "../common/PostComment";
import Healthy from "../common/Healthy";
import OurLatestPost from "../common/OurLatestPost";
import Tags from "../common/Tags";
import { PiQuotesBold } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import "./Blog.css";
const BlogDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HeroSection subHead="Home / Blog" mainHead="Blog Details" />
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
                    tempus sit amet. Proin ante odio, posuereid lacus auctor,
                    elementum tempor tellus. Integer mattis justo eu enim tempus
                    lacinia. Fusce vitaeenim diam. Ut commodo viverra magna non
                    egestas. Integer sodales massa at odio tristique
                    volutpat.Proin posuere odio maximus, eleifend felis sed,
                    ultrices turpis. Proin ultricies sodales nisl vel euismod.
                    Praesent vestibulum sem lorem, eget fermentum justo iaculis
                    et.
                  </p>
                  <p>
                    vitae lobortis eros purus non augue. Nullam molestie augue
                    diam, scelerisque porta dolor mollis a.Cras condimentum
                    elementum eros at finibus. pharetra condimentum sagittis.
                    Donec consequatvelit et nisi scelerisque, quis iaculis felis
                    tincidunt. In faucibus sapien ut elit hendrerit, et
                    tristiquemauris lacinia. Phasellus tincidunt scelerisque
                    lectus sed scelerisque. Donec at enim facilisis,tempus nisi
                    quis, pharetra enim
                  </p>
                </div>
                <div className="bd-quotes-container col-xl-11">
                  <div className="d-flex flex-row align-items-center justify-content-between">
                    <div className="d-flex-flex-column">
                      <div>
                        <p className="quote-text">
                          The new common language will be more simple and
                          regular than the existing European languages. It will
                          be as
                        </p>
                      </div>
                      <div className="d-flex flex-row align-items-center justify-content-between">
                        <div>
                          <span className="quote-name">Nelson Adam</span>
                        </div>
                        <div>
                          <PiQuotesBold size={50} color="#FE7F4C" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="ed-title">Let our investment management team</h4>
                <div className="bd-register-thumb col-xl-11 my-5">
                  <div className="bd-register-list ">
                    <div className="d-flex-flex-column">
                      <div className="d-flex flex-row gap-2 ">
                        <div>
                          <TiTick color="#361455" size={20} />
                        </div>
                        <div>
                          <p className="bd-list-p">
                            Sed ut perspiciatis unde iste natus
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-row gap-2 ">
                        <div>
                          <TiTick color="#361455" size={20} />
                        </div>
                        <div>
                          <p className="bd-list-p">
                            Maecenas tempor velit sit amet euismod
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-row gap-2 ">
                        <div>
                          <TiTick color="#361455" size={20} />
                        </div>
                        <div>
                          <p className="bd-list-p">
                            Nulla egestas iaculis metus, id tempor massa
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-row gap-2 ">
                        <div>
                          <TiTick color="#361455" size={20} />
                        </div>
                        <div>
                          <p className="bd-list-p">
                            Nulla egestas iaculis metus, id tempor massa
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-row gap-2 ">
                        <div>
                          <TiTick color="#361455" size={20} />
                        </div>
                        <div>
                          <p className="bd-list-p">
                            Maecenas tempor velit sit amet euismod
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://html.hixstudio.net/poorex-prev/assets/img/event/event-details-1-5.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="ed-text mt-4">
                  <p>
                    vitae lobortis eros purus non augue. Nullam molestie augue
                    diam, scelerisque porta dolor mollis a.Cras condimentum
                    elementum eros at finibus. pharetra condimentum sagittis.
                    Donec
                  </p>
                </div>
                <div className="tags-share d-flex flex-row align-items-center justify-content-between col-xl-11">
                  <div className="tag">
                    <span>Tag :</span>
                    <Link className="tag-item">Kids Education</Link>
                    <Link className="tag-item">Food</Link>
                  </div>
                  <div className="tag">
                    <span>Share :</span>
                    <Link className="tag-item">Kids Education</Link>
                    <Link className="tag-item">Food</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="event-details-right-box">
                <div className="ed-search">
                  <div className="ed-search-content">
                    <form class="form-inline ">
                      <div className="search-input">
                        <input
                          class="form-control "
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <button class="btn btn-outline-success " type="submit">
                        <CiSearch size={20}/>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div>
                  <OurLatestPost />
                </div>
                <div className="category-widget">
                  <h3 className="sw-title">Category</h3>
                  <div className="category-list d-flex flex-column gap-2">
                    <div className="category-item d-flex flex-row justify-content-between">
                      <div className="item-name">
                        <Link className="item-name-link">Donation</Link>
                      </div>
                      <div className="item-arrow">
                        <GoArrowRight className="item-arrow" color="#FE7F4C" />
                      </div>
                    </div>
                    <div className="category-item d-flex flex-row justify-content-between">
                      <div className="item-name">
                        <Link className="item-name-link">Charity</Link>
                      </div>
                      <div className="item-arrow">
                        <GoArrowRight className="item-arrow" color="#FE7F4C" />
                      </div>
                    </div>
                    <div className="category-item d-flex flex-row justify-content-between">
                      <div className="item-name">
                        <Link className="item-name-link">Help Poor</Link>
                      </div>
                      <div className="item-arrow">
                        <GoArrowRight className="item-arrow" color="#FE7F4C" />
                      </div>
                    </div>
                    <div className="category-item d-flex flex-row justify-content-between">
                      <div className="item-name">
                        <Link className="item-name-link">Kids Education</Link>
                      </div>
                      <div className="item-arrow">
                        <GoArrowRight className="item-arrow" color="#FE7F4C" />
                      </div>
                    </div>
                    <div className="category-item d-flex flex-row justify-content-between">
                      <div className="item-name">
                        <Link className="item-name-link">Healthy Food</Link>
                      </div>
                      <div className="item-arrow">
                        <GoArrowRight className="item-arrow" color="#FE7F4C" />
                      </div>
                    </div>
                    <div className="category-item d-flex flex-row justify-content-between">
                      <div className="item-name">
                        <Link className="item-name-link">Shelter</Link>
                      </div>
                      <div className="item-arrow">
                        <GoArrowRight className="item-arrow" color="#FE7F4C" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tags-widget">
                  <h3 className="sw-title">Tags</h3>
                  <div className="tags-widget-content">
                    <div className="tags-cloud">
                      <Link className="tag">Fundraising</Link>
                      <Link className="tag">Charity</Link>
                      <Link className="tag">Kids Education</Link>
                      <Link className="tag">Food</Link>
                      <Link className="tag">Water</Link>
                      <Link className="tag">Health</Link>
                      <Link className="tag">Kids</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PostComment />
      </div>
    </>
  );
};
export default BlogDetails;
