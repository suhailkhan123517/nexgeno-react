import React from "react";
import NavBar from "../Navbar";
import Services2 from "../Services2";
import Footer from "../Footer";
import MobileNav from "../components/MobileNav/MobileNav";

const Services = () => {
  return (
    <div>
      <NavBar />
      <MobileNav />

      <Services2 />
      <Footer />
    </div>
  );
};

export default Services;
