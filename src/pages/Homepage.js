// Homepage.js

import React from "react";
import { Element, scroller } from "react-scroll";
import Aboutme from "../components/Aboutme/index.jsx";
import Carusel from "./Carusel/Homecarusel.jsx";
import Contact2 from "./Contact2/Contactform.jsx";
import Header from "../components/Layout/Header.js";
import Footer from "../components/Layout/Footer.js";
import PricingTable from "./PricingTable/Pricingcard.jsx";
import Reviews from "./Tesimonials/Testimonial.jsx";
import FacilityProvide from "../pages/FacilityProvide/Facility.jsx";
import Intro from "../pages/Introduction/Intro.jsx";
import CardSliding from "../pages/HotelCardSliding/Cardsliding.jsx";
import LogoScrolling from "../pages/LogoScrollingMarqueeEffect/Logoscrolling.jsx";
// import Services from "../pages/Services/Services.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Jobtimeline from "../components/JobTimeLine/Jobtimeline.jsx";
import Services from "../components/Services/index.jsx"
import Skills from "../components/Skills/index.jsx";
import Projects from "../components/Projects/index.jsx";

const scrollToComponent = (component) => {
  scroller.scrollTo(component, {
    duration: 50,
    delay: 0.5,
    smooth: "easeInOutQuart",
  });
};

const Homepage = () => {
  return (
    <div>
      <Header scrollToComponent={scrollToComponent} />
      <Hero />
      <Element name="about">
        <Aboutme />
      </Element>
      <Jobtimeline />
      <Element name="services">
        <Services />
      </Element>
      <Skills />
      <Projects />
      {/* <Carusel scrollToComponent={scrollToComponent} />
      <Intro /> */}
      {/* <Element name="cardSliding">
        <CardSliding />
      </Element> */}
      {/* <FacilityProvide /> */}
      {/* <LogoScrolling /> */}
      <Element name="pricing">
        <PricingTable scrollToComponent={scrollToComponent} />
      </Element>
      <Reviews />
      <Element name="contact">
        <Contact2 />
      </Element>
      <Footer />
    </div>
  );
};

export default Homepage;
