import React from "react";
import Footer from "../Footer";
import NavBar from "../Navbar";
import MobileNav from "../components/MobileNav/MobileNav";

export default function HireDeveloperContact() {
  return (
    <>
      <NavBar />
      <MobileNav />

      <div class="about_inner_banner">
        <img src="images/aboutusbbaner.jpg" class="img-fluid" />
      </div>
      <section id="contact" className="contact section-bg">
        <div className="container aos-init aos-animate">
          <div className="section-title">
            <h2>Hire Developer</h2>
          </div>
          <div className="row">
            {/* <div className="col-lg-5 d-flex align-items-stretch">
        <div className="info">
          <div className="address">
            <i class="fa fa-map" aria-hidden="true"></i>
            <h4>Location:</h4>
            <p>
              Unit No. F-50, First Floor kohinoor City Mall Opp Holly
              Cross School, Kurla (West) Mumbai, Maharashtra - 400070.
            </p>
          </div>

          <div className="email">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <h4>Email:</h4>
            <p>sales@nexgeno.in</p>
          </div>

          <div className="phone">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <h4>Call:</h4>
            <p>+91 9773375525 / +91 9029075525</p>
          </div>
        </div>
      </div> */}
            <div className="col-lg-12 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form
                action=""
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="form-group col-md-4">
                    <label for="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required
                      placeholder="Enter your First Name"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label for="name">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      id=""
                      required
                      placeholder="Enter your Last Name"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label for="name">What is your Email Address</label>
                    <input
                      type="email"
                      name=""
                      className="form-control"
                      id=""
                      required=""
                      placeholder="Enter your Email eg: example@gmail.com"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label for="name">What is your Mobile No?*</label>
                    <input
                      type="number"
                      className="form-control"
                      name=""
                      id=""
                      required=""
                      placeholder="Enter your mobile Number"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label for="name">Select position that interests you</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required=""
                      placeholder="Select Position"
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label for="name">What is your total experience?</label>
                    <input
                      type="number"
                      name="name"
                      className="form-control"
                      id="name"
                      required=""
                      placeholder="Select expricence band"
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label for="name">
                      What is your current CTC (In Lacs)?
                    </label>
                    <input
                      type="number"
                      name="name"
                      className="form-control"
                      id="name"
                      required=""
                      placeholder="Enter your current CTC"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label for="name">
                      What is your expected CTC (In Lacs)?
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="email"
                      id="email"
                      required=""
                      placeholder="Enter your expacted CTC "
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label for="name">Are you serving notice period?</label>
                    <input
                      type="number"
                      name="name"
                      className="form-control"
                      id="name"
                      required=""
                      placeholder="Select Position"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
