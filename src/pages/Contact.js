import React from "react";
import NavBar from "../Navbar";
import Footer from "../Footer";
import MobileNav from "../components/MobileNav/MobileNav";
import replace from "../utils/replaceTitle";
import generateSchemaMarkup from "../utils/SchemaMarkup";
import { Helmet } from "react-helmet";

const Contact = () => {
  replace({
    title: "Contact",
    description: "Together, let's make a difference.",
  });
  const pageData = {
    title: "Contact",
    description: "Together, let's make a difference.",
  };
  const schemaMarkup = generateSchemaMarkup(pageData);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      <NavBar />
      <MobileNav />

      <section id="contact" className="contact section-bg mt-5 mt-md-0">
        <div className="">
          <div className="row">
            <div className="col-lg-7">
              <div className="info">
                <div className="section-title">
                  <h2 className="contact_hed">
                    Together, let's make a difference.
                  </h2>
                </div>

                <div className="phone">
                  <i class="fa fa-mobile" aria-hidden="true"></i>
                  <h4>Speak with a strategist:</h4>
                  <p className="con-anchor">
                    {" "}
                    <a href="tel:+91 90044 66166">+91 90044 66166</a> /{" "}
                    <a href="tel:+91 9773375525 ">+91 9773375525 </a>{" "}
                  </p>
                </div>

                {/*<div className="email white_boxex">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  <h4>Email:</h4>
                  <p className="con-anchor">
                    {" "}
                    <a href="mailto:sales@nexgeno.in">sales@nexgeno.in</a>{" "}
                  </p>
                  </div>*/}
              </div>
            </div>
            <div className="col-lg-5 mt-3 mt-lg-0">
              <div className="contact_form_box1">
                <form
                  action="https://api2.nexgeno.in/email/send.php?from=home"
                  method="post"
                  className="php-email-form"
                >
                  <div className="form-group">
                    <label for="name">
                      Your Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="name">
                      Your Email <span>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="name">
                      Mobile No <span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="name">
                      Company Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="name">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="10"
                      required
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="location">
        <div className="">
          <div className="row">
            <div className="col-lg-7">
              <div className="location_box">
                <h4>Registered Office </h4>

                <p>
                  <b>Address:</b> Shop no 2, Mohd Hussain Compound, Near
                  Maharashtra Weight Bridge, L.B.S. Marg, Kurla(W), Mumbai –
                  400070.
                </p>

                <p>
                  <b>Mobile No:</b> +91 90290 75525
                </p>

                <p>
                  <b>Email:</b> info@nexgeno.in{" "}
                </p>
              </div>

              <div className="location_box">
                <div className="location_content">
                  <h4>Development office </h4>
                  <p>
                    <b>Address:</b> Unit No. F-50, First Floor kohinoor City
                    Mall Opp Holly Cross School, Kurla (West) Mumbai,
                    Maharashtra - 400070.
                  </p>

                  <p>
                    <b>Mobile No:</b> +91 90044 66166
                  </p>

                  <p>
                    <b>Email:</b> sales@nexgeno.in{" "}
                  </p>
                </div>
              </div>

              <div className="location_box">
                <div className="location_content">
                  <h4>UK </h4>
                  <p>
                    <b>Address:</b> Goodmayes Road, Ilford,Essex.
                  </p>

                  <p>
                    <b>Mobile No:</b> +44 2036371107
                  </p>

                  <p>
                    <b>Email:</b> uk@nexgeno.in{" "}
                  </p>
                </div>
              </div>

              <div className="location_box">
                <div className="location_content">
                  <h4>South Africa </h4>
                  <p>
                    <b>Address:</b> Archary Road Clairwood Durban Kwazulu Natal,
                    South Africa.
                  </p>

                  <p>
                    <b>Mobile No:</b> +27 031 465 4604
                  </p>

                  <p>
                    <b>Email:</b> sa@nexgeno.in{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
