import React from "react";
import NavBar from "../Navbar";
import Footer from "../Footer";
import { useContext } from "react";
import { themeContext } from "../Context";
import MobileNav from "../components/MobileNav/MobileNav";
import replace from "../utils/replaceTitle";
import generateSchemaMarkup from "../utils/SchemaMarkup";
import { Helmet } from "react-helmet";

const Certifications = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  replace({
    title: "Certifications",
    image: "/images/nexgeno_about.png",
  });

  const pageData = {
    title: "Certifications",
    imageUrl: "/images/nexgeno_about.png",
    url: "certifications.htm",
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

        <div className="about_inner_banner">
          <img src="/images/aboutusbbaner.jpg" className="img-fluid" />
        </div>
        <section className="our-infrastructure">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="common-heading text-l">
                  <h2
                    style={{
                      color: darkMode ? "white" : "",
                    }}
                    className="pb-2 text-center"
                  >
                    Certifications
                  </h2>
                  <img src="/images/nexgeno_about.png" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Certifications;
