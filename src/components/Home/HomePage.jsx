import React, { useEffect } from "react";
import LandingSection from "./LandingSection/LandingSection";
import AboutPoorex from "./AboutPoorex/AboutPoorex";
import HelpThePeople from "./HelpThePeople/HelpThePeople";
import Gallery from "./Gallery/Gallery";
import Testimonial from "../common/Testimonial/Testimonial";
import EventSection from "./EventSection";
import StartDonate from "../common/StartDonate";
import OurBlog from "./OurBlog/OurBlog";
import DiscoverMore from "../common/DiscoverMore";
import ProvidingUrgent from "./ProvidingUrgent/ProvidingUrgent";
import OurFacility from "./OurFacility/OurFacility";
import WhatisAlfaa from "./WhatisAlfaaa/WhatisAlfaa";
const HomePage=()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <div>
            <LandingSection/>
            <AboutPoorex/>
            {/* <HelpThePeople/> */}
            <Gallery/>
            <OurFacility/>
            <Testimonial/>
            <EventSection/>
            <StartDonate/>
            <WhatisAlfaa/>
            <ProvidingUrgent/>
            <OurBlog/>
            <DiscoverMore/>
        </div>
    )
}
export default HomePage;