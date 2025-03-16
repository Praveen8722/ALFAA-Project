import React from 'react';
import EventCard from '../common/EventCards/EventCards';
import img1 from '../../assets/e1.jpg'
import img2 from '../../assets/e2.jpg'
import img3 from '../../assets/e3.jpg'
const eventCards = [
    {
        imgSrc:img1,
  
        header: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        link: "#",
        date: "17",
        month: "Jan",
      },
      {
        imgSrc:img2,
  
        header: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        link: "#",
        date: "25",
        month: "Feb",
      },
      {
        imgSrc:img3,
  
        header: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        link: "#",
        date: "07",
        month: "Mar",
      },
];

const EventSection = () => {
  return (
    <div className='my-5'>
      <div className="about_section_title d-flex align-items-center justify-content-center flex-column">
        <span className="as_subtitle">FUTURE EVENTS</span>
        <h4 className="as_title">Latest Upcoming Events</h4>
      </div>

      <EventCard eventCards={eventCards} />
    </div>
  );
};

export default EventSection;
