import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import HomePage from "./components/Home/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import Team from "./components/Team";
import Donation from "./components/Donation/Donation";
import DonationDetails from "./components/Donation/DonationDetails";
import Blog from "./components/Blog/Blog";
import BlogDetails from "./components/Blog/BlogDetails";
import Events from "./components/Events/Events"
import EventDetails from "./components/Events/EventDetails"
import ContactUs from "./components/Contact/ContactUs"
import DonateNow from "./components/Donation/DonateNow";
import Event from "./components/Events/Events";
import Trusty from "./components/Trusty";

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/logo" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/trusty" element={<Trusty />} />
        <Route path="/donations" element={<Donation />} />
        <Route path="/donationdetails" element={<DonationDetails />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/events" element={<Event />} />
        <Route path="/eventdetails" element={<EventDetails />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/donateNow" element={<DonateNow />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
