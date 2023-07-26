import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../Navbar";
import CalltoAction from "../CalltoAction";
import Footer from "../Footer";
import Clientslogo from "../Clientslogo";
import Counter from "../Counter";
import Industries from "../Industries";
import Successtories from "../Successtories";
import Technology from "../Technology";
import Process from "../Process";
import { useContext } from "react";
import { themeContext } from "../Context";
import MobileNav from "../components/MobileNav/MobileNav";
import Button from "../components/button/Button";
import replace from "../utils/replaceTitle";
import generateSchemaMarkup from "../utils/SchemaMarkup";
import { Helmet } from "react-helmet";

const DevelopmentMethodology = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  replace({
    title: "Development Methodology",
    description:
      "Development Methodology is a structured approach to software development that involves a set of guidelines, principles, and processes that software development teams use to manage the software development life cycle (SDLC). It provides a framework that helps development teams to organize their work, collaborate effectively, and deliver high-quality software products that meet the customer's needs.",
    image: "/images/devmeto.jpg",
  });

  const pageData = {
    title: "Development Methodology",
    description:
      "Development Methodology is a structured approach to software development that involves a set of guidelines, principles, and processes that software development teams use to manage the software development life cycle (SDLC). It provides a framework that helps development teams to organize their work, collaborate effectively, and deliver high-quality software products that meet the customer's needs.",
    imageUrl: "/images/devmeto.jpg",
    url: "devmethology.htm",
  };

  const schemaMarkup = generateSchemaMarkup(pageData);
  return (
    <div>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      <NavBar />
      <MobileNav />

      <section className="services_secrtion_1">
        <div className="container">
          <div className="row d-flex flex-wrap-reverse">
            <div className="col-lg-6">
              <div className="common-heading text-l">
                <h1
                  style={{
                    color: darkMode ? "white" : "",
                  }}
                  className="pb-2 fontsize-70 services_hed pt-4 pt-lg-0"
                >
                  Development Methodology
                </h1>
                <p className="services_para pt-lg-3 mb-0 mb-lg-3">
                  Development Methodology is a structured approach to software
                  development that involves a set of guidelines, principles, and
                  processes that software development teams use to manage the
                  software development life cycle (SDLC). It provides a
                  framework that helps development teams to organize their work,
                  collaborate effectively, and deliver high-quality software
                  products that meet the customer's needs.
                </p>
                <p className="services_para pt-lg-3 mb-0 mb-lg-3">
                  At Nexgeno Technology, we understand the importance of a
                  development methodology that is tailored to the specific needs
                  of each project. Our team of experienced developers utilizes a
                  range of methodologies, including Waterfall, Agile, Scrum,
                  Lean, and DevOps, depending on the project's requirements,
                  complexity, and scope.
                </p>
              </div>
              <div className="-cta-btn mt-4 text-left">
                <div className="free-cta-title wow zoomInDown btn-main1 ">
                  {/* <NavLink to="inquiry.htm" className="bg-btn2 lnk">
                    Get In Touch
                    <i
                      className="fa fa-arrow-right ms-2"
                      aria-hidden="true"
                    ></i>
                  </NavLink>{" "} */}
                  <Button url="/inquiry.htm" text="Get In Touch" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <div className="image-block">
                <img
                  src="/images/devmeto.jpg"
                  alt="about"
                  className="img-fluid pt-lg-5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Clientslogo />
      <Technology />
      <Counter />
      <Successtories />
      <Industries />
      <CalltoAction />
      <Process />
      <Footer />
    </div>
  );
};

export default DevelopmentMethodology;
