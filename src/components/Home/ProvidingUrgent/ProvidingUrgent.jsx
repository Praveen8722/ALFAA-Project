import React, { useState } from "react";
import "./ProvidingUrgent.css";
import { TiTick } from "react-icons/ti";
import bg1 from "../../../assets/autism.jpg";
const ProvidingUrgent = () => {
  const [activeTab, setActiveTab] = useState("approach");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const buttonStyles = (isActive) => ({
    backgroundColor: isActive ? "#FE7F4C" : "white",
    color: isActive ? "white" : "black",
    borderColor: "#FE7F4C",
    borderRadius: "0px",
  });
  return (
    <div className="providing-area-space my-5 ">
      <div className="providing-bg ">
        <img src={bg1} alt="" width="600px" height="800px"/>
      </div>
      <div className="providing-wrapper ">
        <div className="container mt-5">
          <div className="row">
            <div className="animated tpfadeRight providing-item-area">
              <div className="providing-item-box">
                <div className="providing-content d-flex flex-column gap-3">
                  <h4 className="as_title">
                  What is autism?
                  </h4>
                  <p className="as_text">
                    Autism is one of five pervasive neurological developmental
                    disorders (PDD), characterized by severe and pervasive
                    impairment in several areas of development. Autism is a
                    spectrum disorder that affects individuals differently and
                    to varying degrees.
                  </p>
                  <p className="as_text">
                    It is a complex developmental disability that appears
                    typically during the first three years of life and affects a
                    person’s ability to communicate and interact with others.
                    Both children and adults on the autism spectrum typically
                    show difficulties in verbal and non-verbal communication,
                    social interactions, and leisure or play activities.
                  </p>
                  <p className="as_text">
                    There is no known single cause for autism, although it is
                    generally accepted that it is caused by abnormalities in
                    brain structure or function. According to some studies,
                    autism is the fastest-growing developmental disorder, with a
                    case of autism being diagnosed every twenty minutes.
                  </p>
                </div>
                {/* <div className="providing-tab">
                  <nav className="my-4">
                    <div
                      className="nav nav-tabs pb-50 border-0"
                      id="nav-tab"
                      role="tablist"
                    >
                      <button
                        className={`nav-link ${
                          activeTab === "approach" ? "active" : ""
                        }`}
                        type="button"
                        style={buttonStyles(activeTab === "approach")}
                        onClick={() => handleTabClick("approach")}
                      >
                        Our Approach
                      </button>
                      <button
                        className={`nav-link ${
                          activeTab === "difference" ? "active" : ""
                        } make-diff`}
                        type="button"
                        style={buttonStyles(activeTab === "difference")}
                        onClick={() => handleTabClick("difference")}
                      >
                        Make Difference
                      </button>
                    </div>
                  </nav>
                  <div className="providing-nav-content mt-3">
                    {activeTab === "approach" && (
                      <div className="d-flex flex-column gap-3">
                        <div className="d-flex flex-row gap-1">
                          <div className="as_list-icon">
                            <TiTick size={20} />
                          </div>
                          <div className="d-flex flex-column">
                            <h4>Get Inspire and Help</h4>
                            <p>
                              Charity refers to the act of voluntarily giving
                              help, ai assistance
                              <br /> to those in need, usually through
                              donations.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-row gap-1">
                          <div className="as_list-icon">
                            <TiTick size={20} />
                          </div>
                          <div className="d-flex flex-column">
                            <h4>Get Inspire and Help</h4>
                            <p>
                              Charity refers to the act of voluntarily giving
                              help, ai assistance <br /> to those in need,
                              usually through donations.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === "difference" && (
                      <div className="d-flex flex-column gap-3">
                        <div className="d-flex flex-row gap-1">
                          <div className="as_list-icon">
                            <TiTick size={20} />
                          </div>
                          <div className="d-flex flex-column">
                            <h4>Make a Difference Today</h4>
                            <p>
                              Your contributions can significantly impact those
                              in need. Join us in our mission
                              <br /> to create a better world through active
                              charity and support.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-row gap-1">
                          <div className="as_list-icon">
                            <TiTick size={20} />
                          </div>
                          <div className="d-flex flex-column">
                            <h4>Be the Change</h4>
                            <p>
                              Every small effort counts. Together, we can bring
                              about positive change and
                              <br /> improve lives across communities.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProvidingUrgent;
