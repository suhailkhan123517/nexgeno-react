import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../../Navbar";
import Clientslogo from "../../Clientslogo";
import Counter from "../../Counter";
import Successtories from "../../Successtories";
import Industries from "../../Industries";
import CalltoAction from "../../CalltoAction";
import Process from "../../Process";
import Footer from "../../Footer";
import Technology from "../../Technology";
import MobileNav from "../MobileNav/MobileNav";

const IndusDetails = ({ title, des, img, faq1, ans1, faq2, ans2 }) => {
  return (
    <div>
      <NavBar />
      <MobileNav />

      <section class="services_secrtion_1">
        <div class="container">
          <div class="row d-flex flex-wrap-reverse">
            <div class="col-lg-6">
              <div class="common-heading text-l">
                <h1 class="pb-2 fontsize-70 services_hed pt-4 pt-lg-0">
                  {title}
                </h1>
                <p class="services_para pt-lg-3 mb-0 mb-lg-3">{des}</p>
              </div>
              <div class="-cta-btn mt-4 text-left">
                <div class="free-cta-title wow zoomInDown btn-main1 ">
                  <NavLink to="/inquiry.htm" class="bg-btn2 lnk">
                    Get In Touch
                    <i class="fa fa-arrow-right ms-2" aria-hidden="true"></i>
                  </NavLink>{" "}
                </div>
              </div>
            </div>

            <div class="col-lg-6 ps-lg-5">
              <div class="image-block">
                <img src={img} alt="about" class="img-fluid pt-lg-5" />
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

      {/* Faq */}
      <div class="container">
        <div class="col-md-12">
          <div class="common-heading text-center pb-4">
            <h2 class="pb-2">Frequently Asked Questions</h2>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "6rem" }}>
        <ul className="accordion">
          <li>
            <input type="radio" name="accordion" id="first" />
            <label htmlFor="first"> {faq1} </label>
            <div className="content">
              <p> {ans1} </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="second" />
            <label htmlFor="second"> {faq2} </label>
            <div className="content">
              <p> {ans2} </p>
            </div>
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default IndusDetails;
