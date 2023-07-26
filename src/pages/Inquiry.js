import React from "react";
import Footer from "../Footer";
import NavBar from "../Navbar";
import Clientslogo from "../Clientslogo";
import { useContext } from "react";
import { themeContext } from "../Context";
import MobileNav from "../components/MobileNav/MobileNav";

export default function Inquiry() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <NavBar />
      <MobileNav />

      <section className={darkMode ? "inquiry_dark" : "inquiry"}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 form-inquiry">
              <div className="text-center">
                <h1> Get in touch </h1>
              </div>
              <div className="text-start">
                <p className="fs-5 mt-5">
                  Please fill in the form and our <br /> representative will get
                  back to you.
                </p>
              </div>
              <div className="mt-5">
                <h3>4000+ project Delivers</h3>
                <p className="fs-6">
                  Who have trusted us with their project delivery needs.
                </p>
                <div className="bg-color-inq">
                  <hr />
                </div>
              </div>
              <div className="mt-5">
                <h3>11+ Years Of Experience</h3>
                <p className="fs-6">
                  And dedication to delivering outstanding quality and value.
                </p>
                <div className="bg-color-inq">
                  <hr />
                </div>
              </div>
              <div className="mt-5">
                <h3>3000+ Happy Clients</h3>
                <p className="fs-6">
                  And counting - Our biggest measure of success.
                </p>
                <div className="bg-color-inq">
                  <hr />
                </div>
              </div>
              <div className="mt-5">
                <h3>45+ Dedicated Employees</h3>
                <p className="fs-6">Working together to achieve your goals.</p>
                <div className="bg-color-inq">
                  <hr />
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div id="in-form" className="footer_contact_form">
                <form
                  method="post"
                  action="https://api2.nexgeno.in/email/send.php?from=home"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group pb-5">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          placeholder="Your Name *"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12 pb-5">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Your Email *"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12 pb-5">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="mobile"
                          id="mobile"
                          placeholder="Mobile No. *"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12 pb-5">
                      <div className="form-group">
                        <div className="dropdown-inqu">
                          <p>Interested Service</p>
                        </div>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="interested_service"
                        >
                          <option value="undefined">Select Services</option>
                          <option value="Custom Web Application development">
                            Custom Web Application development
                          </option>
                          <option value="Website Design & Development ">
                            Website Design & Development
                          </option>
                          <option value="Product Prototyping">
                            Product Prototyping
                          </option>
                          <option value="Ecommerce Website ">
                            Ecommerce Website
                          </option>
                          <option value="Mobile App Development ">
                            Mobile App Development
                          </option>
                          <option value="UI/UX Design & Development Hire a Dedicated Resources Requirement">
                            UI/UX Design & Development Hire a Dedicated
                            Resources Requirement
                          </option>
                          <option value="Resources Requirement ">
                            Resources Requirement
                          </option>
                          <option value="Speed Optimization">
                            Speed Optimization
                          </option>
                          <option value="Landing Page Design">
                            Landing Page Design
                          </option>
                          <option value="Gsuit / Email Solution">
                            Gsuit / Email Solution
                          </option>
                          <option value="SEO / SMO Digital Marketing">
                            SEO / SMO Digital Marketing
                          </option>
                          <option value="Design / Branding / Graphics">
                            Design / Branding / Graphics
                          </option>
                          <option value="3">Others</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 pb-5">
                      <div className="form-group">
                        <div className="dropdown-inqu">
                          <p>Project Budget</p>
                        </div>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          name="project_budget"
                        >
                          <option value="Below 10k">Below 10k</option>
                          <option value="$10k - $25K">$10k - $25K</option>
                          <option value="$25k - $50k">$25k - $50k</option>
                          <option value="$50k - $100k">$50k - $100k</option>
                          <option value="$100k - $200k">$100k - $200k</option>
                          <option selected value="$200k - $500k">
                            $200k - $500k
                          </option>
                          <option value="$500k Above">$500k Above</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-5">
                        <textarea
                          className="form-control"
                          name="message"
                          rows="3"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>

                    <div className="text-center">
                      <button
                        className="btn btn-primary btn-main"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="c-inquiry">
        <Clientslogo />
      </div>

      <Footer />
    </>
  );
}
