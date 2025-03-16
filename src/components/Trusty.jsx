import React, { useEffect } from "react";
import HeroSection from "./common/HeroSection";
import TeamMember from "./common/TeamMember";
const Trusty = ({ subHead, mainHead }) => {
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
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HeroSection subHead="Home / Trusty" mainHead="Trusty" />
      <div className="my-5">
        <TeamMember members={members} />
      </div>
    </>
  );
};
export default Trusty;
