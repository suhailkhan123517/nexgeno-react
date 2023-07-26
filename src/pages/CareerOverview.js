import React from "react";
import NavBar from "../Navbar";
import Footer from "../Footer";
import MobileNav from "../components/MobileNav/MobileNav";
import replace from "../utils/replaceTitle";
import generateSchemaMarkup from "../utils/SchemaMarkup";
import { Helmet } from "react-helmet";

const CareerOverview = () => {
  replace({
    title: "Career",
  });

  const pageData = {
    title: "Career",
  };

  const schemaMarkup = generateSchemaMarkup(pageData);
  return (
    <>
      <div>
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(schemaMarkup)}
          </script>
        </Helmet>
        <NavBar />
        <MobileNav />

        <div class="about_inner_banner">
          <img src="images/aboutusbbaner.jpg" class="img-fluid" />
        </div>
        <section id="contact" className="contact section-bg carrer_section">
          <div className="container aos-init aos-animate">
            <div className="section-title">
              <h2>Career</h2>
            </div>
            <div className="row">
              <div className="col-lg-12 mt-2 mt-lg-0 d-flex align-items-stretch">
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
                      <label for="name">
                        Select position that interests you
                      </label>
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
      </div>
    </>
  );
};

export default CareerOverview;
