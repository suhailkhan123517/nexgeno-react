import React, { useContext } from "react";
import { themeContext } from "./Context";

const Contactcalltoaction = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <section className="footertopsection">
        <div className="container">
          <div className="row">
            <div className="col-md-6 contact">
              <div className="info">
                <div className="address">
                  <i className="fa fa-map" aria-hidden="true"></i>
                  <h4>Location:</h4>
                  <p>
                    Unit No. F-50, First Floor kohinoor City Mall Opp Holly
                    Cross School, Kurla (West) Mumbai, Maharashtra - 400070.
                  </p>
                </div>
                <div className="email">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <h4>Email:</h4>
                  <p>
                    <a className="text-white" href="mailto:sales@nexgeno.in">
                      sales@nexgeno.in
                    </a>
                  </p>
                </div>
                <div className="phone">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <h4>Call:</h4>
                  <p>
                    <a className="text-white" href="tel:+91 90044 66166">
                      +91 90044 66166
                    </a>{" "}
                    /{" "}
                    <a className="text-white" href="tel:+91 9773375525">
                      +91 9773375525
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div
                style={{
                  background: darkMode ? "#212529" : "",
                  color: darkMode ? "white" : "",
                }}
                className={
                  darkMode ? "footer_contact_form_dark" : "footer_contact_form"
                }
              >
                <div className="common-heading text-center">
                  <h2
                    style={{
                      color: darkMode ? "white" : "",
                    }}
                    className="mb-5"
                  >
                    Get in Touch
                  </h2>{" "}
                </div>

                <form
                  method="post"
                  action="https://api2.nexgeno.in/email/send.php?from=home"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group pb-4 pb-md-5">
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
                    <div className="col-md-12 pb-4 pb-md-5">
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
                    <div className="col-md-12 pb-4 pb-md-5">
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
                    <div className="col-md-12 pb-4 pb-md-5">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="Company"
                          id="Company"
                          placeholder="Company Name *"
                          required
                        />
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
                        className={`btn btn-primary ${
                          darkMode ? "btn-main_dark" : "btn-main"
                        }`}
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
    </div>
  );
};

export default Contactcalltoaction;
