import React, { useContext } from "react";
import NavBar from "../Navbar";
import Footer from "../Footer";
import { themeContext } from "../Context";
import MobileNav from "../components/MobileNav/MobileNav";
import replace from "../utils/replaceTitle";
import generateSchemaMarkup from "../utils/SchemaMarkup";
import { Helmet } from "react-helmet";

const Aboutus = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  replace({
    title: "About Agency",
    description:
      "At Nexgeno Technology Pvt Ltd, we are dedicated to providing professional web designing and development services to businesses of all sizes. Founded in 2022, our company has quickly established itself as a leading provider of web solutions.",
    image: "/images/Nexgeno-About-us.jpg",
  });

  const pageData = {
    title: "About Agency",
    description:
      "At Nexgeno Technology Pvt Ltd, we are dedicated to providing professional web designing and development services to businesses of all sizes. Founded in 2022, our company has quickly established itself as a leading provider of web solutions.",
    url: "/portfolio-list.htm",
    imageUrl: "/images/Nexgeno-About-us.jpg",
    url: "/about-us.htm",
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

      <div className="about_inner_banner">
        <img src="images/aboutusbbaner.jpg" className="img-fluid" />
      </div>

      <section className="about-agency pad-tb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-md-2">
              <img
                src="/images/Nexgeno-About-us.jpg"
                alt="about"
                className="about-us-img"
              />
            </div>
            <div className="col-lg-6 order-md-1">
              <div className="common-heading text-l">
                <h2
                  style={{
                    color: darkMode ? "white" : "",
                  }}
                >
                  About Agency
                </h2>
                <p>
                  At Nexgeno Technology Pvt Ltd, we are dedicated to providing
                  professional web designing and development services to
                  businesses of all sizes. Founded in 2022, our company has
                  quickly established itself as a leading provider of web
                  solutions.
                </p>
                <p>
                  Our team of experienced designers and developers are dedicated
                  to creating visually appealing and user-friendly websites that
                  are tailored to your specific needs and goals. We understand
                  that every business is unique, and that's why we take a
                  personalized approach to every project.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="common-heading text-l pt-3">
                <p>
                  Our web designing services include website design and
                  development, responsive design, e-commerce solutions, content
                  management systems, search engine optimization, and website
                  maintenance and support. We use the latest technologies and
                  trends in web designing to create websites that are not only
                  visually pleasing but also provide a great user experience.
                </p>
                <p>
                  In addition to web designing, we also specialize in web
                  development services. Our developers are experts in creating
                  custom web applications that are tailored to your business
                  needs. We use the latest technologies and frameworks to ensure
                  that your website is fast, secure, and easy to use.
                </p>
                <p>
                  We are committed to delivering your project on time and within
                  budget. Our team will work closely with you to understand your
                  specific needs and goals, and provide you with a timeline for
                  the project. We offer flexible pricing options that can fit
                  any budget.
                </p>
                <p>
                  At Nexgeno Technology Pvt Ltd, we are dedicated to providing
                  the best service possible. We are committed to providing
                  excellent customer service and support, and we are always
                  available to answer any questions you may have.
                </p>
                <p>
                  If you're ready to take your business to the next level with a
                  professional website, please don't hesitate to contact us. We
                  would be more than happy to discuss your project and provide
                  you with a free quote."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Aboutus;
