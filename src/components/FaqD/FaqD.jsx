import React from "react";
import "./FaqD.css";
import NavBar from "../../Navbar";
import Footer from "../../Footer";
import { faqD } from "../../utils/Database";
import { useContext } from "react";
import { themeContext } from "../../Context";
import MobileNav from "../MobileNav/MobileNav";
import replace from "../../utils/replaceTitle";
import generateSchemaMarkup from "../../utils/SchemaMarkup";
import { Helmet } from "react-helmet";

export default function FaqD() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  replace({
    title: "FAQ",
    description: "Frequently Asked Questions",
  });

  const pageData = {
    title: "FAQ",
    description: "Frequently Asked Questions",
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

      <div className="about_inner_banner ">
        <img src="images/aboutusbbaner.jpg" className="img-fluid" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="common-heading text-center my-5">
              <h2
                style={{
                  color: darkMode ? "white" : "",
                }}
                className="pb-2"
              >
                Frequently Asked Questions
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className={darkMode ? "accordion_dark" : "accordion"}>
              {faqD.map((item) => (
                <li>
                  <input type="radio" name="accordion" id={item.id} />
                  <label htmlFor={item.id}>{item.qustion}</label>
                  <div className="content">
                    <p>{item.answer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
