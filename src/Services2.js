import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { themeContext } from "./Context";
import Button from "./components/button/Button";

const Services2 = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <section
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
        className="service-section web-servic pad-tb"
      >
        <div className="container services-container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="common-heading text-center">
                {" "}
                <span className="text-light"># Services We are Provided</span>
                <h2 className="mb30 text-white ">
                  Our Design Development Services
                </h2>{" "}
              </div>
            </div>
          </div>
          <div className="row upset link-hover shape-num justify-content-center">
            <div className="col-lg-3 col-sm-6 mt30 shape-loc wow fadeInUp">
              <div
                style={{
                  background: darkMode ? "black" : "",
                  color: darkMode ? "white" : "",
                }}
                className="s-block"
              >
                <div className="s-card-icon">
                  <img
                    src="/images/service-icon-1.png"
                    alt="service"
                    className="img-fluid"
                  />
                </div>
                <h4>Application development </h4>
                <p>
                  Application development refers to the process of designing,
                  creating, and testing software applications for use on various
                  platforms such as desktop computers, mobile devices, and the
                  web. This process involves coding, debugging, and continuous
                  improvement to meet user requirements and deliver optimal
                  performance.
                </p>
                <NavLink
                  style={{
                    background: darkMode ? "black" : "",
                    color: darkMode ? "white" : "",
                  }}
                  to="/services/web-application-development.htm"
                >
                  Learn More{" "}
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mt30 shape-loc wow fadeInUp">
              <div
                style={{
                  background: darkMode ? "black" : "",
                  color: darkMode ? "white" : "",
                }}
                className="s-block"
              >
                <div className="s-card-icon">
                  <img
                    src="/images/service-icon-2.png"
                    alt="service"
                    className="img-fluid"
                  />
                </div>
                <h4>Digital Transformation</h4>
                <p>
                  Digital transformation refers to the process of leveraging
                  digital technologies and innovations to fundamentally change
                  how organizations operate, interact with customers, and
                  deliver value. It involves adopting new business models,
                  redesigning processes, and embracing emerging technologies to
                  enhance efficiency, productivity, and customer experiences
                  while remaining agile and competitive in the digital age.
                </p>
                <NavLink
                  style={{
                    background: darkMode ? "black" : "",
                    color: darkMode ? "white" : "",
                  }}
                  to="/services/digital-transformation.htm"
                >
                  Learn More{" "}
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mt30 shape-loc wow fadeInUp">
              <div
                style={{
                  background: darkMode ? "black" : "",
                  color: darkMode ? "white" : "",
                }}
                className="s-block"
              >
                <div className="s-card-icon">
                  <img
                    src="/images/service-icon-3.png"
                    alt="service"
                    className="img-fluid"
                  />
                </div>
                <h4>Front-end Development</h4>
                <p>
                  Front-end development is a crucial aspect of any modern
                  digital project. It involves creating a user-friendly and
                  engaging interface that enhances user experiences and drives
                  business outcomes. Our team of experienced front-end
                  developers can help you create a visually appealing and
                  functional website or application using the latest
                  technologies and best practices in the industry, ensuring your
                  online presence is optimized for success.
                </p>
                <NavLink
                  style={{
                    background: darkMode ? "black" : "",
                    color: darkMode ? "white" : "",
                  }}
                  to="/services/frontend-development.htm"
                >
                  Learn More{" "}
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mt30 shape-loc wow fadeInUp">
              <div
                style={{
                  background: darkMode ? "black" : "",
                  color: darkMode ? "white" : "",
                }}
                className="s-block mb0"
              >
                <div className="s-card-icon">
                  <img
                    src="/images/service-icon-4.png"
                    alt="service"
                    className="img-fluid"
                  />
                </div>
                <h4>Product Prototyping</h4>
                <p>
                  Product prototyping is the process of creating a functional or
                  non-functional model of a product, typically using low-cost
                  materials or software. This allows designers and developers to
                  test and refine the product's features and usability before
                  investing in full-scale production. Prototyping can help
                  identify flaws, improve functionality, and provide valuable
                  feedback that can inform the final design and development
                  stages, ultimately leading to a more successful product
                  launch.
                </p>
                <NavLink
                  style={{
                    background: darkMode ? "black" : "",
                    color: darkMode ? "white" : "",
                  }}
                  to="/services/product-prototyping.htm"
                >
                  Learn More{" "}
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="-cta-btn mt70 text-center mt-4">
            <div className="free-cta-title justify-content-center wow zoomInDown btn-main1">
              {/* <NavLink to="/services" className="bg-btn2 lnk">
                View All Services
                <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
              </NavLink>{" "} */}
              <Button
                url="/services"
                icon="fa fa-arrow-right ms-2"
                text="View All Services"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <div className="s-services">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center my-5">
                Our Design Development Services
              </h2>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-4 p-3 s-box text-center">
              <div className="s-img ">
                <img src="images/branding.svg" alt="" />
              </div>
              <h2 className="mt-5 mb-3">Application development</h2>
              <p>
                Application development refers to the process of designing,
                creating and testing software
              </p>
              <div className="s-link">
                <a href="/">
                  <p>Learn More</p>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4 text-center">col1</div>
            <div className="col-md-4 text-center">col1</div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Services2;
