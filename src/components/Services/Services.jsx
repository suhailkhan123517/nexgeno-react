import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../../Navbar";
import { allServices } from "../../utils/Database";
import Footer from "../../Footer";
import "./Services.css";
import { useContext } from "react";
import { themeContext } from "../../Context";
import MobileNav from "../MobileNav/MobileNav";
import replace from "../../utils/replaceTitle";
import generateSchemaMarkup from "../../utils/SchemaMarkup";
import { Helmet } from "react-helmet";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  replace({
    title: "Services",
  });

  const pageData = {
    title: "Services",
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

        <section class="our-infrastructure">
          <div class="container">
            <h1 className="text-center fs-xl mb-5">Services</h1>
            <div class="row">
              {allServices.map((item) => {
                const { id, link, img, des, title } = item;
                return (
                  <div key={id} class="col-lg-4  mb-5">
                    <div
                      className={
                        darkMode ? "all-services_dark" : "all-services"
                      }
                    >
                      <div className="services-content">
                        <div class="image-services">
                          <NavLink to={link}>
                            <img src={img} alt="about" class="img-fluid" />
                          </NavLink>
                        </div>
                        <div className="heading-img mt-3">
                          <p className="fs-5">{title}</p>
                          <div className="services-block">
                            <p>{des}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Services;
