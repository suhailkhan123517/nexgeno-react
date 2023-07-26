import React from "react";
import NavBar from "../Navbar";
import Footer from "../Footer";
import { caseStudyDB } from "../utils/Database";
import MobileNav from "../components/MobileNav/MobileNav";
import { Link } from "react-router-dom";

const CaseStudyD = () => {
  return (
    <>
      <NavBar />
      <MobileNav />

      <div className="caseStudy">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center mt-3">Work</h1>
            </div>
          </div>
          <div className="row my-2">
            {caseStudyDB.map((elem) => {
              const { id, subLink, heading, title, img } = elem;
              return (
                <div key={id} className="col-md-6 case_box">
                  <div className="case-main-page">
                    <a href={subLink}>
                      <p className="text-white">{heading}</p>
                      <p className="fs-3 text-white">{title}</p>
                    </a>
                    <Link to={subLink}>
                      <img src={img} alt="" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CaseStudyD;
