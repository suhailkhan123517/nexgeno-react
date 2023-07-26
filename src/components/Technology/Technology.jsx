import React from "react";
import NavBar from "../../Navbar";
import Footer from "../../Footer";
import "./Technology.css";
import { technologyD } from "../../utils/Database";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { themeContext } from "../../Context";
import MobileNav from "../MobileNav/MobileNav";
import replace from "../../utils/replaceTitle";
import generateSchemaMarkup from "../../utils/SchemaMarkup";
import { Helmet } from "react-helmet";

export default function Technology() {
  const navigate = useNavigate();

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  replace({
    title: "Technology",
  });

  const pageData = {
    title: "Technology",
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

      <div className="container">
        <div className="row">
          <div className="col-12 text-center ">
            <h1 className="mb-5 mt-5">Technology</h1>
          </div>
        </div>
        <div className="row">
          {technologyD.map((item) => {
            const { link, icon, id, stitle } = item;
            return (
              <div key={id} className="col-md-3 mb-5">
                <div
                  onClick={() => navigate(link)}
                  className={
                    darkMode ? "tech-container_dark" : "tech-container"
                  }
                >
                  <div className="tech-icon">
                    <img src={icon} alt="" />
                  </div>
                  <div className="tech-heading text-center">
                    <h3>{stitle}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
