import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumb/MB";
import Toggle from "./components/Toggle/Toggle";
import { themeContext } from "./Context";
import Button from "./components/button/Button";
const NavBar = () => {
  const [isOpen, setIsOpne] = useState(true);
  const navigate = useNavigate();
  const toggle = () => {
    setIsOpne(!isOpen);
  };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <header
        className="header"
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      >
        <div className="has-center sticky-header fix-top sticky-content">
          <div className="container">
            <div className="header-left">
              <a href="#" className="mobile-menu-toggle" title="Mobile Menu">
                <i className="p-icon-bars-solid"></i>
              </a>
              <Link to="/" className="logo">
                <img
                  src="/images/nexgeno_logo.png"
                  className="img-fluid width-200"
                />
              </Link>
              {/*<Toggle />*/}
            </div>
            <div
              className="header-center"
              style={{
                background: darkMode ? "black" : "",
                color: darkMode ? "white" : "",
              }}
            >
              <nav className="main-nav">
                <ul
                  className={`${darkMode ? "menu_dark" : "menu"} ${
                    isOpen ? "toggle" : ""
                  }  `}
                >
                  <li>
                    <a
                      style={{
                        background: darkMode ? "black" : "",
                        color: darkMode ? "white" : "",
                      }}
                      href="#"
                    >
                      Services
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <div
                      style={{
                        background: darkMode ? "black" : "",
                        color: darkMode ? "white" : "",
                      }}
                      className="megamenu left38"
                    >
                      <div className="row">
                        <div className="col-md-3">
                          <h4 className="menu-title title-underline mb-0">
                            <span>Offering</span>
                          </h4>
                          <ul
                            style={{
                              background: darkMode ? "black" : "",
                              color: darkMode ? "white" : "",
                            }}
                          >
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/services/web-application-development.htm"
                              >
                                Application Development
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/services/digital-transformation.htm"
                              >
                                Digital Transformation
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/services/frontend-development.htm"
                              >
                                Front-end Development
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/services/product-prototyping.htm"
                              >
                                Product Prototyping
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/services/ecommerce-deployment.htm"
                              >
                                Ecommerce Deployment
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/services/cloud-solutions.htm"
                              >
                                Cloud Solutions AWS, Azure & Google{" "}
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/services/mobile-app-development.htm"
                              >
                                Mobile App Development
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h4 className="menu-title title-underline mb-0">
                            <span>Industry</span>
                          </h4>
                          <ul
                            style={{
                              background: darkMode ? "black" : "",
                              color: darkMode ? "white" : "",
                            }}
                          >
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/industries/educationl-earning.htm"
                              >
                                Education / E-Learning
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/industries/retail.htm"
                              >
                                Retail
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/industries/logistics-distribution.htm"
                              >
                                Logistics & Distribution
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/industries/finTECH.htm"
                              >
                                FinTech
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/industries/manufacturing.htm"
                              >
                                Manufacturing
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/industries/events.htm"
                              >
                                Events
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/industries/recruitment.htm"
                              >
                                Recruitment
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/industries/real-estate.htm"
                              >
                                Real Estate
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3 pt-5">
                          {/* <h4 className="menu-title title-underline mb-0">
                            <span>Industry</span>
                          </h4> */}
                          <ul
                            style={{
                              background: darkMode ? "black" : "",
                              color: darkMode ? "white" : "",
                            }}
                          >
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/industries/restaurent.htm"
                              >
                                Restaurant
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/industries/healthcare.htm"
                              >
                                Health Care
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/industries/hospitality.htm"
                              >
                                Hospitality
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/industries/pharmaceutical.htm"
                              >
                                Pharmaceutical
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/industries/eloctronics.htm"
                              >
                                Electronics
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/industries/travel-tours.htm"
                              >
                                Travel & Tours
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/industries/service-provider.htm"
                              >
                                Service Provider
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/industries/hospitals.htm"
                              >
                                Hospitals
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h4 className="menu-title title-underline mb-0">
                            <span>Service Models</span>
                          </h4>
                          <ul
                            style={{
                              background: darkMode ? "black" : "",
                              color: darkMode ? "white" : "",
                            }}
                          >
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/industries/delivery-models.htm"
                              >
                                Delivery Models
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/industries/engagementmodels.htm"
                              >
                                Engagement Models
                              </a>
                            </li>
                            <li>
                              <div className="">
                                <button
                                  onClick={() => navigate("/inquiry.htm")}
                                  className="btn btn-primary mt-2 ms-3"
                                >
                                  Enquire Now{" "}
                                  <i
                                    class="fa fa-arrow-right ms-2"
                                    aria-hidden="true"
                                  ></i>
                                </button>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a
                      style={{
                        background: darkMode ? "black" : "",
                        color: darkMode ? "white" : "",
                      }}
                    >
                      Hire Developers
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <div
                      style={{
                        background: darkMode ? "black" : "",
                        color: darkMode ? "white" : "",
                      }}
                      className="megamenu left44"
                    >
                      <div className="row">
                        <div className="col-md-3">
                          <h4 className="menu-title title-underline mb-0">
                            <span>Hire Web Developers</span>
                          </h4>
                          <ul
                            style={{
                              background: darkMode ? "black" : "",
                              color: darkMode ? "white" : "",
                            }}
                          >
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/hiredeveloper/hire-php-developers.htm"
                              >
                                Hire PHP Developers
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/hiredeveloper/hire-laravel-developers.htm"
                              >
                                Hire Laravel Developers
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/hiredeveloper/hire-codeigniter-developers.htm"
                              >
                                Hire CodeIgniter Developers
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/hiredeveloper/hire-expressjs-developer-expert.htm"
                              >
                                Hire ExpressJS Developers
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="col-md-3">
                          <h4 className="menu-title title-underline mb-0">
                            <span>Hire Mobile Developers</span>
                          </h4>
                          <ul
                            style={{
                              background: darkMode ? "black" : "",
                              color: darkMode ? "white" : "",
                            }}
                          >
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/hiredeveloper/hire-iphone-app-developers.htm"
                              >
                                Hire iOS Developers
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/hiredeveloper/hire-android-app-developers.htm"
                              >
                                Hire Android Developers
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/hiredeveloper/hire-flutter-developers.htm"
                              >
                                Hire Flutter Developers
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h4 className="menu-title title-underline mb-0">
                            <span>Hire Frontend Developers</span>
                          </h4>
                          <ul
                            style={{
                              background: darkMode ? "black" : "",
                              color: darkMode ? "white" : "",
                            }}
                          >
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/hiredeveloper/hire-angular-js-developer.htm"
                              >
                                Hire Angular Developers
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/hiredeveloper/hire-reactjs-developers.htm"
                              >
                                Hire React JS Developers
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h4 className="menu-title title-underline mb-0">
                            <span>Hire Open Source Developers</span>
                          </h4>
                          <ul
                            style={{
                              background: darkMode ? "black" : "",
                              color: darkMode ? "white" : "",
                            }}
                          >
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/hiredeveloper/hire-wordpress-developers.htm"
                              >
                                Hire WordPress Developers
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/hiredeveloper/hire-shopify-developer-designer-india.htm"
                              >
                                Hire Shopify Developers
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/hiredeveloper/hire-magento-developers.htm"
                              >
                                Hire Magento Developers
                              </a>
                            </li>
                            <li>
                              <a href="/hiredeveloper/hire-opencart-developers.htm">
                                Hire OpenCart Developers
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="col-md-3">
                          <h4 className="menu-title title-underline mb-0">
                            <span>Hire Cross-Platform Developers</span>
                          </h4>
                          <ul
                            style={{
                              background: darkMode ? "black" : "",
                              color: darkMode ? "white" : "",
                            }}
                          >
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/hiredeveloper/hire-Ionic-developers.htm"
                              >
                                Hire Ionic Developers
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/hiredeveloper/hire-reactNative-developers.htm"
                              >
                                Hire React Native Developers
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/hiredeveloper/hire-PWA-developers.htm"
                              >
                                Hire PWA Developers
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="col-md-3">
                          <button
                            onClick={() => navigate("/inquiry.htm")}
                            className="btn btn-primary mt-2 ms-3"
                          >
                            Hire Developers{" "}
                            <i
                              class="fa fa-arrow-right ms-2"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <a
                      style={{
                        background: darkMode ? "black" : "",
                        color: darkMode ? "white" : "",
                      }}
                    >
                      Solutions
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <div
                      style={{
                        background: darkMode ? "black" : "",
                        color: darkMode ? "white" : "",
                      }}
                      className="megamenu left54"
                    >
                      <div className="row">
                        <div className="col-md-3">
                          <h4 className="menu-title title-underline mb-0">
                            <span>Customized Solutions</span>
                          </h4>
                          <ul
                            style={{
                              background: darkMode ? "black" : "",
                              color: darkMode ? "white" : "",
                            }}
                          >
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/solution/school-management.htm"
                              >
                                School management
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/solution/tailor-billing-pplication.htm"
                              >
                                Tailor Billing Application
                              </a>
                            </li>

                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/solution/recruitment-billing-application.htm"
                              >
                                Recruitment billing application
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/solution/crm.htm"
                              >
                                CRM application
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul
                            style={{
                              background: darkMode ? "black" : "",
                              color: darkMode ? "white" : "",
                            }}
                            className="paddingtop_50"
                          >
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/solution/billing-application.htm"
                              >
                                Billing application
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/solution/pos.htm"
                              >
                                POS
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/solution/restaurant.htm"
                              >
                                Multi restaurant management
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/solution/car-rental-system.htm"
                              >
                                Car rental system
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul
                            style={{
                              background: darkMode ? "black" : "",
                              color: darkMode ? "white" : "",
                            }}
                            className="paddingtop_50"
                          >
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/solution/hrms-payroll-system.htm"
                              >
                                Hrms payroll system
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/solution/online-food-ordering-system.htm"
                              >
                                Online food ordering system
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/solution/hospital-management-system.htm"
                              >
                                Hospital management system
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/solution/job-portal.htm"
                              >
                                Job portal
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul
                            style={{
                              background: darkMode ? "black" : "",
                              color: darkMode ? "white" : "",
                            }}
                            className="paddingtop_50"
                          >
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/solution/lawyer-booking-solution.htm"
                              >
                                Lawyer booking solution
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/solution/chat-application.htm"
                              >
                                Chat application
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/solution/hotel-booking-system.htm"
                              >
                                Hotel booking system
                              </a>
                            </li>
                            <li>
                              <h6 className="solution_button">
                                Get a Custom Solution Now
                              </h6>
                              <button
                                onClick={() => navigate("/inquiry.htm")}
                                className="btn btn-primary mt-2 ms-3"
                              >
                                Connect Now{" "}
                                <i
                                  class="fa fa-arrow-right ms-2"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <a
                      style={{
                        background: darkMode ? "black" : "",
                        color: darkMode ? "white" : "",
                      }}
                      href="#"
                    >
                      Our Work
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <div
                      style={{
                        background: darkMode ? "black" : "",
                        color: darkMode ? "white" : "",
                      }}
                      className="megamenu left60"
                    >
                      <div className="row d-flex justify-content-between">
                        <div
                          style={{
                            background: darkMode ? "black" : "",
                            color: darkMode ? "white" : "",
                          }}
                          className="col-md-4"
                        >
                          <h4 className="menu-title title-underline mb-0">
                            <span>Clients TESTIMONIAL</span>
                          </h4>
                          <img src="/images/topmenu-quote.webp" alt="" />
                          <p>
                            "It has been great working <br /> with Nexgeno over
                            the years <br /> on our website and online
                            marketing"
                          </p>
                          <h6 className="mt-2">Anil Garag</h6>
                        </div>{" "}
                        <div
                          style={{
                            background: darkMode ? "black" : "",
                            color: darkMode ? "white" : "",
                          }}
                          className="col-md-4"
                        >
                          <h4 className="menu-title title-underline mb-0">
                            <span>Case Study</span>
                          </h4>
                          <a
                            style={{
                              background: darkMode ? "black" : "",
                              color: darkMode ? "white" : "",
                            }}
                            href="/casestudy.htm"
                          >
                            <img
                              className="img-fluid mobile-port width90"
                              src="/images/navcase.jpg"
                              alt=""
                            />
                            <div className="d-flex justify-content-center">
                              <button
                                onClick={() => navigate("/casestudy.htm")}
                                className="btn btn-primary mt-2 ms-3"
                              >
                                View All
                                <i
                                  class="fa fa-arrow-left ms-2"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </a>
                        </div>
                        <div
                          style={{
                            background: darkMode ? "black" : "",
                            color: darkMode ? "white" : "",
                          }}
                          className="col-md-4"
                        >
                          <h4 className="menu-title title-underline mb-0">
                            <span>Portfolio</span>
                          </h4>
                          <a
                            style={{
                              background: darkMode ? "black" : "",
                              color: darkMode ? "white" : "",
                            }}
                            href="/portfolio-list.htm"
                          >
                            <img
                              className="img-fluid mobile-port width90"
                              src="/images/portfolio_image_onmenu.png"
                              alt=""
                            />
                            <div className="d-flex justify-content-center">
                              <button
                                onClick={() => navigate("/portfolio-list.htm")}
                                className="btn btn-primary mt-4 ms-3"
                              >
                                View All
                                <i
                                  class="fa fa-arrow-left ms-2"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <a
                      style={{
                        background: darkMode ? "black" : "",
                        color: darkMode ? "white" : "",
                      }}
                      href="#"
                    >
                      Company
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <div
                      style={{
                        background: darkMode ? "black" : "",
                        color: darkMode ? "white" : "",
                      }}
                      className="megamenu left56"
                    >
                      <div className="row">
                        <div className="col-md-3">
                          <h4 className="menu-title title-underline mb-0">
                            <span>Overview</span>
                          </h4>
                          <ul
                            style={{
                              background: darkMode ? "black" : "",
                              color: darkMode ? "white" : "",
                            }}
                          >
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/about-us.htm"
                              >
                                About Us
                              </a>
                            </li>
                            {/* <li>
                              <a href="/our-infrastructure">
                                Our Infrastructure
                              </a>
                            </li>
                            <li>
                              <a href="/our-team">Our Team</a>
                            </li> */}
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/devmethology.htm"
                              >
                                Development Methodology
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/certifications.htm"
                              >
                                Certifications
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/career.htm"
                              >
                                Career
                              </a>
                            </li>
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/contact.htm"
                              >
                                Contact Us
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h4 className="menu-title title-underline mb-0">
                            <span>Insights</span>
                          </h4>
                          <ul
                            style={{
                              background: darkMode ? "black" : "",
                              color: darkMode ? "white" : "",
                            }}
                          >
                            {/* <li>
                              <a href="/awards">Awards</a>
                            </li>
                            <li>
                              <a href="/media-coverage">
                                Media Coverage
                              </a>
                            </li>
                            <li>
                              <a href="/events-celebrations">
                                Events & Celebrations
                              </a>
                            </li> */}
                            <li>
                              <a
                                style={{
                                  background: darkMode ? "black" : "",
                                  color: darkMode ? "white" : "",
                                }}
                                href="/faq.htm"
                              >
                                FAQs
                              </a>
                            </li>
                            {/* <li>
                              <a href="/blogs">Blogs</a>
                            </li> */}
                          </ul>
                        </div>
                        <div className="col-md-6 d-none d-lg-block d-md-block">
                          <img
                            src="/images/nexgeno_about.png"
                            className="img-fluid pt-1"
                          />
                        </div>
                      </div>
                    </div>
                  </li>

                  <div
                    onClick={toggle}
                    className={darkMode ? "toggle-close_dark" : "toggle-close"}
                  >
                    <i className="fa-solid fa-x"></i>
                  </div>
                </ul>
                <div onClick={toggle} className="toggle-open">
                  <i className="fa-solid fa-bars"></i>
                </div>
              </nav>
            </div>
            <div className="header-right">
              {/* <button
                onClick={() => navigate("/contact.htm")}
                className="letstalk_button"
              >
                Let's Talk
              </button> */}
              <Button url="/contact.htm" text="Let's Talk" />
            </div>
          </div>
        </div>
      </header>
      {/*<Breadcrumbs />*/}
    </>
  );
};

export default NavBar;
