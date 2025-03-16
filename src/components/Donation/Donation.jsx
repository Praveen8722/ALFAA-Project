import React, { useEffect } from "react";
import '../Home/HelpThePeople/HelpThePeople.css'
import { Link } from "react-router-dom";
import HeroSection from "../common/HeroSection";
import DonationCards from "../common/DonationCards/DonationCards";
const Donation = () => {
  const helpCards = [
    {
      image:
        "https://html.hixstudio.net/poorex-prev/assets/img/donate/donate-1-1.png",
      linkText: "Contribute Make For The Somalians happy",
      description:
        "Street children are poor or homeless children who live on the streets.",
      percentage: "42",
      raised: "4,407",
      overlayText: "SHELTER",
    },
    {
      image:
        "https://html.hixstudio.net/poorex-prev/assets/img/donate/donate-1-2.png",
      linkText: "Give African Child A Good Education",
      description:
        "Street children are poor or homeless children who live on the streets.",
      percentage: "64",
      raised: "6,790",
      overlayText: "CHARITY",
    },
    {
      image:
        "https://html.hixstudio.net/poorex-prev/assets/img/donate/donate-1-3.png",
      linkText: "Raise Fund For Clean & Healthy Food",
      description:
        "Street children are poor or homeless children who live on the streets.",
      percentage: "82",
      raised: "8,904",
      overlayText: "FOOD",
    },
    {
      image:
        "https://html.hixstudio.net/poorex-prev/assets/img/donate/donate-3-3.png",
      linkText: "Raise Fund For Clean & Healthy Food",
      description:
        "Street children are poor or homeless children who live on the streets.",
      percentage: "82",
      raised: "8,904",
      overlayText: "FOOD",
    },
    {
        image:
          "https://html.hixstudio.net/poorex-prev/assets/img/donate/donate-3-3.png",
        linkText: "Raise Fund For Clean & Healthy Food",
        description:
          "Street children are poor or homeless children who live on the streets.",
        percentage: "82",
        raised: "8,904",
        overlayText: "FOOD",
      },
      {
        image:
          "https://html.hixstudio.net/poorex-prev/assets/img/donate/donate-3-3.png",
        linkText: "Raise Fund For Clean & Healthy Food",
        description:
          "Street children are poor or homeless children who live on the streets.",
        percentage: "82",
        raised: "8,904",
        overlayText: "FOOD",
      },
  ];
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HeroSection
      subHead="Home / Donations"
      mainHead="Donations"
      />
      <div>
      <DonationCards helpCards={helpCards} />
    </div>
    </>
  );
};
export default Donation;
