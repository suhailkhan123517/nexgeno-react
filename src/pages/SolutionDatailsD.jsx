import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../Navbar";
import CalltoAction from "../CalltoAction";
import Footer from "../Footer";
import Clientslogo from "../Clientslogo";
import Counter from "../Counter";
import Industries from "../Industries";
import Successtories from "../Successtories";
import Technology from "../Technology";
import Process from "../Process";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { solutionDatialsDB } from "../utils/Database";
import { useContext } from "react";
import { themeContext } from "../Context";
import MobileNav from "../components/MobileNav/MobileNav";
import Button from "../components/button/Button";
import replace from "../utils/replaceTitle";
import { Helmet } from "react-helmet";
import generateSchemaMarkup from "../utils/SchemaMarkup";

const SolutionDatailsD = ({ url, title, img, descShort }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  replace({
    title: title,
    description: descShort,
    image: img,
  });

  const pageData = {
    title: title,
    description: descShort,
    imageUrl: img,
    url: url,
  };

  const schemaMarkup = generateSchemaMarkup(pageData);

  return (
    <div>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      <NavBar />
      <MobileNav />

      <section className="services_secrtion_1 ">
        <div className="container">
          <div className="row d-flex flex-wrap-reverse">
            <div className="col-lg-6">
              <div className="common-heading text-l">
                <h1
                  style={{
                    color: darkMode ? "white" : "",
                  }}
                  className="pb-2 fontsize-70 services_hed pt-4 pt-lg-0"
                >
                  {title}
                </h1>
                <p className="services_para pt-lg-3 mb-0 mb-lg-3">
                  {descShort}
                </p>
              </div>
              <div className="-cta-btn mt-4 text-left">
                <div className="free-cta-title wow zoomInDown btn-main1 ">
                  {/* <NavLink to="/solution-inquiry.htm" className="bg-btn2 lnk">
                    Get In Touch
                    <i
                      className="fa fa-arrow-right ms-2"
                      aria-hidden="true"
                    ></i>
                  </NavLink> */}
                  <Button url="/solution-inquiry.htm" text="Get In Touch" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <div className="image-block">
                <img src={img} alt="about" className="img-fluid pt-lg-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Clientslogo />
      <Technology />
      <Counter />
      <Successtories />
      <Industries />
      <CalltoAction />
      <Process />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Related Solution</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <motion.div
              ref={carousel}
              whileTap={{ cursor: "grabbing" }}
              className="carousel-solu"
            >
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className="solu-carousel"
              >
                {solutionDatialsDB.map((item) => {
                  const { id, img, stitle, link } = item;
                  return (
                    <motion.div key={id} className="item-solu">
                      <NavLink to={link}>
                        <img src={img} alt="" />
                      </NavLink>
                      <NavLink className="font-weight-bold" to={link}>
                        <p className="mb-5  text-center">{stitle}</p>
                      </NavLink>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SolutionDatailsD;
