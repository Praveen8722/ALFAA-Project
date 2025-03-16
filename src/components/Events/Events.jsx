import React, { useEffect } from "react";
import HeroSection from "../common/HeroSection";
import EventCard from "../common/EventCards/EventCards";
const Event = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const eventCards = [
    {
        imgSrc:
          "https://html.hixstudio.net/poorex-prev/assets/img/event/event-1-1.jpg",
  
        header: "Charities Learn Forward Integrate Social",
        link: "#",
        date: "17",
        month: "Jan",
      },
      {
        imgSrc:
          "https://html.hixstudio.net/poorex-prev/assets/img/event/event-1-2.jpg",
  
        header: "Hungry No More and Leave no One Behind",
        link: "#",
        date: "25",
        month: "Feb",
      },
      {
        imgSrc:
          "https://html.hixstudio.net/poorex-prev/assets/img/event/event-1-3.jpg",
  
        header: "Help Us Touch Their Live of These Youth",
        link: "#",
        date: "07",
        month: "Mar",
      },
      {
        imgSrc:
          "https://html.hixstudio.net/poorex-prev/assets/img/event/event-1-3.jpg",
  
        header: "Help Us Touch Their Live of These Youth",
        link: "#",
        date: "07",
        month: "Mar",
      },
      {
        imgSrc:
          "https://html.hixstudio.net/poorex-prev/assets/img/event/event-1-3.jpg",
  
        header: "Help Us Touch Their Live of These Youth",
        link: "#",
        date: "07",
        month: "Mar",
      },
      {
        imgSrc:
          "https://html.hixstudio.net/poorex-prev/assets/img/event/event-1-3.jpg",
  
        header: "Help Us Touch Their Live of These Youth",
        link: "#",
        date: "07",
        month: "Mar",
      },
];
  return (
    <>
      <HeroSection subHead="Home / Event" mainHead="Event" />
      <EventCard eventCards={eventCards} />
    </>
  );
};
export default Event;
