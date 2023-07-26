import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { themeContext } from "./Context";

const Casestudy = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="project-section alternate pt-2 pt-md-5">
        <div className="carousel-outer ps-4 pe-4">
          <div className="col-md-12">
            <div className="common-heading text-center">
              <span># INSIGHT & NEWS</span>
              <h2
                style={{
                  color: darkMode ? "white" : "",
                }}
                className="mb30"
              >
                Stay ahead of technology paradigm shift
              </h2>
            </div>
          </div>
        </div>
      </div>

      <section
        className={
          darkMode
            ? "dark pq-section-bg-primary pq-bg-grey pq-bg-img-6"
            : "whatwedo pq-section-bg-primary pq-bg-grey pq-bg-img-6"
        }
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-12 text-sm-center">
              <img src="images/blog_images.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12">
              <div className="row mt-lg-4 mt-xl-0">
                <div className="col-lg-6 mt-4 mt-lg-0 col-md-6">
                  <div className="pq-fancy-box pq-fancybox-1 mb-4 ">
                    <div className="pq-fancy-box-wrapper">
                      <div className="pq-fancybox-info">
                        <span className="study_main_hed">Career</span>
                        <h3 className="pq-fancy-box-title">
                          Join Our Innovative Team and Build Your Career in Tech
                        </h3>
                        <p>
                          Discover exciting career opportunities in tech with
                          our dynamic team...
                        </p>
                        <div className="pq-btn-container">
                          <div className="pq-button-block">
                            <NavLink
                              className="pq-button pq-btn-link"
                              to="/career.htm"
                            >
                              <span className="text">Read More</span>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pq-fancy-box pq-fancybox-1 mb-4">
                    <div className="pq-fancy-box-wrapper">
                      <div className="pq-fancybox-info">
                        <span className="study_main_hed">Hire Developers</span>
                        <h3 className="pq-fancy-box-title">
                          Build Your Dream Team with Our Expert Developers
                        </h3>
                        <p>
                          Get access to a range of skilled developers, including
                          web, mobile...
                        </p>
                        <div className="pq-btn-container">
                          <div className="pq-button-block">
                            <NavLink
                              className="pq-button pq-btn-link"
                              to="/hiredeveloper"
                            >
                              <span className="text">Read More</span>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="pq-fancy-box pq-fancybox-1 mb-4   ms-lg-3">
                    <div className="pq-fancy-box-wrapper">
                      <div className="pq-fancybox-info">
                        <span className="study_main_hed">Blog</span>
                        <h3 className="pq-fancy-box-title">
                          Stay Ahead of the Curve with Our Tech Blog
                        </h3>
                        <p>
                          Our tech blog offers the latest insights, trends, and
                          best practices in the industry...
                        </p>
                        <div className="pq-btn-container">
                          <div className="pq-button-block">
                            <NavLink
                              className="pq-button pq-btn-link"
                              to="https://nexgeno.in/blog"
                            >
                              <span className="text">Read More</span>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pq-fancy-box pq-fancybox-1 ms-lg-3">
                    <div className="pq-fancy-box-wrapper">
                      <div className="pq-fancybox-info">
                        <span className="study_main_hed">Solution</span>
                        <h3 className="pq-fancy-box-title">
                          Cloud-Based Solutions for Modern Businesses
                        </h3>
                        <p>
                          Revolutionize your business with our cloud-based
                          solutions...
                        </p>
                        <div className="pq-btn-container">
                          <div className="pq-button-block">
                            <NavLink
                              className="pq-button pq-btn-link"
                              to="/solution.htm"
                            >
                              <span className="text">Read More</span>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Casestudy;
