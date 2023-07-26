import React from "react";
import NavBar from "../Navbar";
import Footer from "../Footer";
import { PortfolioList } from "../utils/Database";
import MobileNav from "../components/MobileNav/MobileNav";
import Button from "../components/button/Button";
import replace from "../utils/replaceTitle";
import { Helmet } from "react-helmet";
import generateSchemaMarkup from "../utils/SchemaMarkup";

const MainPortfolio = () => {
  replace({
    title: "Portfolio",
    description: "Portfolio of Nexgeno Private Limited Company",
  });

  const pageData = {
    title: "Portfolio",
    description: "Portfolio of Nexgeno Private Limited Company",
    url: "/portfolio-list.htm",
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

      <section className="success-stories">
        <div className="container">
          <div className="row">
            <div className="btn-main1 d-flex justify-content-between">
              <Button
                url="/inquiry.htm"
                icon="fa fa-arrow-right ms-2"
                text="Get a Free Quote Now"
              />
              <Button
                url="/portfolio.htm"
                icon="fa fa-arrow-right ms-2"
                text="View More"
              />
            </div>
            <div className="col-md-12 port-container">
              <div className="row">
                {PortfolioList.map((elem) => {
                  const { id, link, deskIMG, mobImg, title, description } =
                    elem;

                  return (
                    <div className="col-md-6 mb-0 mb-md-5">
                      <div className="pe-5 ps-2 pb-4 pb-lg-0">
                        <a
                          className="hover-animation"
                          target="_blank"
                          href={link}
                        >
                          <div>
                            <img className="img-fluid" src={deskIMG} alt="" />
                            <img
                              className="hoverImages img-fluid"
                              src={mobImg}
                              alt=""
                            />
                          </div>
                          <div className="item-title ">
                            <h3 className="hover-underline-animation mt-3">
                              {title}
                            </h3>
                          </div>
                          <p className="text-white">{description}</p>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-md-12">
              <div className="common-heading text-center pb-lg-5 pb-3">
                <h2 className="pb-2 color_white">
                  <marquee
                    className="marq"
                    behavior="alternate"
                    direction="left"
                  >
                    <h1>
                      maaymart.com | octanetworks.com | lawtendo.com |
                      geci.co.in | greenhabit.in | escrowv.com |
                      lms.attariclasses.in | abayadesigner.com |
                      attariclasses.in | vmarsh.com | ringnetworks.in |
                      thev2technologies.com | cancrijewells.com | thelastbite.in
                      | kucedibles.com |
                    </h1>
                  </marquee>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MainPortfolio;
