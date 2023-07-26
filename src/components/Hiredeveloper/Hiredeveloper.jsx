import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../../Navbar";
import { hireDeveloper } from "../../utils/Database";
import Footer from "../../Footer";
import { useContext } from "react";
import { themeContext } from "../../Context";
import MobileNav from "../MobileNav/MobileNav";
import replace from "../../utils/replaceTitle";

const Hiredeveloper = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  replace({
    title: "Hire Developer",
  });
  return (
    <>
      <div>
        <NavBar />
        <MobileNav />

        <section className="our-infrastructure">
          <div className="container">
            <h1 className="text-center fs-xl mb-5">Hire Developer</h1>
            <div className="row">
              {hireDeveloper.map((item) => {
                const { id, link, img, des, stitle } = item;
                return (
                  <div key={id} className="col-lg-4  mb-5">
                    <div
                      className={
                        darkMode ? "all-services_dark" : "all-services"
                      }
                    >
                      <div className="services-content">
                        <div className="image-services">
                          <NavLink to={link}>
                            <img src={img} alt="about" className="img-fluid" />
                          </NavLink>
                        </div>
                        <div className="heading-img mt-5">
                          <p className="fs-5">{stitle}</p>
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

export default Hiredeveloper;
