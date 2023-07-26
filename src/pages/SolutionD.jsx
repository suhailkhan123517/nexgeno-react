import React from "react";
import NavBar from "../Navbar";
import Footer from "../Footer";
import { NavLink } from "react-router-dom";
import { solutionDatialsDB } from "../utils/Database";
import { useContext } from "react";
import { themeContext } from "../Context";
import MobileNav from "../components/MobileNav/MobileNav";
import replace from "../utils/replaceTitle";

const SolutionD = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  replace({
    title: "Solution",
  });
  return (
    <>
      <div>
        <NavBar />
        <MobileNav />

        <div className="about_inner_banner">
          <img src="images/aboutusbbaner.jpg" className="img-fluid" />
        </div>
        <section className="our-infrastructure">
          <div className="container">
            <h1 className="text-center fs-xl mb-5">Solution</h1>
            <div className="row">
              {solutionDatialsDB.map((item) => {
                const { id, link, img, stitle } = item;
                return (
                  <div key={id} className="col-lg-4  mb-5">
                    <div className="solution-content">
                      <div
                        className={
                          darkMode ? "image-solution_dark" : "image-solution"
                        }
                      >
                        <NavLink to={link}>
                          <img src={img} alt="about" className="img-fluid" />
                        </NavLink>
                      </div>
                      <div className="heading-img text-center mt-2">
                        <p className="fs-5">{stitle}</p>
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

export default SolutionD;
