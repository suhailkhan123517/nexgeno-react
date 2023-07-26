import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { themeContext } from "./Context";
import { services, solutionDatialsDB } from "./utils/Database";

const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div>
      <div
        className={
          darkMode
            ? "dark pt-lg-5 pb-lg-5 pt-4 pb-4"
            : "footer_bg pt-lg-5 pb-lg-5 pt-4 pb-4"
        }
      >
        <div className="footer-top ">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4   footer-links">
                <div className={darkMode ? "dark" : "footer_hed"}>
                  <h5 className="fos16">Development Services</h5>
                  <hr />
                </div>
                <ul>
                  {services.map((item) => {
                    return (
                      <li>
                        <NavLink to={item.link}>{item.footerTitle}</NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-lg-3 col-md-3   footer-links">
                <div className="row">
                  <div className="col-md-12 col-6">
                    <div className={darkMode ? "dark" : "footer_hed"}>
                      <h5 className="fos16">Service Models</h5>
                      <hr />
                    </div>
                    <ul>
                      <li>
                        <NavLink
                          style={{
                            background: darkMode ? "black" : "",
                            color: darkMode ? "white" : "",
                          }}
                          to="/industries/delivery-models.htm"
                        >
                          Delivery Models
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          style={{
                            background: darkMode ? "black" : "",
                            color: darkMode ? "white" : "",
                          }}
                          to="/industries/engagementmodels.htm"
                        >
                          Engagement Models
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-12 col-6">
                    <div className={darkMode ? "dark" : "footer_hed"}>
                      <h5 className="fos16">Trending Service</h5>
                      <hr />
                    </div>

                    <ul>
                      <li>
                        <NavLink to="/services/chatbot-development.htm">
                          ChatBot
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/services/alml.htm">AI/ML</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-2 col-6  footer-links">
                <div className={darkMode ? "dark" : "footer_hed"}>
                  <h5 className="fos16">Resources</h5>
                  <hr />
                </div>
                <ul>
                  <li>
                    <NavLink to="/about-us.htm">About us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/devmethology.htm">Devmethology</NavLink>
                  </li>
                  <li>
                    <NavLink to="/certifications.htm">Certifications</NavLink>
                  </li>
                  <li>
                    <NavLink to="/career.htm">Career</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact.htm">Contact</NavLink>
                  </li>
                  <li>
                    <NavLink to="/faq.htm">FAQ</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-2 col-6 footer-links">
                <div className={darkMode ? "dark" : "footer_hed"}>
                  <h5 className="fos16">Our Work</h5>
                  <hr />
                </div>
                <ul>
                  <li>
                    <NavLink to="/portfolio-list.htm">Portfolio</NavLink>
                  </li>
                  <li>
                    <NavLink to="/casestudy.htm">Casestudy</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Testimonial</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-12 col-md-12 mt-1 mt-lg-4 mt-md-4 footer-links">
                <div className={darkMode ? "dark" : "footer_hed"}>
                  <h5 className="footer_heading_n">Solution</h5>
                  <hr />
                </div>
                <div className="ftr-inr">
                  <ul className="ftr-link-lst float_left_footer">
                    <li>
                      <NavLink to="/solution/school-management.htm">
                        School-management
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/solution/tailor-billing-pplication.htm">
                        Tailor billing Application
                      </NavLink>
                    </li>

                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/solution/recruitment-billing-application.htm">
                        Recruitment billing
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>

                    <li>
                      <NavLink to="/solution/crm.htm">CRM</NavLink>
                    </li>
                    <li className="li_stock"> | </li>

                    <li>
                      <NavLink to="/solution/billing-application.htm">
                        Billing application
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>

                    <li>
                      <NavLink to="/solution/pos.htm">POS</NavLink>
                    </li>
                    <li className="li_stock"> | </li>

                    <li>
                      <NavLink to="/solution/restaurant.htm">
                        Restaurant
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>

                    <li>
                      <NavLink to="/solution/car-rental-system.htm">
                        Car rental system
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>

                    <li>
                      <NavLink to="/solution/hrms-payroll-system.htm">
                        Hrms payroll system
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>

                    <li>
                      <NavLink to="/solution/online-food-ordering-system.htm">
                        Online food ordering system
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>

                    <li>
                      <NavLink to="/solution/hospital-management-system.htm">
                        Hospital management system
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>

                    <li>
                      <NavLink to="/solution/job-portal.htm">
                        Job portal
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>

                    <li>
                      <NavLink to="/solution/lawyer-booking-solution.htm">
                        Lawyer booking solution
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>

                    <li>
                      <NavLink to="/solution/chat-application.htm">
                        Chat application
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>

                    <li>
                      <NavLink to="/solution/hotel-booking-system.htm">
                        Hotel bookingsystem
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 mt-1 mt-lg-4 mt-md-4 footer-contact">
                <div className={darkMode ? "dark" : "footer_hed"}>
                  <h5 className="footer_heading_n">Technologies</h5>
                  <hr />
                </div>

                <div className="ftr-inr float_left_footer">
                  <li>
                    <NavLink to="/technology/ios.htm">iOS</NavLink>
                  </li>
                  <li className="li_stock"> | </li>
                  <li>
                    <NavLink to="/technology/andriod.htm">Android</NavLink>
                  </li>
                  <li className="li_stock"> | </li>
                  <li>
                    <NavLink to="/technology/reactnative.htm">
                      React Native
                    </NavLink>
                  </li>
                  <li className="li_stock"> | </li>
                  <li>
                    <NavLink to="/technology/googleflutter.htm">
                      Flutter
                    </NavLink>
                  </li>
                  <li className="li_stock"> | </li>
                  <li>
                    <NavLink to="/technology/azure.htm">Azure</NavLink>
                  </li>
                  <li className="li_stock"> | </li>
                  <li>
                    <NavLink to="/technology/mysql.htm">Mysql</NavLink>
                  </li>
                  <li className="li_stock"> | </li>
                  <li>
                    <NavLink to="/technology/mariadb.htm">Mariadb</NavLink>
                  </li>
                  <li className="li_stock"> | </li>

                  <li>
                    <NavLink to="/technology/php.htm">PHP</NavLink>
                  </li>

                  <li className="li_stock"> | </li>
                  <li>
                    <NavLink to="/technology/node.htm">Node JS</NavLink>
                  </li>
                  <li className="li_stock"> | </li>
                  <li>
                    <NavLink to="/technology/wordpress.htm">WordPress</NavLink>
                  </li>
                  <li className="li_stock"> | </li>
                  <li>
                    <NavLink to="/technology/woocommerce.htm">
                      Woocommerce
                    </NavLink>
                  </li>
                  <li className="li_stock"> | </li>
                  <li>
                    <NavLink to="/technology/googlecloud.htm">
                      Google Cloud
                    </NavLink>
                  </li>
                  <li className="li_stock"> | </li>
                  <li>
                    <NavLink to="/technology/sqlserver.htm">Sql Server</NavLink>
                  </li>
                  <li className="li_stock"> | </li>
                  <li>
                    <NavLink to="/technology/dynamodb.htm">Dynamodb</NavLink>
                  </li>
                  <li className="li_stock"> | </li>

                  <li>
                    <NavLink to="/technology/magento.htm">Magneto</NavLink>
                  </li>
                  <li className="li_stock"> | </li>
                  <li>
                    <NavLink to="/technology/react.htm">ReactJS</NavLink>
                  </li>
                  <li className="li_stock"> | </li>
                  <li>
                    <NavLink to="/technology/vue.htm">VueJS</NavLink>
                  </li>
                  <li className="li_stock"> | </li>
                  <li>
                    <NavLink to="/technology/aws.htm">AWS</NavLink>
                  </li>
                  <li className="li_stock"> | </li>
                  <li>
                    <NavLink to="/technology/mongo.htm">Mongodb</NavLink>
                  </li>
                  <li className="li_stock"> | </li>
                  <li>
                    <NavLink to="/technology/postgresql.htm">
                      Postgresql
                    </NavLink>
                  </li>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 mt-1 mt-lg-4 mt-md-4 footer-links">
                <div className={darkMode ? "dark" : "footer_hed"}>
                  <h5 className="footer_heading_n">Hire Developers</h5>
                  <hr />
                </div>
                <div className="ftr-inr float_left_footer">
                  <ul className="ftr-link-lst ">
                    <li>
                      <NavLink to="/hiredeveloper/hire-php-developers.htm">
                        Hire PHP Developers
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/hiredeveloper/hire-codeigniter-developers.htm">
                        Hire Codeigniter Developers
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/hiredeveloper/hire-expressjs-developer-expert.htm">
                        Hire NodeJs Developers
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/hiredeveloper/hire-wordpress-developers.htm">
                        Hire WordPress Developers
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/hiredeveloper/hire-iphone-app-developers.htm">
                        Hire iOS Developers
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/hiredeveloper/hire-android-app-developers.htm">
                        Hire Android Developers
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/hiredeveloper/hire-angular-js-developer.htm">
                        Hire Angular Developers
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/hiredeveloper/hire-reactjs-developers.htm">
                        Hire React.JS Developers
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/hiredeveloper/hire-wordpress-developers.htm">
                        Hire WordPress Developers
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/hiredeveloper/hire-magento-developers.htm">
                        Hire Magento Developers
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/hiredeveloper/hire-opencart-developers.htm">
                        Hire OpenCart Developers
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/hiredeveloper/hire-Ionic-developers.htm">
                        Hire Ionic Developers
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/hiredeveloper/hire-reactNative-developers.htm">
                        Hire React Native Developers
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/hiredeveloper/hire-PWA-developers.htm">
                        Hire PWA Developers
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-12 col-md-12  mt-1 mt-lg-4 mt-md-4 footer-links">
                <div className={darkMode ? "dark" : "footer_hed"}>
                  <h5 className="footer_heading_n">Industries</h5>
                  <hr />
                </div>
                <div className="ftr-inr float_left_footer">
                  <ul className="ftr-link-lst ">
                    <li>
                      <NavLink to="/industries/educationl-earning.htm">
                        Education / E-Learning
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/industries/retail.htm">Retail</NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/industries/logistics-distribution.htm">
                        Logistics & Distribution
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/industries/finTECH.htm">FinTECH</NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/industries/manufacturing.htm">
                        Manufacturing
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/industries/events.htm">Events</NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/industries/recruitment.htm">
                        Recruitment
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/industries/real-estate.htm">
                        Real Estate
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/industries/restaurent.htm">
                        Restaurant
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/industries/healthcare.htm">
                        Health Care
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/industries/hospitality.htm">
                        Hospitality
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/industries/pharmaceutical.htm">
                        Pharmaceutical
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/industries/eloctronics.htm">
                        Electronics
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/industries/travel-tours.htm">
                        Travel & Tours
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/industries/service-provider.htm">
                        Service Provider
                      </NavLink>
                    </li>
                    <li className="li_stock"> | </li>
                    <li>
                      <NavLink to="/industries/hospitals.htm">
                        Hospitals
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-6 footer-links">
                <div className="footer_hed mt-3">
                  <h5>Support Digital India</h5>
                  <hr />
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="footer_cirt_img">
                      <img
                        className="img-fluid"
                        src="https://www.makent.in/wp-content/uploads/2022/01/didita1.jpg"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="footer_cirt_img">
                      <img
                        className="img-fluid"
                        src="https://www.makent.in/wp-content/uploads/2022/01/makein-1.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div> */}
              {/* 
              <div className="col-lg-8 col-md-6 footer-links">
                <div className="footer_hed mt-3">
                  <h5>Featured In</h5>
                  <hr />
                </div>

                <div className="row">
                  <div className="col-lg-3">
                    <div className="footer_cirt_img">
                      <img
                        className="img-fluid"
                        src="https://www.makent.in/wp-content/uploads/2022/01/jusr.jpg"
                      />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="footer_cirt_img">
                      <img
                        className="img-fluid"
                        src="https://www.makent.in/wp-content/uploads/2022/01/suleka.jpg"
                      />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="footer_cirt_img">
                      <img
                        className="img-fluid"
                        src="https://www.makent.in/wp-content/uploads/2022/01/clutch.jpg"
                      />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="footer_cirt_img">
                      <img
                        className="img-fluid"
                        src="https://www.makent.in/wp-content/uploads/2022/01/olx.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div> */}
              {/* 
              <div className="col-lg-10 col-md-6 footer-links icon_cirfticaite">
                <div className="footer_hed mt-5">
                  <h5>Certified</h5>
                  <hr />
                </div>

                <div className="row">
                  <div className="col-lg-2">
                    <div className="footer_cirt_img">
                      <img
                        className="img-fluid"
                        src="https://www.makent.in/wp-content/uploads/2022/01/gsuit.jpg"
                      />
                    </div>
                  </div>

                  <div className="col-lg-2">
                    <div className="footer_cirt_img">
                      <img
                        className="img-fluid"
                        src="https://www.makent.in/wp-content/uploads/2022/01/Untitled-1.jpg"
                      />
                    </div>
                  </div>

                  <div className="col-lg-2">
                    <div className="footer_cirt_img">
                      <img
                        className="img-fluid"
                        src="https://www.makent.in/wp-content/uploads/2022/01/aws.jpg"
                      />
                    </div>
                  </div>

                  <div className="col-lg-2">
                    <div className="footer_cirt_img">
                      <img
                        className="img-fluid width120px"
                        src="https://www.makent.in/wp-content/uploads/2022/01/cpanel.jpg"
                      />
                    </div>
                  </div>

                  <div className="col-lg-2">
                    <div className="footer_cirt_img">
                      <img
                        className="img-fluid width90px"
                        src="https://www.makent.in/wp-content/uploads/2022/04/cpanel_cirtificate.svg"
                      />
                    </div>
                  </div>
                </div>
              </div> */}
              {/* 
              <div className="col-lg-2 col-md-6 footer-links">
                <div className="footer_hed mt-5">
                  <h5>Proud Member</h5>
                  <hr />
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="footer_cirt_img">
                      <img
                        className="img-fluid"
                        src="https://www.makent.in/wp-content/uploads/2022/01/bniproud.jpg"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6"></div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="w-icon">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send?phone=919773375525&amp;text=Hi,%20I%20am%20contacting%20you%20through%20your%20website%20https://nexgeno.in/"
        >
          <img src="images/w-icon.png" alt="" />
        </a>
      </div>

      <div className="footer_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 footer-links">
              <p className="pt-2  text-center">
                ©2023 NexGeno Technology Private Limited.
              </p>
            </div>

            <div className="col-lg-4 col-md-4 footer-links text-center">
              <NavLink to="/" className="logo-footer">
                <img
                  src="/images/nexgeno_logo.png"
                  className="img-fluid width-200"
                />
              </NavLink>
            </div>

            <div className="col-lg-4 col-md-4 footer-links">
              <ul className="bottom_li ">
                <li className="fs-5">
                  <NavLink
                    style={{
                      color: darkMode ? "white" : "",
                    }}
                    to="/privacy-policy.htm"
                  >
                    Privacy Policy{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={{
                      color: darkMode ? "white" : "",
                    }}
                    to="/termcondition.htm"
                  >
                    Terms & Condition
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
