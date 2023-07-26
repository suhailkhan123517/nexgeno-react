import React from "react";
import "./SliderHome.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { sliderHome } from "../../utils/Database";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";

export default function SliderHome() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <div className="SliderHome">
        <div className="container-fluid mb-2 pt-5 ">
          <div className="row">
            <div className="col-12">
              <div class="common-heading text-center">
                <span className="mb-3 text-white">
                  {" "}
                  # RECENTLY COMPLETED WORK
                </span>
                <h2 class="mb-2 mb-md-5 text-light">
                  Improve & Enhance the Tech Projects
                </h2>{" "}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <motion.div
                ref={carousel}
                whileTap={{ cursor: "grabbing" }}
                className="carousel-ph"
              >
                <motion.div
                  drag="x"
                  dragConstraints={{ right: 0, left: -width }}
                  className="inner-carousel-ph"
                >
                  {sliderHome.map((item) => (
                    <motion.div key={item.id} className="item-ph">
                      <a target="_blank" href={item.link}>
                        <img src={item.img} alt="" />
                      </a>
                      <p className="fs-4 text-light  slideTitle mt-4">
                        {item.name}
                      </p>
                      <p className="fs-7 text-light ">{item.des}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
            <div className="btn-main1 d-flex justify-content-center">
              {/* <NavLink to="/portfolio-list.htm" class="btn-main mt-3">
                View More
                <i class="fa fa-arrow-right ms-2" aria-hidden="true"></i>
              </NavLink> */}
              <Button
                url="/portfolio-list.htm"
                icon="fa fa-arrow-right ms-2"
                text="View More"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
