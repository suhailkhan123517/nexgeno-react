import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { themeContext } from "./Context";
import Button from "./components/button/Button";

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <section className="about-agency pad-tb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pr-3">
              <div className="image-block">
                <img
                  src="images/aboutimage.jpeg"
                  alt="about"
                  className="img-fluid pe-4 position-relative"
                />
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="common-heading text-l">
                <span>We Are Nexgeno Technology</span>
                <h2
                  style={{
                    color: darkMode ? "white" : "",
                  }}
                >
                  Offshore Software Development & IT Consulting Company
                </h2>
                <p>
                  At Nexgeno Technology Pvt Ltd, we are dedicated to providing
                  professional web designing and development services to
                  businesses of all sizes. Founded in 2022, our company has
                  quickly established itself as a leading provider of web
                  solutions.
                </p>
                <p>
                  NexGeno Technology: Empowering Innovation, Building Solutions.
                  Transform your business with our web and mobile application
                  development, digital transformation, and cloud solutions, all
                  backed by our 11 years of experience in the industry. Our
                  innovative ideas and consulting expertise, combined with our
                  commitment to empowering developers, make us the partner you
                  need to succeed
                </p>

                <div className="-cta-btn mt70 text-left btn-main1">
                  <div className="free-cta-title justify-content-center  wow zoomInDown">
                    {/* <NavLink to="/about-us.htm">
                      Read More
                      <i
                        className="fa fa-arrow-right ms-2"
                        aria-hidden="true"
                      ></i>
                    </NavLink> */}
                  </div>
                  <Button
                    url="/about-us.htm"
                    icon="fa fa-arrow-right ms-2"
                    text="Read More"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
