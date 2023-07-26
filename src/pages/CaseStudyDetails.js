import React from "react";
import NavBar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import MobileNav from "../components/MobileNav/MobileNav";
import { caseStudySlider } from "../utils/Database";

export default function CaseStudyDetails({
  bigImg2,
  samllImg2,
  samllImg1,
  headig,
  bigImg1,
  Solution,
  Results,
  Challenge,
  Introduction,
  sLinK,
  timeline,
  soft,
  category,
}) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <NavBar />
      <MobileNav />

      <div className="cloudWrite">
        <div className="row">
          <div className="col-12">
            <h1 className="cloud-heading text-center">{headig}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-6">
            <p className="text-primary  mt-lg-5 mt-2">LINK</p>
            <p>{sLinK}</p>
          </div>
          <div className="col-md-3 col-6 ">
            <p className="text-primary  mt-lg-5 mt-2">TIMELINE</p>
            <p>{timeline}</p>
          </div>
          <div className="col-md-3 col-6">
            <p className="text-primary  mt-lg-5 mt-2">SOFT</p>
            <p>{soft}</p>
          </div>
          <div className="col-md-3 col-6">
            <p className="text-primary  mt-lg-5 mt-2">CATEGORY</p>
            <p>{category}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            <img className="big-img-case mt-2 mb-5" src={bigImg1} alt="" />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-8 order-md-2  my-lg-5">
            <img className="small-img-case" src={samllImg1} alt="" />
          </div>
          <div className="col-md-4 order-md-1  my-lg-5 mt-3">
            <h1>Introduction</h1>
            <p>{Introduction}</p>
            <h1 className="mt-5">Challenge</h1>
            <p>{Challenge}</p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-8 my-lg-5">
            <img className="small-img-case" src={samllImg2} alt="" />
          </div>
          <div className="col-md-4 my-lg-5 mt-2">
            <h1>Solution</h1>
            <p>{Solution}</p>
            <h1 className="mt-5">Results</h1>
            <p>{Results}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <img className="big-img-case" src={bigImg2} alt="" />
          </div>
          <div className="col-12">
            <h1 className="cloud-heading text-center">Related Cases</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <motion.div
              ref={carousel}
              whileTap={{ cursor: "grabbing" }}
              className="carousel-case"
            >
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className="inner-carousel"
              >
                {caseStudySlider.map((item) => {
                  const { id, subLink, img, heading, title } = item;
                  return (
                    <motion.div key={id} className="item-case">
                      <div className="d-flex justify-content-between align-items-center">
                        <NavLink to={subLink}>
                          <p className="text-primary">{heading}</p>
                          <p className="fs-3 text-white">{title}</p>
                        </NavLink>

                        <Link to={subLink}>
                          {/* <div className="case_icon">
                            <i className="fa-solid fa-arrow-up"></i>
                          </div> */}
                          {/* <div className="indicator">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div> */}
                          <div className="arrow_inner">
                            <div className="arrow">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <Link to={subLink}>
                        <img src={img} alt="" />
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
