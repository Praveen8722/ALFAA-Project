import React, { useEffect } from "react";
import HeroSection from "../common/HeroSection";

import "./AboutUs.css";
import BrandSlider from "./BrandSlider";
import StartDonate from "../common/StartDonate";
import Testimonial from "../common/Testimonial/Testimonial";
import TeamMember from "../common/TeamMember";
import DiscoverMore from "../common/DiscoverMore";
import about1 from "../../assets/g6.jpg";
const AboutUs = ({ subHead, mainHead }) => {
  const members = [
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Kaira",
      role: "Volunteer",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "John",
      role: "Volunteer",
    },
    {
      src: "https://html.hixstudio.net/poorex-prev/assets/img/team/team-1-1.jpg",
      name: "Doe",
      role: "Volunteer",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection subHead="Home / About Us" mainHead="About Us" />
      <div className="our-poorex-container-area">
        <div className="our-poorex-container container">
          <div className="left-side animated tpfadeLeft col-xl-4 col-md-5">
            <div className="main-img position-relative">
              <img src={about1} alt="" className="abouimg1" />
            </div>
          </div>
          <div className="right-side animated fadeInRight col-xl-6 col-md-5 col-sm-4">
            <div className="about_section_title pb-25">
              <span className="ap_subtitle">About Alfaa</span>
              <h4 className="as_title">Assisted Living for Autistic Adults</h4>
            </div>
            <div className="about_section_title">
              <div className="as_text">
                <p>
                  Assisted Living For Autistic Adults (ALFAA) was founded in
                  2009 with the primary objective of providing good quality
                  living conditions and facilities for autistic adults in India.
                </p>
              </div>
              <div className="as_text">
                <p>
                  There are several organizations in India that provide support
                  and various services to people with autism. However these
                  organizations do not provide residential facilities
                  exclusively for autistic adults.
                </p>
              </div>
              <div className="as_text">
                <p>
                  ALFAA aims to fill this need by providing good quality
                  short-term and long-term residential facilities, for the care
                  and protection of people with autism spectrum disorder, when
                  the parents get old and even in the event of death of the
                  parent(s) or guardian.
                </p>
              </div>
              <div className="as_text">
                <p>
                  ALFAA also provides counselling to people with autism spectrum
                  disorder and their families; serves as the voice for autism
                  and promotes awareness of autism in society.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="our-poorex-container2 container mt-4">
          
          <div className="right-side animated fadeInRight col-xl-6 col-md-5 col-sm-4">
            
            <div className="about_section_title">
              
              
              <h4 className="as_title">
                The Plan
              </h4>
              <div className="as_text">
                <p>
                  The proposed residential campus would be developed on 2.31
                  acres of land in the natural surrounding of north Bangalore
                  (Dodballabpur, Rural BANGALORE). The neighboring villages
                  would serve as pool of employable for the people of the near
                  by villages.
                </p>
              </div>
              <div className="as_text">
                <p>
                  The campus would includes residential wings as living comforts
                  for the hostlers. Apart from this, special care would be taken
                  to have ample amount of lung space and walkways, play area and
                  small tree grooves. The campus would have 24hrs security and
                  regular health care service would also be provided. The ALFAA
                  Campus would cater exclusively for adults with Autism spectrum
                  disorder (ASD) and provide opportunity for self expression and
                  growth. In the third and later phase we intend to take 3 Acres
                  more to allow parents to make condos for their old age and
                  live on the same campus with their children and grow old
                  watching them happy.
                </p>
              </div>
              <div className="as_text">
                <p>
                  11 parents have helped us to purchase the land , another 11
                  parents we are taking to help construct. To join this awesome
                  Family do call us.
                </p>
              </div>
            </div>
          </div>
          <div className="left-side animated tpfadeLeft col-xl-4 col-md-5">
            <div className="main-img position-relative">
              <img src={about1} alt="" className="abouimg1" />
            </div>
          </div>
        </div>
      </div>
      <BrandSlider />
      <StartDonate />
      <Testimonial />
      <div className="my-5">
        <div className="about_section_title d-flex align-items-center justify-content-center flex-column my-5">
          <span className="ap_subtitle">OUR TEAM</span>
          <h4 className="as_title">Meet With Our Expert</h4>
        </div>
        <div>
          <TeamMember members={members} />
        </div>
      </div>
      <DiscoverMore />
    </>
  );
};

export default AboutUs;
