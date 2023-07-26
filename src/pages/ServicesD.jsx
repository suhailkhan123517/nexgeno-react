import React, { useContext } from "react";
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
import WhyChoose from "./WhyChoose";
import { themeContext } from "../Context";
import replace from "../../src/utils/replaceTitle";
import MobileNav from "../components/MobileNav/MobileNav";
import Button from "../components/button/Button";
import generateSchemaMarkup from "../utils/SchemaMarkup";
import { Helmet } from "react-helmet";

const ServicesD = ({
  metades,
  url,
  title,
  des,
  img,
  faq1,
  ans1,
  faq2,
  ans2,
}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  replace({
    title: title,
    description: metades,
    image: img,
  });

  const pageData = {
    title: title,
    description: metades,
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
                <p className="services_para pt-lg-3 mb-0 mb-lg-3">{des}</p>
              </div>
              <div className="-cta-btn mt-4 text-left">
                <div className="free-cta-title wow zoomInDown btn-main1 ">
                  {/* <NavLink to="/inquiry.htm" className="bg-btn2 lnk">
                    Get In Touch
                    <i
                      className="fa fa-arrow-right ms-2"
                      aria-hidden="true"
                    ></i>
                  </NavLink> */}
                  <Button
                    url="/inquiry.htm"
                    icon="fa fa-arrow-right ms-2"
                    text="Get In Touch"
                  />
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
      <WhyChoose />
      <Technology />
      <Counter />
      <Successtories />
      <Industries />
      <CalltoAction />
      <Process />
      <div className="container">
        <div className="col-md-12">
          <div className="common-heading text-center pb-4">
            <h2
              style={{
                color: darkMode ? "white" : "",
              }}
              className="pb-2"
            >
              Frequently Asked Questions
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div style={{ marginBottom: "6rem" }}>
              <ul className={darkMode ? "accordion_dark" : "accordion"}>
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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesD;
