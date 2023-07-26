import React from "react";
import NavBar from "./Navbar";
import About from "./About";
import Services2 from "./Services2";
import Slider from "./Slider";
import Technology from "./Technology";
import Clientslogo from "./Clientslogo";
import Industries from "./Industries";
import Casestudy from "./Casestudy";
import Contactcalltoaction from "./Contactcalltoaction";
import SliderHome from "./components/SliderHome/SliderHome";
import Counter from "./Counter";
import HeadSection from "./components/HeadingSection/HeadSection";
import Footer from "./Footer";
import MobileNav from "./components/MobileNav/MobileNav";
import TestSlider from "./components/TestSlider/TestSlider";

const Home = () => {
  return (
    <>
      <NavBar />
      <MobileNav />
      <Slider />
      <About />
      <Clientslogo />
      <Services2 />
      <Counter />
      <Technology />
      <SliderHome />
      <Industries />
      <Casestudy />
      <TestSlider />
      <Contactcalltoaction />
      {/* <HeadSection /> */}
      <Footer />
    </>
  );
};

export default Home;
